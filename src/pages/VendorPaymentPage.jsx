import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

export default function VendorPaymentPage() {
  const [vendor, setVendor] = useState(null);
  const [sending, setSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [validated, setValidated] = useState(false); // 👈 après confirmation OK
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("pendingVendor");
    if (data) {
      setVendor(JSON.parse(data));
    }
  }, []);

  const handleModify = () => {
  // on passe un petit "state" pour dire qu'on vient de la page récap
  navigate("/", { state: { fromRecap: true } }); 
  // adapte "/" si ta route du formulaire est différente
}

  const handleConfirm = async () => {
    if (!vendor || !vendor.email) {
      setErrorMsg("Impossible d’envoyer le mail : email vendeur manquant.");
      return;
    }

    setSending(true);
    setSuccessMsg("");
    setErrorMsg("");

    const statut = "En attente de validation";

    const emailParams = {
      to_email: vendor.email,
      nomComplet: vendor.nomComplet,
      boutique: vendor.nomBoutique,
      telephone: vendor.telephone,
      categories: vendor.categories?.join(", ") || "",
      statut,
    };
console.log("🟢 emailParams envoyés à EmailJS =>", emailParams);

  setSending(true);
  setSuccessMsg("");
  setErrorMsg("");
    try {
      const res = await emailjs.send(
        "service_9zjx4sv",    // ⬅️ à remplacer
        "template_0wmrf04",   // ⬅️ à remplacer
        emailParams,
        "7IPz1d_dgErJ354ny"     // ⬅️ à remplacer
      );
       console.log("✅ Réponse EmailJS :", res);
      setSuccessMsg(
        "Votre demande a été confirmée. Un email récapitulatif vous a été envoyé avec le statut « En attente de validation »."
      );
      setValidated(true); // 👈 on cache les boutons après succès
    } catch (err) {
      console.error("Erreur envoi email paiement:", err);
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
        <h1>Récapitulatif vendeur</h1>
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
          Voici le récapitulatif de vos informations
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
          Vérifiez attentivement vos informations.  
          Si vous souhaitez corriger un élément, cliquez sur{" "}
          <strong>Modifier</strong>.  
          Si tout est correct, cliquez sur <strong>Confirmer</strong> pour
          envoyer votre demande. Vous recevrez un email récapitulatif.
        </p>

        {/* Bulle de succès */}
        {successMsg && (
          <div
            style={{
              background: "#ecfdf5",
              color: "#166534",
              borderRadius: "10px",
              padding: "10px 12px",
              fontSize: "13px",
              marginBottom: "12px",
              border: "1px solid #bbf7d0",
            }}
          >
            {successMsg}
          </div>
        )}

        {/* Bulle d’erreur */}
        {errorMsg && (
          <div
            style={{
              background: "#fef2f2",
              color: "#b91c1c",
              borderRadius: "10px",
              padding: "10px 12px",
              fontSize: "13px",
              marginBottom: "12px",
              border: "1px solid #fecaca",
            }}
          >
            {errorMsg}
          </div>
        )}

        {/* Boutons : visibles uniquement tant que la demande n’est pas validée */}
        {!validated && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "8px",
            }}
          >
            <button
              onClick={handleConfirm}
              disabled={sending}
              style={{
                flex: 1,
                minWidth: "140px",
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
              {sending ? "Envoi en cours..." : "Confirmer"}
            </button>

            <button
              type="button"
              onClick={handleModify}
              disabled={sending}
              style={{
                flex: 1,
                minWidth: "140px",
                padding: "10px 16px",
                borderRadius: "999px",
                border: "1px solid #16a34a",
                background: "#ffffff",
                color: "#16a34a",
                fontSize: "16px",
                fontWeight: "600",
                cursor: sending ? "not-allowed" : "pointer",
              }}
            >
              Modifier
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
