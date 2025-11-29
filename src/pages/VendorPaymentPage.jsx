import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

export default function VendorPaymentPage() {
  const [vendor, setVendor] = useState(null);
  const [sending, setSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("pendingVendor");
    if (data) {
      setVendor(JSON.parse(data));
    }
  }, []);

  const handleConfirm = async () => {
    if (!vendor || !vendor.email) {
      setErrorMsg("Impossible d’envoyer le mail : email vendeur manquant.");
      return;
    }

    setSending(true);
    setSuccessMsg("");
    setErrorMsg("");

    const statut = "En attente";

    // 🔥 Paramètres envoyés à EmailJS
    const emailParams = {
      to_email: vendor.email,
      nomComplet: vendor.nomComplet,
      boutique: vendor.nomBoutique,
      telephone: vendor.telephone,
      categories: vendor.categories?.join(", ") || "",
      statut,
    };

    try {
      await emailjs.send(
        "service_9zjx4sv",   // ⬅️ tu remplaces
        "template_0wmrf04",  // ⬅️ tu remplaces
        emailParams,
        "7IPz1d_dgErJ354ny"    // ⬅️ tu remplaces
      );

      setSuccessMsg(
        "Le récapitulatif a été envoyé au vendeur avec le statut : en attente."
      );
    } catch (err) {
      console.error("Erreur envoi email paiement:", err.text);
      setErrorMsg(
        "Une erreur est survenue lors de l’envoi de l’email. Veuillez réessayer."
      );
    } finally {
      setSending(false);
    }
  };

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
          PayGate, Stripe, etc.). Pour cet exemple, le bouton ci-dessous confirme
          la demande et envoie un email récapitulatif au vendeur avec le statut{" "}
          <strong>“En attente”</strong>.
        </p>

        {successMsg && (
          <div
            style={{
              background: "#ecfdf5",
              color: "#166534",
              borderRadius: "10px",
              padding: "8px 10px",
              fontSize: "13px",
              marginBottom: "10px",
              border: "1px solid #bbf7d0",
            }}
          >
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div
            style={{
              background: "#fef2f2",
              color: "#b91c1c",
              borderRadius: "10px",
              padding: "8px 10px",
              fontSize: "13px",
              marginBottom: "10px",
              border: "1px solid #fecaca",
            }}
          >
            {errorMsg}
          </div>
        )}

        <button
          onClick={handleConfirm}
          disabled={sending}
          style={{
            marginTop: "8px",
            width: "100%",
            padding: "10px 16px",
            borderRadius: "999px",
            border: "none",
            background: sending ? "#9ca3af" : "#16a34a",
            color: "#ffffff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: sending ? "not-allowed" : "pointer",
          }}
        >
          {sending ? "Envoi du mail..." : "Confirmer"}
        </button>
      </div>
    </div>
  );
}