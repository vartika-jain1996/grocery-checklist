// Supabase Edge Function: scan-receipt
// Reads a grocery receipt photo with OpenAI vision and returns clean line items.
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
function json(obj: unknown, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { ...cors, "Content-Type": "application/json" } });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Use POST" }, 405);
  try {
    const { image } = await req.json();
    if (!image) return json({ error: "No image provided" }, 400);
    const key = Deno.env.get("OPENAI_API_KEY");
    if (!key) return json({ error: "Server is missing OPENAI_API_KEY" }, 500);

    const prompt =
      "You are a receipt reader. Extract every purchased grocery/product line item from this store receipt photo. " +
      "Return ONLY JSON of the form {\"items\":[{\"name\":\"...\",\"qty\":\"...\",\"price\":number_or_null}]}. " +
      "Use clean, human-readable product names in Title Case, expanding common abbreviations (e.g. 'COL PANEER' -> 'Low-fat Paneer', 'BNS' -> 'Bananas'). " +
      "qty is a short string like '1', '2', '500g' if shown, else '1'. price is the line price as a number if shown, else null. " +
      "SKIP totals, subtotals, tax/GST, savings/discounts, loyalty, payment/change lines, store name, address, date, receipt/ABN numbers and any non-product line. " +
      "If the image is unreadable or has no products, return {\"items\":[]}.";

    const body = {
      model: "gpt-4o-mini",
      temperature: 0,
      max_tokens: 1500,
      response_format: { type: "json_object" },
      messages: [{
        role: "user",
        content: [
          { type: "text", text: prompt },
          { type: "image_url", image_url: { url: image } },
        ],
      }],
    };

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await r.json();
    if (!r.ok) return json({ error: data?.error?.message || "AI request failed" }, 502);

    let parsed: { items?: unknown[] } = { items: [] };
    try { parsed = JSON.parse(data.choices?.[0]?.message?.content || "{}"); } catch (_e) { parsed = { items: [] }; }
    const items = Array.isArray(parsed.items) ? parsed.items : [];
    return json({ items }, 200);
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});
