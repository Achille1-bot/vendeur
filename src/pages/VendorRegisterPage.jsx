import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";


const ALL_CATEGORIES = ["Véhicules", "Nourriture", "Électronique", "Vêtements"];

const COUNTRY_OPTIONS = [
  { code: "TG", name: "Togo", dialCode: "+228" },
  { code: "BJ", name: "Bénin", dialCode: "+229" },
  { code: "CI", name: "Côte d’Ivoire", dialCode: "+225" },
  { code: "GH", name: "Ghana", dialCode: "+233" },
  { code: "SN", name: "Sénégal", dialCode: "+221" },
  { code: "NG", name: "Nigéria", dialCode: "+234" },
  { code: "CM", name: "Cameroun", dialCode: "+237" },
];

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "10px",
  border: "1px solid #e4e4e7",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

export default function VendorRegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nomComplet: "",
    email: "",
    nomBoutique: "",
  });

  const [phoneCountry, setPhoneCountry] = useState("TG");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const removeCategory = (category) => {
    setSelectedCategories((prev) => prev.filter((c) => c !== category));
  };

  const sendPasswordSetupEmail = async (payload) => {
    // L’identifiant = email
    const username = payload.email;
    // Lien vers la page de définition du mot de passe (à créer côté frontend)
    const passwordSetupLink = `${window.location.origin}/definir-mot-de-passe?email=${encodeURIComponent(
      payload.email
    )}`;

    const emailParams = {
      nomComplet: payload.nomComplet,
      username: username,
      boutique: payload.nomBoutique,
      to_email: payload.email,
      setPasswordLink: passwordSetupLink,
    };

    // 👉 Remplace par tes vrais identifiants EmailJS
    return emailjs.send(
      "SERVICE_ID", // à remplacer
      "TEMPLATE_ID", // à remplacer
      emailParams,
      "PUBLIC_KEY" // à remplacer
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.nomComplet || !formData.email || !phoneNumber || !formData.nomBoutique) {
      setError(
        "Merci de remplir tous les champs obligatoires : nom, email, pays + téléphone et nom de la boutique."
      );
      return;
    }

    if (selectedCategories.length === 0) {
      setError("Merci de sélectionner au moins une catégorie d’articles.");
      return;
    }

    const country = COUNTRY_OPTIONS.find((c) => c.code === phoneCountry);
    const fullPhone = country ? `${country.dialCode}${phoneNumber}` : phoneNumber;

    const payload = {
      ...formData,
      telephone: fullPhone,
      pays: country ? country.name : "",
      categories: selectedCategories,
      createdAt: new Date().toISOString(),
    };

    // Sauvegarde locale (pour la page de paiement ou autre)
    localStorage.setItem("pendingVendor", JSON.stringify(payload));

    // Envoi de l’email de set password
    try {
      setSending(true);
      await sendPasswordSetupEmail(payload);
      console.log("Email de set password envoyé au vendeur.");
    } catch (err) {
      console.error("Erreur lors de l’envoi de l’email :", err);
      // Tu peux afficher un message si tu veux
    } finally {
      setSending(false);
    }

    // Redirection vers la page de paiement
    navigate("/paiement-vendeur");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "24px 16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #eef2ff 0%, #e0f2fe 40%, #fef9c3 100%)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          background: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 20px 60px rgba(15,23,42,0.16)",
          padding: "24px",
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)",
        }}
      >
        {/* Colonne gauche : formulaire */}
        <div style={{ borderRight: "1px solid #f4f4f5", paddingRight: "20px" }}>
          <div style={{ marginBottom: "18px" }}>
            <div
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#6366f1",
                fontWeight: 600,
                marginBottom: "4px",
              }}
            >
              Étape 1 · Inscription vendeur
            </div>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "4px",
              }}
            >
              Devenir vendeur sur la plateforme
            </h1>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              Créez votre profil vendeur, choisissez vos catégories, puis vous
              recevrez un email pour définir votre mot de passe.
            </p>
          </div>

          {error && (
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
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
            <div style={{ display: "grid", gap: "10px" }}>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "4px",
                    color: "#111827",
                  }}
                >
                  Nom & prénom*
                </label>
                <input
                  type="text"
                  name="nomComplet"
                  value={formData.nomComplet}
                  onChange={handleChange}
                  placeholder="Ex: Kossi KOFFI"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "4px",
                    color: "#111827",
                  }}
                >
                  Email (identifiant)* 
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ex: contact@monsite.com"
                  style={inputStyle}
                />
              </div>

              {/* Pays + téléphone */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "4px",
                    color: "#111827",
                  }}
                >
                  Pays & téléphone / WhatsApp*
                </label>
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <select
                    value={phoneCountry}
                    onChange={(e) => setPhoneCountry(e.target.value)}
                    style={{
                      ...inputStyle,
                      width: "45%",
                      paddingRight: "28px",
                    }}
                  >
                    {COUNTRY_OPTIONS.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name} ({c.dialCode})
                      </option>
                    ))}
                  </select>
                  <div style={{ position: "relative", width: "55%" }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "13px",
                        color: "#6b7280",
                      }}
                    >
                      {
                        COUNTRY_OPTIONS.find((c) => c.code === phoneCountry)
                          ?.dialCode
                      }
                    </div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="90 00 00 00"
                      style={{
                        ...inputStyle,
                        paddingLeft: "80px",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "4px",
                    color: "#111827",
                  }}
                >
                  Nom de la boutique*
                </label>
                <input
                  type="text"
                  name="nomBoutique"
                  value={formData.nomBoutique}
                  onChange={handleChange}
                  placeholder="Ex: GoShop Market"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Catégories */}
            <div style={{ marginTop: "8px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 500,
                  marginBottom: "6px",
                  color: "#111827",
                }}
              >
                Catégories d’articles à vendre*
              </label>
              <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: 8 }}>
                Sélectionnez une ou plusieurs catégories correspondant à vos
                produits.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {ALL_CATEGORIES.map((category) => {
                  const isActive = selectedCategories.includes(category);
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => toggleCategory(category)}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "999px",
                        border: isActive
                          ? "1px solid #4f46e5"
                          : "1px solid #e5e7eb",
                        background: isActive ? "#eef2ff" : "#f9fafb",
                        cursor: "pointer",
                        fontSize: "13px",
                        color: isActive ? "#312e81" : "#111827",
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bulles sélectionnées */}
            {selectedCategories.length > 0 && (
              <div style={{ marginTop: "10px" }}>
                <p
                  style={{
                    fontSize: "13px",
                    marginBottom: "4px",
                    color: "#111827",
                    fontWeight: 500,
                  }}
                >
                  Catégories sélectionnées :
                </p>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
                >
                  {selectedCategories.map((category) => (
                    <div
                      key={category}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "4px 10px",
                        borderRadius: "999px",
                        background: "#e0f2fe",
                        fontSize: "12px",
                        color: "#0f172a",
                      }}
                    >
                      <span>{category}</span>
                      <button
                        type="button"
                        onClick={() => removeCategory(category)}
                        style={{
                          border: "none",
                          background: "transparent",
                          cursor: "pointer",
                          fontWeight: "bold",
                          fontSize: "14px",
                          lineHeight: 1,
                        }}
                        aria-label={`Supprimer ${category}`}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bouton submit */}
            <button
              type="submit"
              disabled={sending}
              style={{
                marginTop: "16px",
                width: "100%",
                padding: "11px 16px",
                borderRadius: "999px",
                border: "none",
                background: sending
                  ? "#9ca3af"
                  : "linear-gradient(135deg, #4f46e5 0%, #6366f1 40%, #22c55e 100%)",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                cursor: sending ? "not-allowed" : "pointer",
                boxShadow: "0 10px 25px rgba(79,70,229,0.35)",
              }}
            >
              {sending ? "Envoi de l’email..." : "Valider mon inscription"}
            </button>
          </form>
        </div>

        {/* Colonne droite : infos connexion */}
        <div
          style={{
            paddingLeft: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#111827",
                marginBottom: "6px",
              }}
            >
              Informations de connexion
            </h2>
            <p style={{ fontSize: "13px", color: "#6b7280", marginBottom: 12 }}>
              Votre <strong>email</strong> servira d’identifiant (nom
              d’utilisateur) pour accéder à votre espace vendeur.
            </p>

            <div
              style={{
                padding: "12px 14px",
                borderRadius: "14px",
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                display: "grid",
                gap: "8px",
              }}
            >
              <div style={{ fontSize: "13px" }}>
                <span style={{ color: "#6b7280" }}>Identifiant (email) :</span>
                <br />
                <span style={{ fontWeight: 600, color: "#111827" }}>
                  {formData.email || "— en attente de saisie —"}
                </span>
              </div>
              <div style={{ fontSize: "13px", color: "#6b7280" }}>
                Après validation, vous recevrez un email contenant :
                <ul style={{ marginTop: 4, paddingLeft: 18 }}>
                  <li>Votre identifiant (email)</li>
                  <li>Un lien sécurisé pour définir votre mot de passe</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: "12px",
              color: "#6b7280",
              background: "#fefce8",
              borderRadius: "14px",
              padding: "10px 12px",
              border: "1px solid #facc15",
            }}
          >
            💡 Gardez votre email accessible : vous en aurez besoin pour valider
            votre compte vendeur et créer votre mot de passe.
          </div>
        </div>
      </div>

      {/* Responsive : mobile */}
      <style>
        {`
          @media (max-width: 800px) {
            div[style*="max-width: 960px"] {
              grid-template-columns: minmax(0, 1fr) !important;
            }
            div[style*="border-right: 1px solid #f4f4f5"] {
              border-right: none !important;
              border-bottom: 1px solid #f4f4f5 !important;
              padding-right: 0 !important;
              padding-bottom: 16px !important;
            }
            div[style*="paddingLeft: \\"20px\\""] {
              padding-left: 0 !important;
              padding-top: 4px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
