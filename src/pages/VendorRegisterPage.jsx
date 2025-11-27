import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ALL_CATEGORIES = [
  "Véhicules",
  "Nourriture",
  "Électronique",
  "Vêtements",
];

const inputStyle = {
  width: "100%",
  padding: "8px 10px",
  borderRadius: "8px",
  border: "1px solid #d4d4d8",
  fontSize: "14px",
  outline: "none",
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      }
      return [...prev, category];
    });
  };

  const removeCategory = (category) => {
    setSelectedCategories((prev) => prev.filter((c) => c !== category));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.nomComplet || !formData.telephone || !formData.nomBoutique) {
      setError(
        "Merci de remplir au moins le nom, le téléphone et le nom de la boutique."
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
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("pendingVendor", JSON.stringify(payload));
    navigate("/paiement-vendeur");
  };

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
          Devenir vendeur sur la plateforme
        </h1>
        <p style={{ marginBottom: "16px", color: "#555" }}>
          Remplissez ce formulaire, choisissez vos catégories, puis validez pour
          passer au paiement.
        </p>

        {error && (
          <div
            style={{
              background: "#fee2e2",
              color: "#b91c1c",
              padding: "10px 12px",
              borderRadius: "8px",
              marginBottom: "16px",
              fontSize: "14px",
            }}
          >
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          style={{ display: "grid", gap: "12px" }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                marginBottom: "4px",
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
                fontSize: "14px",
                marginBottom: "4px",
              }}
            >
              Email
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
                fontSize: "14px",
                marginBottom: "4px",
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
                fontSize: "14px",
                marginBottom: "4px",
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

          <div>
            <label
              style={{
                display: "block",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Catégories d’articles que vous souhaitez vendre*
            </label>
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
                        ? "1px solid #2563eb"
                        : "1px solid #d4d4d8",
                      background: isActive ? "#dbeafe" : "#f9fafb",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {selectedCategories.length > 0 && (
            <div style={{ marginTop: "8px" }}>
              <p style={{ fontSize: "14px", marginBottom: "4px" }}>
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
                      background: "#eff6ff",
                      fontSize: "13px",
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

          <button
            type="submit"
            style={{
              marginTop: "16px",
              width: "100%",
              padding: "10px 16px",
              borderRadius: "999px",
              border: "none",
              background: "#2563eb",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Valider et passer au paiement
          </button>
        </form>
      </div>
    </div>
  );
}
