import React, { createContext, useContext, useState, useEffect } from 'react';
import { SAREES_DATA } from '../data/sarees';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // 1. Cart State (persisted in localStorage)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('tharinayam_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 2. Wishlist State
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('tharinayam_wishlist');
      return saved ? JSON.parse(saved) : ["kanchi-raja-crimson-korvai"];
    } catch {
      return ["kanchi-raja-crimson-korvai"];
    }
  });

  // 3. Comparison State (max 4 sarees)
  const [compareList, setCompareList] = useState([]);

  // 4. Location Filter State
  const [selectedLocation, setSelectedLocation] = useState("All Tamil Nadu");
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  // 5. Coupon State
  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState("");

  // 6. User and Orders State
  const [user, setUser] = useState({
    name: "Ananya Sundaram",
    email: "ananya.sundaram@chennai.in",
    phone: "+91 98402 55670",
    isLoggedIn: true,
    addresses: [
      {
        id: "addr-1",
        name: "Ananya Sundaram",
        addressLine: "Flat 4B, Kaveri Apartments, 2nd Main Road, Gandhinagar",
        city: "Chennai",
        state: "Tamil Nadu",
        pincode: "600020",
        phone: "+91 98402 55670",
        isDefault: true
      }
    ]
  });

  const [orders, setOrders] = useState([
    {
      id: "TN-2026-9042",
      date: "04 Oct 2026",
      items: [
        {
          saree: SAREES_DATA[2], // Madurai Sungudi
          quantity: 1,
          price: 2450
        }
      ],
      totalAmount: 2450,
      status: "In Transit",
      paymentMethod: "UPI (Google Pay)",
      trackingNumber: "WEAVER-EXP-772918",
      vendorName: "Meenakshi Sungudi Heritage Emporium",
      estimatedDelivery: "11 Oct 2026",
      timeline: [
        { title: "Order Confirmed", date: "04 Oct, 11:30 AM", completed: true },
        { title: "Woven & Inspected by Artisan", date: "05 Oct, 04:00 PM", completed: true },
        { title: "Dispatched from Madurai Cluster", date: "07 Oct, 09:15 AM", completed: true },
        { title: "Out for Delivery", date: "Estimated 11 Oct", completed: false }
      ]
    }
  ]);

  // 7. Active AI Try-On Selected Saree
  const [tryOnSaree, setTryOnSaree] = useState(SAREES_DATA[0]);

  // Persist Cart
  useEffect(() => {
    try {
      localStorage.setItem('tharinayam_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Persist Wishlist
  useEffect(() => {
    try {
      localStorage.setItem('tharinayam_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Cart Functions
  const addToCart = (saree, quantity = 1, selectedColor = null) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.saree.id === saree.id);
      if (existing) {
        return prev.map((item) =>
          item.saree.id === saree.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { saree, quantity, selectedColor: selectedColor || saree.colors?.[0] || 'Original' }];
    });
  };

  const removeFromCart = (sareeId) => {
    setCart((prev) => prev.filter((item) => item.saree.id !== sareeId));
  };

  const updateQuantity = (sareeId, qty) => {
    if (qty <= 0) {
      removeFromCart(sareeId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.saree.id === sareeId ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setCouponCode("");
    setDiscountPercent(0);
  };

  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === "WEAVER10") {
      setCouponCode(clean);
      setDiscountPercent(10);
      setCouponError("");
      return true;
    } else if (clean === "THARINAYAM15") {
      setCouponCode(clean);
      setDiscountPercent(15);
      setCouponError("");
      return true;
    } else {
      setCouponError("Invalid coupon code. Try 'WEAVER10' or 'THARINAYAM15'");
      return false;
    }
  };

  const removeCoupon = () => {
    setCouponCode("");
    setDiscountPercent(0);
    setCouponError("");
  };

  // Cart calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.saree.price * item.quantity, 0);
  const cartDiscount = Math.round((cartSubtotal * discountPercent) / 100);
  const shippingFee = cartSubtotal > 5000 || cartSubtotal === 0 ? 0 : 150;
  const cartTotal = cartSubtotal - cartDiscount + shippingFee;
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Wishlist Functions
  const toggleWishlist = (sareeId) => {
    setWishlist((prev) =>
      prev.includes(sareeId)
        ? prev.filter((id) => id !== sareeId)
        : [...prev, sareeId]
    );
  };

  const isWishlisted = (sareeId) => wishlist.includes(sareeId);

  // Compare Functions
  const addToCompare = (saree) => {
    if (compareList.some((s) => s.id === saree.id)) return;
    if (compareList.length >= 4) {
      alert("You can compare up to 4 sarees at a time.");
      return;
    }
    setCompareList((prev) => [...prev, saree]);
  };

  const removeFromCompare = (sareeId) => {
    setCompareList((prev) => prev.filter((s) => s.id !== sareeId));
  };

  const isInCompare = (sareeId) => compareList.some((s) => s.id === sareeId);

  const clearCompare = () => setCompareList([]);

  // Place Order function
  const placeOrder = (orderDetails) => {
    const newOrder = {
      id: `TN-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      items: [...cart],
      totalAmount: cartTotal,
      status: "Order Confirmed",
      paymentMethod: orderDetails.paymentMethod || "UPI",
      trackingNumber: `WEAVER-EXP-${Math.floor(100000 + Math.random() * 900000)}`,
      vendorName: cart[0]?.saree?.shopName || "Certified Tamil Weavers",
      deliveryAddress: orderDetails.address,
      estimatedDelivery: "Within 4-6 business days",
      timeline: [
        { title: "Order Confirmed & Payment Received", date: "Just now", completed: true },
        { title: "Handloom Inspection & Packaging", date: "Scheduled", completed: false },
        { title: "Dispatched from Artisan Hub", date: "Upcoming", completed: false },
        { title: "Delivered to Doorstep", date: "Estimated 5 days", completed: false }
      ]
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
        cartDiscount,
        shippingFee,
        cartTotal,
        couponCode,
        discountPercent,
        couponError,
        applyCoupon,
        removeCoupon,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,

        wishlist,
        toggleWishlist,
        isWishlisted,

        compareList,
        addToCompare,
        removeFromCompare,
        isInCompare,
        clearCompare,

        selectedLocation,
        setSelectedLocation,
        isLocationModalOpen,
        setIsLocationModalOpen,

        user,
        setUser,
        orders,
        placeOrder,

        tryOnSaree,
        setTryOnSaree,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

