# Handmade Gifts — An E-Commerce Website for Handmade Products

**College ITT (Information Technology & Tools) Assignment Project**  
*Visual Prototype & Static Website Demonstration*

---

## 📌 Project Overview

**Handmade Gifts** is a visually polished, responsive static e-commerce prototype designed to showcase authentic, handcrafted artisan products from Indian handicraft guilds (Khurja pottery, Saharanpur woodcraft, Jaipur macrame, Wayanad soy candles, Auroville herbal soaps, and Cuttack silver filigree).

This prototype was developed specifically for a **college project report demonstration** to provide authentic, photorealistic screens, responsive layouts, and interactive client-side workflows without requiring a complex backend database, PHP server, or real payment processor.

---

## 🎨 Design System & Aesthetic

| Element | Specification | Purpose |
| :--- | :--- | :--- |
| **Background Color** | Warm Cream (`#FAF7F2`) | Creates a cozy, organic, handcrafted feel |
| **Primary Color** | Terracotta (`#B85C38`) | Evokes Indian kiln-fired earthenware pottery |
| **Accent Color** | Sage Green (`#8A9A7B`) | Symbolizes eco-friendly, organic, and sustainable values |
| **Headings Font** | *Playfair Display* (Serif) | Adds luxury, heritage, and artisanal elegance |
| **Body Font** | *Poppins* (Sans-serif) | Clean, highly legible modern e-commerce typography |
| **Framework** | Bootstrap 5.3.3 + Bootstrap Icons | Grid responsiveness, modals, carousels, toasts |
| **Imagery** | Curated high-resolution Unsplash craft photography | Eliminates empty placeholder rectangles |

---

## 📁 Project File Structure

```text
Handmade gifts project/
│
├── index.html              # 1. Home Page (Hero banner, 3-slide carousel, 6 categories, featured crafts)
├── products.html           # 2. Products Catalog (16 items, live search, budget & category filters, sorting)
├── product-details.html    # 3. Product Details (Gallery switcher, specs, artisan story, add to cart, related)
├── register.html           # 4. Registration Page (Patron account form, validation, quick demo fill)
├── login.html              # 5. Login Page (Patron login, show/hide password, quick demo fill)
├── cart.html               # 6. Shopping Cart (3 sample items, quantity controls, coupon ARTISAN20, free shipping bar)
├── checkout.html           # 7. Checkout & Confirmation (Delivery address, simulated COD, order modal)
├── contact.html            # 8. Contact & About Page (Our story, core values, FAQ accordion, contact form)
│
├── assets/
│   ├── css/
│   │   └── style.css       # Custom design system, typography, colors, animations, responsive rules
│   └── js/
│       └── script.js       # Central catalog (16 products), localStorage cart, search/filter, toasts, modal
│
└── README.md               # Project guide and instructions for report evaluation
```

---

## 🚀 How to Run the Static Prototype

No server installation, PHP runtime, or database setup is required. You can launch and run the website in any modern web browser using any of the following methods:

### Method 1: Direct File Launch (Quickest)
1. Open the project folder in your file manager:
   ```
   c:\Users\Jayesh\OneDrive\Desktop\Handmade gifts project
   ```
2. Double-click **`index.html`** to open it in **Google Chrome**, **Microsoft Edge**, **Mozilla Firefox**, or **Safari**.
3. All internal links and client-side interactions work directly via standard browser file protocols.

### Method 2: VS Code Live Server Extension
1. Open the folder in Visual Studio Code.
2. Install the **Live Server** extension (by *Ritwick Dey*) if not already installed.
3. Right-click **`index.html`** and select **"Open with Live Server"**.
4. The prototype will open at `http://127.0.0.1:5500/index.html`.

### Method 3: Python Built-in Local Server
Open PowerShell in the project directory and run:
```powershell
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## 🌐 8 Navigable Pages & Features Guide

### 1. Home Page (`index.html`)
- **Promotional Announcement Bar:** Highlight banner with festive coupon code `ARTISAN20`.
- **Navigation Bar:** Brand logo mark, navigation links, Categories dropdown, cart badge counter.
- **Hero Banner:** Heading *"Thoughtfully Handmade. Beautifully Gifted."*, call-to-action buttons, artisan statistics counter.
- **Three-Slide Carousel:** High-resolution craft slides featuring Earth & Hearth Clayware, Pure Aromatherapy Candles, and Festive Gift Hampers.
- **Category Grid:** 6 craft category cards (Ceramics, Scented Soy, Macrame, Wooden Crafts, Brass Jewelry, Gift Hampers).
- **Featured Products:** Dynamically populated handmade items with ratings and quick add-to-cart buttons.
- **Why Choose Us:** 4 artisan value cards (100% Handcrafted, Eco-friendly, Fair Trade to Karigars, Bespoke Touches).
- **Custom Gift Hamper CTA:** Promotional banner for wedding and festival gifts.
- **Patron Testimonials:** Verified reviews from real gifting patrons.
- **Newsletter Subscription:** Interactive subscription box with instant toast feedback.

### 2. Products Catalog (`products.html`)
- **Live Search Filtering:** Real-time search across product names, categories, descriptions, and artisan guild names.
- **Category Filter Dropdown:** Filter by Ceramics, Candles, Home Decor, Woodcraft, Jewelry, Bath & Body, or Gift Hampers.
- **Budget Range Filter:** Radio filters for Under ₹500, ₹500–₹1,000, ₹1,000–₹2,000, and Luxury sets (Above ₹2,000).
- **Sorting Options:** Sort by Featured, Price (Low to High), Price (High to Low), Highest Rated, and Newest.
- **Product Counter:** Live feedback displaying *"Showing X of 16 handcrafted gifts"*.
- **Product Cards:** Image hover zoom, discount badges, ratings, Rupee formatting, View Details, and Add to Bag buttons.
- **Reset Filters Button:** Single-click reset restoring full catalog view.

### 3. Product Details Page (`product-details.html`)
- **URL Parameter Support:** Supports `?id=1` to `?id=16` to dynamically display whichever craft is selected.
- **Breadcrumb Navigation:** `Home > Products > Category > Product Name`.
- **Interactive Image Gallery:** Clickable thumbnail gallery switcher to view multiple angles.
- **Craftsmanship Badges:** 100% Handcrafted, Lead-free, Eco-friendly, Artisan Certified.
- **Price & Discount:** Shows current price in ₹ INR alongside strikethrough original price and discount percentage.
- **Artisan Guild Spotlight:** Card highlighting the artisan's name, village cluster, and heritage story.
- **Quantity Selector:** Interactive `+` and `-` quantity controls.
- **Action Buttons:** "Add to Shopping Bag" (updates cart with animated toast) and "Buy Now" (redirects straight to checkout).
- **Information Tabs:** Tabbed content for *Specifications & Craft Details*, *Care & Longevity*, and *Patron Reviews (4.9 ★)*.
- **Related Products:** 4 recommended craft items from the same category.

### 4. Registration Page (`register.html`)
- Split-screen layout featuring artisan patron community benefits.
- Form fields: Full Name, Email Address, Phone Number, Password, Confirm Password, and Terms Checkbox.
- **Quick Demo Fill Button:** Instantly populates sample student/customer details for effortless teacher/examiner evaluation.
- Form validation with clear feedback and password confirmation check.

### 5. Login Page (`login.html`)
- Centered luxury card matching the warm cream and terracotta theme.
- Form fields: Email, Password, Remember Me, Forgot Password dialog.
- **Show/Hide Password Toggle:** Eye icon button to reveal or mask entered passwords.
- **Quick Demo Account Button:** Auto-fills `ananya.sharma@example.com` and demo password.
- Interactive sign-in simulation with personalized welcome toast.

### 6. Shopping Cart Page (`cart.html`)
- **Pre-populated Sample Cart:** Automatically displays 3 sample handmade products initially (Terracotta Tea Set, Lavender Candle, Macrame Tapestry).
- **Real-Time Recalculation:** Interactive `+` / `-` quantity buttons update row subtotals, cart subtotal, and grand total dynamically.
- **Item Removal:** Trash button removes items with automatic calculation refresh.
- **Free Delivery Progress Bar:** Visual progress tracking toward the ₹999 free shipping threshold.
- **Interactive Coupon Voucher:** Applying code **`ARTISAN20`** grants a 20% discount with instant toast confirmation and recalculation.
- **Order Summary:** Displays Bag Subtotal, Voucher Discount, Shipping Fee, and Estimated Grand Total.
- **Empty State Handler:** Gracefully presents an empty-cart state with a *"Start Shopping"* button if all items are cleared.

### 7. Checkout Page & Confirmation Modal (`checkout.html`)
- **Two-Column Layout:** Delivery Information on the left, live Order Summary preview on the right.
- **Delivery Address Form:** First Name, Last Name, Email, Phone, Street Address, City, State, and PIN code.
- **Payment Method Simulation:** Highlights Cash on Delivery (COD) as the default recommended demo option, alongside UPI and Cards demo radio selectors.
- **Form Validation:** Validates required address fields before permitting order submission.
- **Place Order Simulation:** Button displays a realistic loading spinner, then opens a **polished Order Confirmation Screen**:
  - Green animated checkmark circle.
  - Generated Demo Order ID (e.g., `#HG-2026-8941`).
  - Estimated delivery date calculation (5 business days from order).
  - Customer name and address recap.
  - Order total breakdown.
  - *"Print Demo Receipt"* button and *"Return to Home"* button.

### 8. Contact & About Page (`contact.html`)
- **Our Story:** The philosophy of supporting traditional rural karigars over industrial mass-production.
- **Four Core Values:** Heritage Preservation, Empowering Women Artisans, Zero Plastic Earth Ethos, Heartfelt Gifting.
- **Artisan Spotlight:** Profile cards showcasing master potters, woodcarvers, and herbalists.
- **Fictional Demonstration Contact Information:**
  - *Studio Address:* 42 Artisan Heritage Lane, Kala Ghoda, Mumbai - 400001, Maharashtra, India.
  - *Demo Helpline:* +91 (022) 5550-CRAFT / +91 98200 12345
  - *Demo Email:* support@handmadegifts-demo.org
  - *Hours:* Mon - Sat: 9:30 AM – 7:00 PM IST
- **Interactive Inquiry Form:** Name, Email, Phone, Subject dropdown, and Message with instant feedback toast.
- **FAQ Accordion:** Expandable answers addressing craft authenticity, personalized calligraphy, packaging, and Cash on Delivery.

---

## 📸 Recommended Screenshots for College ITT Project Report

For the project report document / presentation slides, capture the following high-impact screenshots:

1. **Home Page Hero Banner & Carousel** (`index.html`) — Captures the primary branding, heading, and aesthetic.
2. **Product Categories Grid & Why Choose Us** (`index.html`) — Illustrates the 6 craft categories and USP cards.
3. **Products Catalog with Search & Filter** (`products.html`) — Demonstrates live search, category selector, budget filters, and product cards with prices in ₹ INR.
4. **Product Details View & Thumbnail Gallery** (`product-details.html?id=1`) — Highlights product specifications, artisan story card, and tabbed details.
5. **Interactive Shopping Cart** (`cart.html`) — Captures the 3 sample items, quantity controls, coupon discount (`ARTISAN20`), and free shipping progress bar.
6. **Delivery Checkout Form** (`checkout.html`) — Demonstrates the two-column checkout layout, address fields, and Cash on Delivery option.
7. **Order Confirmation Success Screen** (`checkout.html` after clicking Place Order) — Captures the green checkmark badge, generated Order ID, and delivery estimate.
8. **Patron Login & Register Screens** (`login.html` & `register.html`) — Demonstrates authentication forms with the "Quick Demo Fill" convenience buttons.
9. **About & Contact Studio Page** (`contact.html`) — Captures the artisan heritage mission, studio contact info, and FAQ accordion.
10. **Mobile Viewport Test** (Press `F12` in Chrome, toggle Mobile device toolbar) — Shows that the layout is responsive on smartphones.

---

## 🛠️ Technologies Used

- **HTML5:** Semantic markup (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`)
- **CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, media queries, smooth micro-transitions
- **Bootstrap 5.3.3:** Responsive 12-column grid system, sticky navbar, modals, cards, carousels, toasts
- **Bootstrap Icons 1.11.3:** Modern vector iconography
- **Vanilla JavaScript (ES6+):** Client-side state management, `localStorage` cart persistence, dynamic DOM rendering, real-time calculations, form validation

---

*Handmade Gifts — Crafted for College ITT Assignment Demonstration.*
