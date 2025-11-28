import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const ALL_CATEGORIES = ["Véhicules", "Nourriture", "Électronique", "Vêtements"];
const PRIX_CATEGORIE = 2000;

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
    telephone: "",
    nomBoutique: "",
  });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [error, setError] = useState("");

  const totalMontant = useMemo(
    () => selectedCategories.length * PRIX_CATEGORIE,
    [selectedCategories]
  );

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // 👉 Email devient obligatoire
    if (
      !formData.nomComplet ||
      !formData.email ||
      !formData.telephone ||
      !formData.nomBoutique
    ) {
      setError(
        "Merci de remplir tous les champs obligatoires : nom, email, téléphone et nom de la boutique."
      );
      return;
    }

    if (selectedCategories.length === 0) {
      setError("Merci de sélectionner au moins une catégorie d’articles.");
      return;
    }

    const payload = {
      ...formData,
      categories: selectedCategories,
      total: totalMontant,
      createdAt: new Date().toISOString(),
    };

    // Sauvegarde locale (tu pourras remplacer par Firestore / API)
    localStorage.setItem("pendingVendor", JSON.stringify(payload));

    // Ici tu pourras plus tard appeler ta fonction d'envoi d'email
    // ex: await sendEmailToVendor(payload);

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
            </div>
            <center>
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
            </center>
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

          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", gap: "12px" }}
          >
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
                  Email*
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
                  Téléphone / WhatsApp*
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="Ex: +228 90 00 00 00"
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
                Sélectionnez une ou plusieurs catégories. Chaque catégorie est
                facturée <strong>2 000 FCFA</strong>.
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
              style={{
                marginTop: "16px",
                width: "100%",
                padding: "11px 16px",
                borderRadius: "999px",
                border: "none",
                background:
                  "linear-gradient(135deg, #4f46e5 0%, #6366f1 40%, #22c55e 100%)",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(79,70,229,0.35)",
              }}
            >
              Valider mon inscription
            </button>
          </form>
        </div>

        {/* Colonne droite : résumé & tarif */}
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
              Résumé de votre abonnement
            </h2>
            <p style={{ fontSize: "13px", color: "#6b7280", marginBottom: 12 }}>
              Le montant total dépend du nombre de catégories que vous choisissez.
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                }}
              >
                <span>Catégories sélectionnées</span>
                <span style={{ fontWeight: 600 }}>
                  {selectedCategories.length}{" "}
                  {selectedCategories.length <= 1
                    ? "catégorie"
                    : "catégories"}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                }}
              >
                <span>Prix par catégorie</span>
                <span>2 000 FCFA</span>
              </div>

              <div
                style={{
                  marginTop: "4px",
                  borderTop: "1px dashed #e5e7eb",
                  paddingTop: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#111827",
                  }}
                >
                  Montant total
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#16a34a",
                  }}
                >
                  {totalMontant.toLocaleString("fr-FR")} FCFA
                </span>
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
            ⚠️ Après validation, vous serez redirigé vers la page de paiement de
            votre abonnement vendeur et un récapitulatif sera envoyé à votre
            adresse email.
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
