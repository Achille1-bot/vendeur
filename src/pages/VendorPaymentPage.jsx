import React, { useEffect, useState } from "react";

export default function VendorPaymentPage() {
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("pendingVendor");
    if (data) {
      setVendor(JSON.parse(data));
    }
  }, []);

  if (!vendor) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Paiement vendeur</h1>
        <p>Aucune inscription vendeur trouvée. Retournez au formulaire.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#ffffff",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          Paiement de votre abonnement vendeur
        </h1>
        <p style={{ marginBottom: "8px" }}>
          Bonjour <strong>{vendor.nomComplet}</strong>,
        </p>
        <p style={{ marginBottom: "8px" }}>
          Boutique : <strong>{vendor.nomBoutique}</strong>
        </p>
        <p style={{ marginBottom: "8px" }}>
          Téléphone : <strong>{vendor.telephone}</strong>
        </p>
        <p style={{ marginBottom: "16px" }}>
          Catégories :{" "}
          <strong>{vendor.categories && vendor.categories.join(", ")}</strong>
        </p>

        <p style={{ marginBottom: "16px" }}>
          Ici, vous pouvez intégrer votre module de paiement (Mobile Money,
          PayGate, Stripe, etc.). Pour l&apos;exemple, nous affichons juste un
          bouton.
        </p>

        <button
          style={{
            marginTop: "8px",
            width: "100%",
            padding: "10px 16px",
            borderRadius: "999px",
            border: "none",
            background: "#16a34a",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Payer mon abonnement vendeur
        </button>
      </div>
    </div>
  );
}
