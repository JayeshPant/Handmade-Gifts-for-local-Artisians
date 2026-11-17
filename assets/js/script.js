/**
 * Handmade Gifts — E-Commerce Website for Handmade Products
 * College ITT Assignment Prototype
 * Client-Side State Management, Catalog, Cart & Interactions
 */

// Central Product Catalog
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Handmade Terracotta Tea Set & 4 Kulhads",
    category: "Ceramics & Pottery",
    price: 1299,
    originalPrice: 1699,
    rating: 4.9,
    reviewsCount: 128,
    badge: "Bestseller",
    badgeType: "terracotta",
    artisan: "Sunita Devi & Khurja Guild",
    location: "Khurja, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Wheel-thrown by master artisans in Khurja, this artisanal terracotta tea kettle comes paired with four unglazed clay kulhads. Naturally porous and fired in traditional kilns, it lends a distinct earthy aroma (sondhi khushboo) to freshly brewed chai.",
    craftsmanship: "Hand-thrown natural red clay, sun-dried, kiln-fired at 950°C, food-safe lead-free interior glaze.",
    materials: "100% Organic Terracotta River Clay",
    dimensions: "Pot: 850ml capacity | Kulhads: 140ml each",
    isFeatured: true
  },
  {
    id: 2,
    name: "Aromatic Soy & Lavender Amber Jar Candle",
    category: "Candles & Fragrance",
    price: 549,
    originalPrice: 799,
    rating: 4.8,
    reviewsCount: 94,
    badge: "Eco-Friendly",
    badgeType: "sage",
    artisan: "Meera Nair",
    location: "Wayanad, Kerala",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Hand-poured in reusable apothecary amber jars with pure soy wax, wooden crackling wicks, and steam-distilled French lavender & cedarwood essential oils. Clean 45-hour soot-free burn that relaxes your senses.",
    craftsmanship: "Small-batch hand-poured with non-GMO soy wax, organic cotton-core wooden wick.",
    materials: "100% Soy Wax, Pure Lavender Essential Oil",
    dimensions: "220g / 7.7 oz | Burn time: 45+ hours",
    isFeatured: true
  },
  {
    id: 3,
    name: "Bohemian Knitted Macrame Wall Tapestry",
    category: "Home Decor",
    price: 899,
    originalPrice: 1299,
    rating: 4.7,
    reviewsCount: 76,
    badge: "Hand-Knotted",
    badgeType: "terracotta",
    artisan: "Pooja Sharma & Women Weaver Circle",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Woven with unbleached organic cotton cords suspended from a sustainably harvested natural driftwood rod. Features intricate leaf knots and geometric tassels that bring cozy warmth to your living room or bedroom.",
    craftsmanship: "Hand-knotted macrame over 14 hours using 4mm triple-twisted cotton cords.",
    materials: "100% Unbleached Cotton & Natural Driftwood",
    dimensions: "Width: 45cm | Length: 80cm",
    isFeatured: true
  },
  {
    id: 4,
    name: "Hand-Carved Sheesham Wood Spice Box",
    category: "Wooden Crafts",
    price: 1150,
    originalPrice: 1499,
    rating: 4.9,
    reviewsCount: 112,
    badge: "Heirloom Craft",
    badgeType: "terracotta",
    artisan: "Ram Swaroop Sharma",
    location: "Saharanpur, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Traditional 9-compartment masala dani carved out of premium Indian Rosewood (Sheesham) with a see-through glass lid and a hand-carved miniature wooden spoon. Treated with food-safe walnut oil finish.",
    craftsmanship: "Chiseled by fifth-generation Saharanpur wood craftsmen with brass latches.",
    materials: "Reclaimed Sheesham Hardwood & Brass Accents",
    dimensions: "20cm x 20cm x 6cm | 9 inner containers",
    isFeatured: true
  },
  {
    id: 5,
    name: "Pure Cold-Pressed Artisan Soap Gift Box (Set of 4)",
    category: "Bath & Body",
    price: 680,
    originalPrice: 850,
    rating: 4.9,
    reviewsCount: 88,
    badge: "100% Natural",
    badgeType: "sage",
    artisan: "Dr. Ananya Roy",
    location: "Auroville, Puducherry",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Four cured handmade cold-process soap bars: Charcoal Detox, Wild Turmeric & Sandalwood, Goat Milk & Oats, and Himalayan Cedar. Packaged in biodegradable seed paper that blooms wildflowers when planted.",
    craftsmanship: "Cold-processed, cured for 6 weeks, zero chemical foaming agents or sulfates.",
    materials: "Cold-pressed Coconut Oil, Shea Butter, Essential Oils",
    dimensions: "4 bars x 100g each in handmade paper box",
    isFeatured: true
  },
  {
    id: 6,
    name: "Vintage Hand-Bound Leather Journal with Brass Clasp",
    category: "Wooden Crafts",
    price: 950,
    originalPrice: 1200,
    rating: 4.8,
    reviewsCount: 140,
    badge: "Artisan Leather",
    badgeType: "terracotta",
    artisan: "Mohd. Rafiq & Sons",
    location: "Pushkar, Rajasthan",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Hand-embossed full-grain buffalo leather diary with 200 deckle-edge recycled cotton paper pages. Fountain pen friendly, bleed-resistant, and bound with sturdy saddle stitching and an antique swing lock.",
    craftsmanship: "Hand-stitched spine, vegetable-tanned genuine leather, tree-free cotton rag pages.",
    materials: "Vegetable-tanned Leather, 150 GSM Recycled Khadi Paper",
    dimensions: "A5 Size (8.5 x 6 inches) | 200 blank pages",
    isFeatured: true
  },
  {
    id: 7,
    name: "Hand-Embroidered Botanical Floral Hoop Art",
    category: "Home Decor",
    price: 749,
    originalPrice: 999,
    rating: 4.9,
    reviewsCount: 63,
    badge: "One-of-a-Kind",
    badgeType: "terracotta",
    artisan: "Kavita S. & Nilgiri Craft Collective",
    location: "Ooty, Tamil Nadu",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Intricately hand-embroidered with French knots, bullion stitches, and satin threadwork on unbleached linen fabric. Framed in a polished 8-inch bamboo embroidery hoop with a brass adjustment screw ready for wall hanging.",
    craftsmanship: "Over 18 hours of needlecraft using organic anchor silk floss threads.",
    materials: "Natural Linen Fabric, Cotton Floss, Bamboo Hoop",
    dimensions: "Diameter: 8 inches (20 cm)",
    isFeatured: true
  },
  {
    id: 8,
    name: "Royal Festive Wooden Keepsake Gift Hamper",
    category: "Gift Hampers",
    price: 2499,
    originalPrice: 3200,
    rating: 5.0,
    reviewsCount: 82,
    badge: "Luxury Gift Box",
    badgeType: "terracotta",
    artisan: "Curated Artisan Collective",
    location: "Multi-State Guilds",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
    ],
    description: "An opulent gift chest containing: 1 Amber Soy Candle, 2 Terracotta Hand-painted Diyas, 1 Artisanal Cold-pressed Soap, 1 Jar of Kashmir Forest Honey (150g), and a handwritten brass calligraphy greeting card.",
    craftsmanship: "Packaged inside a hand-carved pinewood crate with silk ribbons and dried florals.",
    materials: "Pinewood, Terracotta, Soy Wax, Natural Honey",
    dimensions: "Box: 30cm x 22cm x 12cm",
    isFeatured: true
  },
  {
    id: 9,
    name: "Handcrafted Brass Meenakari Drop Earrings",
    category: "Handcrafted Jewelry",
    price: 599,
    originalPrice: 899,
    rating: 4.8,
    reviewsCount: 105,
    badge: "Trending",
    badgeType: "terracotta",
    artisan: "Rajesh Soni",
    location: "Varanasi, Uttar Pradesh",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Traditional Gulabi Meenakari enameled brass chandelier earrings studded with micro pearl beads. Lightweight, hypoallergenic, and hand-painted with pastel botanical motifs.",
    craftsmanship: "Molded from pure brass, fire-enameled by hand, 18k gold-washed finish.",
    materials: "Lead-free Brass, Enamel Pigment, Faux Pearls",
    dimensions: "Length: 5.5cm | Weight: 14g pair",
    isFeatured: false
  },
  {
    id: 10,
    name: "Hand-Glazed Ceramic Coffee Mug Duo",
    category: "Ceramics & Pottery",
    price: 699,
    originalPrice: 899,
    rating: 4.9,
    reviewsCount: 167,
    badge: "Artisan Pick",
    badgeType: "sage",
    artisan: "ClayWorks Studio",
    location: "Pondicherry",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A pair of stoneware pottery mugs dipped in dual-tone reactive sage green and warm terracotta glaze. Microwave and dishwasher safe, ergonomically sculpted for cozy coffee mornings.",
    craftsmanship: "High-fired stoneware clay at 1220°C, speckled stone texture.",
    materials: "High-fired Stoneware Ceramic Clay",
    dimensions: "Capacity: 350ml each (Set of 2)",
    isFeatured: false
  },
  {
    id: 11,
    name: "Pure Hammered Ayurvedic Copper Carafe & Tumbler",
    category: "Home Decor",
    price: 1799,
    originalPrice: 2299,
    rating: 4.7,
    reviewsCount: 89,
    badge: "Wellness",
    badgeType: "sage",
    artisan: "Tambat Guild (Coppersmiths)",
    location: "Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Traditional hammered copper water jug (1 Liter) with silicone-sealed lid and matching hammered tumbler. Naturally charges drinking water with copper ions according to Ayurvedic health wisdom.",
    craftsmanship: "Hand-beaten by hereditary Tambat artisans using traditional wooden anvils.",
    materials: "99.2% Pure Certified Copper",
    dimensions: "Jug: 1000ml | Tumbler: 300ml",
    isFeatured: false
  },
  {
    id: 12,
    name: "Natural Sea Salt & Rose Petal Bath Soak Duo",
    category: "Bath & Body",
    price: 499,
    originalPrice: 650,
    rating: 4.8,
    reviewsCount: 52,
    badge: "Under ₹500",
    badgeType: "sage",
    artisan: "Vedic Botanics",
    location: "Shimla, Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Mineral-rich pink Himalayan rock salts blended with Epsom salts, dried Damask rose petals, and soothing geranium floral oil. Helps relieve fatigue, muscle aches, and mental stress.",
    craftsmanship: "Hand-mixed in micro batches, free of synthetic perfumes and parabens.",
    materials: "Himalayan Pink Salt, Organic Rose Petals, Geranium Oil",
    dimensions: "Twin glass test tubes (120g total) with cork stoppers",
    isFeatured: false
  },
  {
    id: 13,
    name: "Ocean Wave Resin & Teak Wood Coasters (Set of 4)",
    category: "Home Decor",
    price: 850,
    originalPrice: 1100,
    rating: 4.9,
    reviewsCount: 93,
    badge: "Modern Artisan",
    badgeType: "terracotta",
    artisan: "Devika & Sagar",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Reclaimed teak wood slices merged with multi-layered epoxy resin imitating crashing turquoise ocean waves. Each coaster possesses a unique natural wood grain and waterproof heat-resistant finish.",
    craftsmanship: "Hand-poured resin art cured over 72 hours, hand-buffed smooth.",
    materials: "Reclaimed Burmese Teak, Food-grade Non-toxic Epoxy",
    dimensions: "Diameter: 10cm each | Thickness: 10mm (Set of 4)",
    isFeatured: false
  },
  {
    id: 14,
    name: "Handwoven Natural Jute Planter Basket",
    category: "Home Decor",
    price: 599,
    originalPrice: 799,
    rating: 4.7,
    reviewsCount: 71,
    badge: "Sustainable",
    badgeType: "sage",
    artisan: "Bengal Craft Loom Society",
    location: "Murshidabad, West Bengal",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Braided with golden jute fibers by skilled village artisans. Lined with waterproof inner film to protect floors while giving indoor houseplants a rustic, earthy Bohemian upgrade.",
    craftsmanship: "Braided rope coil technique using unbleached golden jute yarns.",
    materials: "100% Biodegradable Jute Fiber, Cotton Thread",
    dimensions: "Diameter: 22cm | Height: 20cm",
    isFeatured: false
  },
  {
    id: 15,
    name: "Raw Amber & Silver Filigree Statement Ring",
    category: "Handcrafted Jewelry",
    price: 1350,
    originalPrice: 1750,
    rating: 4.9,
    reviewsCount: 48,
    badge: "Sterling Silver",
    badgeType: "terracotta",
    artisan: "Bikramjit Silversmiths",
    location: "Cuttack, Odisha",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Showcases the UNESCO-recognized silver Tarakasi filigree art of Cuttack. Featuring fine silver wire mesh wrapping around a radiant honey-hued natural Baltic amber cabochon. Adjustable band.",
    craftsmanship: "Twisted silver wire filigree hammered and soldered by master silversmiths.",
    materials: "92.5 Sterling Silver, Genuine Baltic Amber",
    dimensions: "Adjustable size (Fits 6 - 9)",
    isFeatured: false
  },
  {
    id: 16,
    name: "Artisan Heritage Celebrations Gifting Box",
    category: "Gift Hampers",
    price: 2999,
    originalPrice: 3800,
    rating: 5.0,
    reviewsCount: 110,
    badge: "Grand Festive",
    badgeType: "terracotta",
    artisan: "Pan-India Crafts Guild",
    location: "Curated Artisans",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80"
    ],
    description: "The ultimate handcrafted gifting bundle: 1 Hand-painted Blue Pottery Bowl, 2 Soy Scented Votives, 1 Artisanal Cold-pressed Soap, 1 Pure Copper Drinking Mug, and 1 Brass Bookmark inside a hand-printed floral gift box.",
    craftsmanship: "Gift-wrapped with recycled seed paper tags and pure silk gold thread ribbons.",
    materials: "Stoneware, Pure Copper, Soy Wax, Natural Herbs",
    dimensions: "Luxury Box: 35cm x 28cm x 15cm",
    isFeatured: false
  }
];

// CART MANAGEMENT WITH LOCALSTORAGE
const CART_STORAGE_KEY = 'handmade_gifts_cart';
const COUPON_STORAGE_KEY = 'handmade_gifts_coupon';

// Default 3 sample items for demonstration
const DEFAULT_SAMPLE_CART = [
  { productId: 1, quantity: 1 },
  { productId: 2, quantity: 2 },
  { productId: 3, quantity: 1 }
];

function getCart() {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    if (!data) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(DEFAULT_SAMPLE_CART));
      return DEFAULT_SAMPLE_CART;
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_SAMPLE_CART;
  } catch (e) {
    return DEFAULT_SAMPLE_CART;
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateNavbarCartCount();
}

function addToCart(productId, quantity = 1, showToastNotification = true) {
  productId = parseInt(productId, 10);
  quantity = parseInt(quantity, 10) || 1;
  const cart = getCart();
  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  saveCart(cart);

  if (showToastNotification) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    const title = product ? product.name : "Handmade Item";
    showToast(`Added to Cart`, `"${title}" has been added to your shopping cart.`);
  }
}

function updateCartQuantity(productId, delta) {
  productId = parseInt(productId, 10);
  const cart = getCart();
  const item = cart.find(i => i.productId === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    saveCart(cart);
  }
}

function setCartQuantity(productId, qty) {
  productId = parseInt(productId, 10);
  qty = parseInt(qty, 10);
  const cart = getCart();
  const item = cart.find(i => i.productId === productId);
  if (item) {
    if (qty <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = qty;
      saveCart(cart);
    }
  }
}

function removeFromCart(productId) {
  productId = parseInt(productId, 10);
  let cart = getCart();
  cart = cart.filter(i => i.productId !== productId);
  saveCart(cart);
  showToast(`Item Removed`, `The handmade item has been removed from your cart.`);
}

function getCartCalculations() {
  const cart = getCart();
  let subtotal = 0;
  let itemsCount = 0;

  const items = cart.map(cartItem => {
    const product = PRODUCTS_DATA.find(p => p.id === cartItem.productId) || {
      id: cartItem.productId,
      name: "Handmade Product",
      price: 999,
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80",
      category: "Artisanal Craft"
    };
    const rowTotal = product.price * cartItem.quantity;
    subtotal += rowTotal;
    itemsCount += cartItem.quantity;
    return {
      ...cartItem,
      product,
      rowTotal
    };
  });

  // Check coupon discount
  const coupon = localStorage.getItem(COUPON_STORAGE_KEY) || "";
  let discountPercentage = 0;
  let couponName = "";
  if (coupon === "ARTISAN20") {
    discountPercentage = 0.20;
    couponName = "ARTISAN20 (20% Off)";
  } else if (coupon === "FIRSTGIFT") {
    discountPercentage = 0.10;
    couponName = "FIRSTGIFT (10% Off)";
  }

  const discountAmount = Math.round(subtotal * discountPercentage);
  const shippingFee = subtotal > 999 || subtotal === 0 ? 0 : 99;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  return {
    items,
    itemsCount,
    subtotal,
    discountAmount,
    couponName,
    couponCode: coupon,
    shippingFee,
    grandTotal,
    freeShippingThreshold: 999
  };
}

function updateNavbarCartCount() {
  const countEls = document.querySelectorAll('.cart-badge-count');
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  countEls.forEach(el => {
    el.textContent = totalQty;
    el.style.display = totalQty > 0 ? 'inline-flex' : 'none';
  });
}

// TOAST NOTIFICATION ENGINE
function showToast(title, message, icon = 'bi-check2-circle') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    toastContainer.style.zIndex = '9999';
    document.body.appendChild(toastContainer);
  }

  const toastId = 'toast-' + Date.now();
  const toastHtml = `
    <div id="${toastId}" class="toast custom-toast align-items-center show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header toast-header-custom py-2 px-3">
        <i class="bi ${icon} text-primary me-2 fs-5"></i>
        <strong class="me-auto text-dark">${title}</strong>
        <small class="text-muted">Just now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body py-2 px-3 text-muted" style="font-size: 0.9rem;">
        ${message}
      </div>
    </div>
  `;
  toastContainer.insertAdjacentHTML('beforeend', toastHtml);
  const toastElement = document.getElementById(toastId);
  if (window.bootstrap && bootstrap.Toast) {
    const bsToast = new bootstrap.Toast(toastElement, { delay: 4000 });
    bsToast.show();
  }
  setTimeout(() => {
    if (toastElement && toastElement.parentNode) {
      toastElement.remove();
    }
  }, 4500);
}

// FORMAT RUPEES
function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString('en-IN');
}

// PRODUCT CARD GENERATOR (Used across Home, Products, Related items)
function createProductCardHTML(product) {
  return `
    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div class="product-card">
        <div class="product-img-box">
          <span class="product-badge-float badge badge-${product.badgeType === 'sage' ? 'sage' : 'artisan'}">
            ${product.badge || 'Handmade'}
          </span>
          <button type="button" class="product-wishlist-btn" title="Add to Wishlist" onclick="toggleWishlist(this, ${product.id})">
            <i class="bi bi-heart"></i>
          </button>
          <a href="product-details.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
          </a>
        </div>
        <div class="product-body">
          <div class="product-category-meta">${product.category}</div>
          <h5 class="product-title">
            <a href="product-details.html?id=${product.id}">${product.name}</a>
          </h5>
          <div class="product-rating">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
            <span>${product.rating}</span>
            <span class="review-count">(${product.reviewsCount})</span>
          </div>
          <div class="product-footer">
            <div class="product-price">
              <span class="price-current">${formatINR(product.price)}</span>
              ${product.originalPrice ? `<span class="price-original">${formatINR(product.originalPrice)}</span>` : ''}
            </div>
            <div class="product-actions">
              <a href="product-details.html?id=${product.id}" class="btn btn-sm btn-outline-terracotta px-3" style="font-size:0.8rem;">
                Details
              </a>
              <button class="btn-icon-cart" title="Add to Cart" onclick="addToCart(${product.id}, 1)">
                <i class="bi bi-bag-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function toggleWishlist(btn, id) {
  const icon = btn.querySelector('i');
  if (icon.classList.contains('bi-heart')) {
    icon.classList.remove('bi-heart');
    icon.classList.add('bi-heart-fill');
    btn.style.color = '#dc3545';
    showToast('Wishlist Updated', 'Product added to your saved favorites!');
  } else {
    icon.classList.remove('bi-heart-fill');
    icon.classList.add('bi-heart');
    btn.style.color = '';
    showToast('Wishlist Updated', 'Product removed from favorites.');
  }
}

// INITIALIZERS FOR DIFFERENT PAGES
document.addEventListener('DOMContentLoaded', () => {
  updateNavbarCartCount();

  // Scroll effect on navbar
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.custom-navbar');
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // PAGE SPECIFIC LOGIC
  const pagePath = window.location.pathname;

  // 1. HOME PAGE
  if (document.getElementById('home-featured-products')) {
    initHomePage();
  }

  // 2. PRODUCTS PAGE
  if (document.getElementById('products-grid-container')) {
    initProductsPage();
  }

  // 3. PRODUCT DETAILS PAGE
  if (document.getElementById('product-details-container')) {
    initProductDetailsPage();
  }

  // 4. CART PAGE
  if (document.getElementById('cart-items-container')) {
    initCartPage();
  }

  // 5. CHECKOUT PAGE
  if (document.getElementById('checkout-form')) {
    initCheckoutPage();
  }

  // 6. LOGIN PAGE
  if (document.getElementById('login-form')) {
    initLoginPage();
  }

  // 7. REGISTER PAGE
  if (document.getElementById('register-form')) {
    initRegisterPage();
  }

  // 8. CONTACT PAGE
  if (document.getElementById('contact-form')) {
    initContactPage();
  }
});

// HOME PAGE HANDLERS
function initHomePage() {
  const container = document.getElementById('home-featured-products');
  if (!container) return;
  const featured = PRODUCTS_DATA.filter(p => p.isFeatured).slice(0, 8);
  container.innerHTML = featured.map(createProductCardHTML).join('');
}

// PRODUCTS CATALOG PAGE HANDLERS
function initProductsPage() {
  const gridContainer = document.getElementById('products-grid-container');
  const countEl = document.getElementById('products-count');
  const searchInput = document.getElementById('product-search-input');
  const categorySelect = document.getElementById('category-filter-select');
  const budgetRadios = document.querySelectorAll('input[name="budgetFilter"]');
  const sortSelect = document.getElementById('sort-select');
  const resetBtn = document.getElementById('btn-reset-filters');

  let currentCategory = "All";
  let currentSearch = "";
  let currentBudget = "all";
  let currentSort = "featured";

  // Check URL param for initial category (e.g. from Home category click)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('category');
  if (catParam) {
    currentCategory = catParam;
    if (categorySelect) categorySelect.value = catParam;
  }

  function applyFiltersAndRender() {
    let list = [...PRODUCTS_DATA];

    // Search filter
    if (currentSearch.trim() !== "") {
      const q = currentSearch.toLowerCase().trim();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.artisan.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (currentCategory && currentCategory !== "All") {
      list = list.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase());
    }

    // Budget filter
    if (currentBudget === "under500") {
      list = list.filter(p => p.price <= 500);
    } else if (currentBudget === "500-1000") {
      list = list.filter(p => p.price > 500 && p.price <= 1000);
    } else if (currentBudget === "1000-2000") {
      list = list.filter(p => p.price > 1000 && p.price <= 2000);
    } else if (currentBudget === "above2000") {
      list = list.filter(p => p.price > 2000);
    }

    // Sorting
    if (currentSort === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (currentSort === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === "newest") {
      list.sort((a, b) => b.id - a.id);
    }

    if (countEl) {
      countEl.textContent = `Showing ${list.length} of ${PRODUCTS_DATA.length} handcrafted gifts`;
    }

    if (list.length === 0) {
      gridContainer.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="mb-3 text-muted" style="font-size: 3rem;">
            <i class="bi bi-search"></i>
          </div>
          <h4 class="font-serif">No handmade products found</h4>
          <p class="text-muted">Try adjusting your search keywords or resetting your budget/category filters.</p>
          <button class="btn btn-terracotta mt-2" onclick="document.getElementById('btn-reset-filters').click()">
            Reset All Filters
          </button>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = list.map(createProductCardHTML).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      currentCategory = e.target.value;
      applyFiltersAndRender();
    });
  }

  budgetRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.checked) {
        currentBudget = e.target.value;
        applyFiltersAndRender();
      }
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentCategory = "All";
      currentSearch = "";
      currentBudget = "all";
      currentSort = "featured";
      if (searchInput) searchInput.value = "";
      if (categorySelect) categorySelect.value = "All";
      if (sortSelect) sortSelect.value = "featured";
      const defaultBudget = document.getElementById('budget-all');
      if (defaultBudget) defaultBudget.checked = true;
      applyFiltersAndRender();
      showToast('Filters Reset', 'All product filters have been cleared.');
    });
  }

  applyFiltersAndRender();
}

// PRODUCT DETAILS PAGE HANDLERS
function initProductDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = parseInt(urlParams.get('id'), 10) || 1;
  const product = PRODUCTS_DATA.find(p => p.id === idParam) || PRODUCTS_DATA[0];

  // Set breadcrumbs & titles
  const breadcrumbCategory = document.getElementById('breadcrumb-category');
  const breadcrumbProduct = document.getElementById('breadcrumb-product');
  const titleEl = document.getElementById('detail-product-title');
  const priceCurrentEl = document.getElementById('detail-price-current');
  const priceOriginalEl = document.getElementById('detail-price-original');
  const discountEl = document.getElementById('detail-discount-badge');
  const ratingEl = document.getElementById('detail-rating-score');
  const reviewsCountEl = document.getElementById('detail-reviews-count');
  const categoryBadge = document.getElementById('detail-category-badge');
  const artisanBadge = document.getElementById('detail-artisan-badge');
  const descEl = document.getElementById('detail-description');
  const materialsEl = document.getElementById('detail-materials');
  const dimensionsEl = document.getElementById('detail-dimensions');
  const craftsmanshipEl = document.getElementById('detail-craftsmanship');
  const artisanStoryEl = document.getElementById('detail-artisan-story');
  const artisanNameEl = document.getElementById('detail-artisan-name');
  const artisanLocationEl = document.getElementById('detail-artisan-location');

  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = product.category;
    breadcrumbCategory.href = `products.html?category=${encodeURIComponent(product.category)}`;
  }
  if (breadcrumbProduct) breadcrumbProduct.textContent = product.name;
  if (titleEl) titleEl.textContent = product.name;
  if (priceCurrentEl) priceCurrentEl.textContent = formatINR(product.price);
  if (priceOriginalEl && product.originalPrice) {
    priceOriginalEl.textContent = formatINR(product.originalPrice);
  }
  if (discountEl && product.originalPrice) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    discountEl.textContent = `${discount}% OFF`;
    discountEl.style.display = 'inline-block';
  }
  if (ratingEl) ratingEl.textContent = product.rating;
  if (reviewsCountEl) reviewsCountEl.textContent = `(${product.reviewsCount} verified reviews)`;
  if (categoryBadge) categoryBadge.textContent = product.category;
  if (artisanBadge) artisanBadge.textContent = product.artisan;
  if (descEl) descEl.textContent = product.description;
  if (materialsEl) materialsEl.textContent = product.materials;
  if (dimensionsEl) dimensionsEl.textContent = product.dimensions;
  if (craftsmanshipEl) craftsmanshipEl.textContent = product.craftsmanship;
  if (artisanStoryEl) artisanStoryEl.textContent = `Handcrafted with devotion by ${product.artisan} in ${product.location}. Every purchase directly supports sustainable rural craft communities and keeps centuries-old heritage techniques alive.`;
  if (artisanNameEl) artisanNameEl.textContent = product.artisan;
  if (artisanLocationEl) artisanLocationEl.textContent = product.location;

  // Gallery
  const mainImg = document.getElementById('detail-main-img');
  const thumbsContainer = document.getElementById('detail-thumbs-container');
  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = product.name;
  }

  if (thumbsContainer && product.gallery && product.gallery.length > 0) {
    thumbsContainer.innerHTML = product.gallery.map((imgUrl, idx) => `
      <div class="gallery-thumb-item ${idx === 0 ? 'active' : ''}" onclick="switchDetailImage('${imgUrl}', this)">
        <img src="${imgUrl}" alt="${product.name} angle ${idx + 1}">
      </div>
    `).join('');
  }

  // Quantity controls
  const qtyInput = document.getElementById('detail-quantity-input');
  const btnMinus = document.getElementById('btn-qty-minus');
  const btnPlus = document.getElementById('btn-qty-plus');

  if (btnMinus && qtyInput) {
    btnMinus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value, 10) || 1;
      if (val > 1) {
        qtyInput.value = val - 1;
      }
    });
  }

  if (btnPlus && qtyInput) {
    btnPlus.addEventListener('click', () => {
      let val = parseInt(qtyInput.value, 10) || 1;
      qtyInput.value = val + 1;
    });
  }

  // Add to Cart
  const btnAddToCart = document.getElementById('btn-detail-add-cart');
  if (btnAddToCart) {
    btnAddToCart.addEventListener('click', () => {
      const q = parseInt(qtyInput ? qtyInput.value : 1, 10) || 1;
      addToCart(product.id, q);
    });
  }

  // Buy Now
  const btnBuyNow = document.getElementById('btn-detail-buy-now');
  if (btnBuyNow) {
    btnBuyNow.addEventListener('click', () => {
      const q = parseInt(qtyInput ? qtyInput.value : 1, 10) || 1;
      addToCart(product.id, q, false);
      window.location.href = 'checkout.html';
    });
  }

  // Related products
  const relatedContainer = document.getElementById('related-products-container');
  if (relatedContainer) {
    const related = PRODUCTS_DATA.filter(p => p.id !== product.id && (p.category === product.category || p.isFeatured)).slice(0, 4);
    relatedContainer.innerHTML = related.map(createProductCardHTML).join('');
  }
}

function switchDetailImage(src, thumbEl) {
  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) {
    mainImg.src = src;
  }
  const thumbs = document.querySelectorAll('.gallery-thumb-item');
  thumbs.forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

// CART PAGE HANDLERS
function initCartPage() {
  renderCartView();

  const applyCouponBtn = document.getElementById('btn-apply-coupon');
  const couponInput = document.getElementById('coupon-input');
  if (applyCouponBtn && couponInput) {
    applyCouponBtn.addEventListener('click', () => {
      const code = couponInput.value.trim().toUpperCase();
      if (code === "ARTISAN20") {
        localStorage.setItem(COUPON_STORAGE_KEY, "ARTISAN20");
        showToast('Coupon Applied!', 'ARTISAN20 applied! You received a 20% festive discount.');
        renderCartView();
      } else if (code === "FIRSTGIFT") {
        localStorage.setItem(COUPON_STORAGE_KEY, "FIRSTGIFT");
        showToast('Coupon Applied!', 'FIRSTGIFT applied! You received 10% discount.');
        renderCartView();
      } else {
        showToast('Invalid Coupon', 'Please use code ARTISAN20 or FIRSTGIFT for demo discount.', 'bi-exclamation-triangle');
      }
    });
  }
}

function renderCartView() {
  const itemsContainer = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty-state');
  const cartContent = document.getElementById('cart-content-wrapper');
  if (!itemsContainer) return;

  const calcs = getCartCalculations();

  if (calcs.items.length === 0) {
    if (cartContent) cartContent.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (cartContent) cartContent.style.display = 'flex';
  if (emptyState) emptyState.style.display = 'none';

  // Render Table Rows
  itemsContainer.innerHTML = calcs.items.map(item => `
    <tr>
      <td>
        <div class="d-flex align-items-center gap-3">
          <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
          <div>
            <span class="badge badge-pill-tag mb-1">${item.product.category}</span>
            <h6 class="mb-1 font-serif">
              <a href="product-details.html?id=${item.product.id}" class="text-dark">${item.product.name}</a>
            </h6>
            <small class="text-muted d-block">Handmade in India</small>
          </div>
        </div>
      </td>
      <td>
        <span class="fw-semibold text-dark">${formatINR(item.product.price)}</span>
      </td>
      <td>
        <div class="quantity-control">
          <button type="button" onclick="handleCartQtyChange(${item.productId}, -1)">
            <i class="bi bi-dash"></i>
          </button>
          <input type="text" value="${item.quantity}" readonly>
          <button type="button" onclick="handleCartQtyChange(${item.productId}, 1)">
            <i class="bi bi-plus"></i>
          </button>
        </div>
      </td>
      <td>
        <span class="fw-bold text-primary-terracotta">${formatINR(item.rowTotal)}</span>
      </td>
      <td class="text-end">
        <button class="btn btn-sm btn-outline-danger border-0" title="Remove Item" onclick="handleCartRemove(${item.productId})">
          <i class="bi bi-trash3 fs-5"></i>
        </button>
      </td>
    </tr>
  `).join('');

  // Update Summary Card
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountRow = document.getElementById('cart-discount-row');
  const discountEl = document.getElementById('cart-discount-amount');
  const discountLabel = document.getElementById('cart-discount-label');
  const shippingEl = document.getElementById('cart-shipping-fee');
  const grandTotalEl = document.getElementById('cart-grand-total');
  const freeShippingText = document.getElementById('free-shipping-text');
  const freeShippingBar = document.getElementById('free-shipping-bar');

  if (subtotalEl) subtotalEl.textContent = formatINR(calcs.subtotal);

  if (discountRow) {
    if (calcs.discountAmount > 0) {
      discountRow.style.display = 'flex';
      if (discountEl) discountEl.textContent = `-${formatINR(calcs.discountAmount)}`;
      if (discountLabel) discountLabel.textContent = `Discount (${calcs.couponName})`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  if (shippingEl) {
    shippingEl.innerHTML = calcs.shippingFee === 0 ? '<span class="text-success fw-semibold">FREE</span>' : formatINR(calcs.shippingFee);
  }

  if (grandTotalEl) grandTotalEl.textContent = formatINR(calcs.grandTotal);

  if (freeShippingText && freeShippingBar) {
    if (calcs.subtotal >= calcs.freeShippingThreshold) {
      freeShippingText.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked <strong>FREE Standard Delivery</strong> across India!`;
      freeShippingBar.style.width = '100%';
      freeShippingBar.classList.remove('bg-warning');
      freeShippingBar.classList.add('bg-success');
    } else {
      const remaining = calcs.freeShippingThreshold - calcs.subtotal;
      const pct = Math.min(100, Math.round((calcs.subtotal / calcs.freeShippingThreshold) * 100));
      freeShippingText.innerHTML = `Add <strong>${formatINR(remaining)}</strong> more of handmade crafts to get <strong>FREE Standard Shipping</strong>!`;
      freeShippingBar.style.width = `${pct}%`;
    }
  }
}

function handleCartQtyChange(productId, delta) {
  updateCartQuantity(productId, delta);
  renderCartView();
}

function handleCartRemove(productId) {
  removeFromCart(productId);
  renderCartView();
}

// CHECKOUT PAGE HANDLERS
function initCheckoutPage() {
  const calcs = getCartCalculations();
  const summaryListEl = document.getElementById('checkout-items-list');

  // Check URL param for instant demo order confirmation display
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('confirmation') === 'true') {
    setTimeout(() => {
      const modalEl = document.getElementById('orderSuccessModal');
      if (modalEl && window.bootstrap && bootstrap.Modal) {
        new bootstrap.Modal(modalEl).show();
      }
    }, 400);
  }
  const subtotalEl = document.getElementById('checkout-subtotal');
  const discountRow = document.getElementById('checkout-discount-row');
  const discountEl = document.getElementById('checkout-discount');
  const shippingEl = document.getElementById('checkout-shipping');
  const totalEl = document.getElementById('checkout-total');
  const itemsCountBadge = document.getElementById('checkout-items-count');

  if (itemsCountBadge) itemsCountBadge.textContent = `${calcs.itemsCount} items`;
  if (subtotalEl) subtotalEl.textContent = formatINR(calcs.subtotal);
  if (discountRow) {
    if (calcs.discountAmount > 0) {
      discountRow.style.display = 'flex';
      if (discountEl) discountEl.textContent = `-${formatINR(calcs.discountAmount)}`;
    } else {
      discountRow.style.display = 'none';
    }
  }
  if (shippingEl) {
    shippingEl.innerHTML = calcs.shippingFee === 0 ? '<span class="text-success fw-semibold">FREE</span>' : formatINR(calcs.shippingFee);
  }
  if (totalEl) totalEl.textContent = formatINR(calcs.grandTotal);

  if (summaryListEl) {
    summaryListEl.innerHTML = calcs.items.map(item => `
      <div class="d-flex align-items-center gap-3 py-2 border-bottom border-light">
        <div class="position-relative">
          <img src="${item.product.image}" alt="${item.product.name}" style="width: 54px; height: 54px; object-fit: cover; border-radius: 8px;">
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" style="font-size: 0.65rem;">
            ${item.quantity}
          </span>
        </div>
        <div class="flex-grow-1" style="line-height: 1.25;">
          <h6 class="mb-0 text-dark" style="font-size: 0.88rem;">${item.product.name}</h6>
          <small class="text-muted">${formatINR(item.product.price)} each</small>
        </div>
        <div class="text-end fw-semibold text-dark" style="font-size: 0.9rem;">
          ${formatINR(item.rowTotal)}
        </div>
      </div>
    `).join('');
  }

  // Payment method switcher visual state
  const paymentCards = document.querySelectorAll('.payment-method-card');
  paymentCards.forEach(card => {
    card.addEventListener('click', () => {
      paymentCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  // Handle Form Submission / Order Placement
  const form = document.getElementById('checkout-form');
  const btnPlaceOrder = document.getElementById('btn-place-order');
  const orderSuccessModalEl = document.getElementById('orderSuccessModal');

  if (form && btnPlaceOrder) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        showToast('Required Information', 'Please complete all delivery address fields.', 'bi-exclamation-triangle');
        return;
      }

      // Gather customer details
      const firstName = document.getElementById('billing-first-name')?.value || "Ananya";
      const lastName = document.getElementById('billing-last-name')?.value || "Sharma";
      const email = document.getElementById('billing-email')?.value || "ananya@example.com";
      const phone = document.getElementById('billing-phone')?.value || "+91 98765 43210";
      const address = document.getElementById('billing-address')?.value || "Flat 402, Lotus Enclave";
      const city = document.getElementById('billing-city')?.value || "Mumbai";
      const state = document.getElementById('billing-state')?.value || "Maharashtra";
      const pin = document.getElementById('billing-pin')?.value || "400001";

      // Animate Place Order button with simulated spinner
      btnPlaceOrder.disabled = true;
      btnPlaceOrder.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        Processing Your Artisan Order...
      `;

      setTimeout(() => {
        btnPlaceOrder.disabled = false;
        btnPlaceOrder.innerHTML = `<i class="bi bi-shield-check me-2"></i> Place Order (Demo COD)`;

        // Generate Order ID & Estimated Delivery
        const orderId = "HG-" + Math.floor(100000 + Math.random() * 900000);
        const orderDate = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        const deliveryDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

        // Populate Success Modal
        const modalOrderId = document.getElementById('modal-order-id');
        const modalCustomerName = document.getElementById('modal-customer-name');
        const modalCustomerAddress = document.getElementById('modal-customer-address');
        const modalOrderTotal = document.getElementById('modal-order-total');
        const modalDeliveryDate = document.getElementById('modal-delivery-date');

        if (modalOrderId) modalOrderId.textContent = `#${orderId}`;
        if (modalCustomerName) modalCustomerName.textContent = `${firstName} ${lastName} (${phone})`;
        if (modalCustomerAddress) modalCustomerAddress.textContent = `${address}, ${city}, ${state} - ${pin}`;
        if (modalOrderTotal) modalOrderTotal.textContent = formatINR(calcs.grandTotal);
        if (modalDeliveryDate) modalDeliveryDate.textContent = deliveryDate;

        // Show Bootstrap Modal
        if (window.bootstrap && bootstrap.Modal) {
          const bsModal = new bootstrap.Modal(orderSuccessModalEl);
          bsModal.show();
        }

        // Reset cart for clean slate or keep sample
        localStorage.removeItem(COUPON_STORAGE_KEY);
      }, 1200);
    });
  }
}

// LOGIN PAGE HANDLERS
function initLoginPage() {
  const form = document.getElementById('login-form');
  const demoFillBtn = document.getElementById('btn-demo-fill-login');
  const togglePassBtn = document.getElementById('btn-toggle-password');
  const passInput = document.getElementById('login-password');

  if (togglePassBtn && passInput) {
    togglePassBtn.addEventListener('click', () => {
      const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passInput.setAttribute('type', type);
      const icon = togglePassBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('bi-eye');
        icon.classList.toggle('bi-eye-slash');
      }
    });
  }

  if (demoFillBtn) {
    demoFillBtn.addEventListener('click', () => {
      const emailInput = document.getElementById('login-email');
      if (emailInput) emailInput.value = "ananya.sharma@example.com";
      if (passInput) passInput.value = "ArtisanLover@2026";
      showToast('Demo Credentials Filled', 'College demo credentials loaded! Click "Sign In" to proceed.');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
      const email = document.getElementById('login-email')?.value;
      showToast('Welcome Back!', `Signed in successfully as ${email}. (Demo Prototype)`);
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1200);
    });
  }
}

// REGISTER PAGE HANDLERS
function initRegisterPage() {
  const form = document.getElementById('register-form');
  const demoFillBtn = document.getElementById('btn-demo-fill-register');
  const passInput = document.getElementById('register-password');
  const confirmPassInput = document.getElementById('register-confirm-password');

  if (demoFillBtn) {
    demoFillBtn.addEventListener('click', () => {
      document.getElementById('register-name').value = "Aditya Verma";
      document.getElementById('register-email').value = "aditya.verma@example.com";
      document.getElementById('register-phone').value = "+91 98200 45678";
      if (passInput) passInput.value = "Passcode@2026";
      if (confirmPassInput) confirmPassInput.value = "Passcode@2026";
      const terms = document.getElementById('register-terms');
      if (terms) terms.checked = true;
      showToast('Demo Details Filled', 'Sample student/artisan customer data populated!');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      if (passInput && confirmPassInput && passInput.value !== confirmPassInput.value) {
        showToast('Password Mismatch', 'Password and Confirm Password do not match.', 'bi-exclamation-triangle');
        confirmPassInput.focus();
        return;
      }

      showToast('Account Created!', 'Your artisan patron account has been created successfully. (Demo Prototype)');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1200);
    });
  }
}

// CONTACT PAGE HANDLERS
function initContactPage() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
      const name = document.getElementById('contact-name')?.value || "Friend";
      showToast('Inquiry Received!', `Thank you, ${name}! Your message has been received by our artisan concierge desk. (Demo)`, 'bi-envelope-check');
      form.reset();
      form.classList.remove('was-validated');
    });
  }
}
