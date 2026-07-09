# Grocery & Meal Planner — App Store Submission Guide

Everything you need to get the app onto the Apple App Store, step by step.
Bundle ID: **com.vartikajain.groceryplanner**

---

## 0. What you need first
- ✅ Apple Developer Program membership (approved) — the $99/yr enrollment.
- ✅ The PWABuilder zip you downloaded (unzip it).
- ✅ **Xcode** installed on your Mac (free from the Mac App Store).
- ✅ The Google secret pasted into Supabase (so login works).

Inside the unzipped PWABuilder folder there's a `README`/instructions file and the iOS project (a `src` folder with a `.xcworkspace` or `.xcodeproj`, plus a `next-steps` doc). PWABuilder's own instructions run first — usually: open the folder, run the included script if present, then open the project in Xcode.

---

## 1. Open the project in Xcode
1. Unzip the package.
2. Double-click the `.xcworkspace` file (if there's no workspace, open the `.xcodeproj`).
3. Xcode opens. In the left sidebar, click the top blue project icon → the **Signing & Capabilities** tab.

## 2. Set signing
1. **Team:** select your name (your Apple Developer account) from the dropdown.
2. **Bundle Identifier:** confirm it's `com.vartikajain.groceryplanner` (change here if needed).
3. Tick **Automatically manage signing** — Xcode creates the certificate/provisioning profile for you.
   - If it errors that the bundle ID is taken, change it slightly (e.g. `com.vartikajain.groceries`).

## 3. Test on a simulator (optional but smart)
1. Top bar: pick an iPhone simulator (e.g. iPhone 15).
2. Press the ▶︎ Run button. The app should launch showing your login screen.
3. Sign in with **email** and confirm the list loads. (Google may not work in the wrapper — that's expected; email is your reliable method in the app.)

## 4. Archive & upload
1. Top bar device selector → choose **Any iOS Device (arm64)** (not a simulator).
2. Menu: **Product → Archive**. Wait for it to build (a few minutes).
3. The **Organizer** window opens with your archive → click **Distribute App**.
4. Choose **App Store Connect → Upload** → keep defaults → **Upload**.
5. Wait for "Upload Successful."

---

## 5. Create the listing in App Store Connect
Go to **appstoreconnect.apple.com** → **My Apps** → **＋ → New App**.

- **Platform:** iOS
- **Name:** `Grocery & Meal Planner`  *(must be unique on the App Store; if taken, try “Grocery & Meal Planner+” or add a word)*
- **Primary language:** English (Australia)
- **Bundle ID:** com.vartikajain.groceryplanner (pick it from the list)
- **SKU:** `groceryplanner01` (any unique text, internal only)
- **User access:** Full Access

### Copy-paste listing text
**Subtitle (max 30 chars):**
`Lists, meal plan & receipts`

**Promotional text:**
`Plan your week, share one grocery list, scan receipts into your list, and track what you spend — all in one simple app.`

**Description:**
```
Grocery & Meal Planner keeps your whole week of food in one simple place.

• Shared grocery checklist — organised by store (Costco, Woolworths/Coles, Indian grocery, essentials), with tap-to-tick and a live progress bar.
• Weekly meal plan — see exactly what to cook and eat each day, portioned for everyone, with a week-at-a-glance view.
• Recipes on tap — open any dish to see its ingredients and method.
• Prep day plan — a cut list, cook order and fridge/freezer guide to batch-cook the week.
• Receipt scanning — snap a photo of your shop and it reads the items straight onto your list.
• Cost tracking — log each shop and compare what you spend over time.
• Search — find any ingredient instantly.
• Private accounts — sign in with email, keep your own list, and share one list with your partner using a share code.

Everything syncs across your devices automatically.
```

**Keywords (max 100 chars):**
`grocery,shopping list,meal plan,meal prep,recipes,checklist,pantry,receipt,groceries,cooking,budget`

**Support URL:** `https://vartika-jain1996.github.io/grocery-checklist/`
**Privacy Policy URL:** `https://vartika-jain1996.github.io/grocery-checklist/privacy.html`

**Category:** Primary **Food & Drink**; Secondary **Productivity**
**Age rating:** answer all "No" → **4+**

### Screenshots (required)
Apple needs 6.7" iPhone screenshots (1290 × 2796). Easiest way:
1. Run the app in the **iPhone 15 Pro Max** simulator.
2. Show: the Shopping list, the Meal Plan (Today), a recipe open, the Order Log with a cost, and the login screen.
3. In the simulator: **File → Save Screen** (or Cmd+S) for each — they save at the right size.
4. Upload 3–5 of them in App Store Connect under the 6.7" display.

---

## 6. App privacy answers
App Store Connect → your app → **App Privacy** → "Get Started". Declare:
- **Contact Info → Email address:** Yes. Purpose: **App Functionality** (sign-in). Linked to identity: Yes. Used for tracking: **No**.
- **User Content → Photos or Videos:** Yes (bill photos). Purpose: **App Functionality**. Linked: Yes. Tracking: **No**.
- **User Content → Other User Content:** Yes (your lists). Purpose: **App Functionality**. Linked: Yes. Tracking: **No**.
- Everything else: **not collected**. No tracking, no ads.

---

## 7. Submit for review
1. On the app's version page, scroll to **Build** → **＋** → pick the build you uploaded (may take ~15 min to finish processing after upload).
2. Fill **App Review Information**: your name, phone, email, and (important) a **demo account** so reviewers can log in — create a test account in the app (e.g. `review@yourdomain` / a password) and put those credentials in the notes.
3. Click **Add for Review → Submit**.
4. Review usually takes 1–3 days.

### If Apple rejects it (Guideline 4.2 – "minimum functionality")
This is the main risk for web-wrapped apps. If it happens, reply in Resolution Center noting the app's real features (offline lists, meal planning, on-device receipt scanning, accounts & sharing, cost tracking) — genuine utility usually resolves it. Ping me and I'll help you word the response or add a small native touch if needed.

---

*Questions at any step — send me a screenshot and I'll tell you exactly what to click.*
