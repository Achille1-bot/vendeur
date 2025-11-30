/*import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import VendorRegisterPage from "./pages/VendorRegisterPage";
import VendorPaymentPage from "./pages/VendorPaymentPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<VendorRegisterPage />} />
      <Route path="/paiement-vendeur" element={<VendorPaymentPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
*/
// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import MarketplaceHomePage from "./pages/Marketplacehomepage";
import VendorRegisterPage from "./pages/VendorRegisterPage";
import VendorPaymentPage from "./pages/VendorPaymentPage";

export default function App() {
  return (
    <Routes>
      {/* 🌟 Page principale */}
      <Route path="/" element={<MarketplaceHomePage />} />

      {/* Inscription vendeur */}
      <Route path="/inscription-vendeur" element={<VendorRegisterPage />} />

      {/* Récap / confirmation */}
      <Route path="/paiement-vendeur" element={<VendorPaymentPage />} />
    </Routes>
  );
}
