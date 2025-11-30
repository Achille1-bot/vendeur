// src/pages/MarketplaceHomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function MarketplaceHomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, #eef2ff 0, #e0f2fe 30%, #fef9c3 70%, #ffffff 100%)",
        padding: "32px 16px 40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <main
        style={{
          width: "100%",
          maxWidth: "1120px",
          display: "grid",
          gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2.2fr)",
          gap: "32px",
          alignItems: "stretch",
        }}
      >
        {/* COLONNE GAUCHE – HERO */}
        <section
          style={{
            background: "#ffffff",
            borderRadius: "24px",
            padding: "24px 24px 28px",
            boxShadow: "0 20px 60px rgba(15,23,42,0.15)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Badge + titre */}
          <div>
            <center>
                <p
              style={{
                fontSize: "30px",
                textTransform: "uppercase",
                letterSpacing: "0.20em",
                color: "#d8b34eff",
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              Plateforme vendeurs
            </p>
            </center>       
            <h1
              style={{
                fontSize: "30px",
                lineHeight: 1.15,
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: 10,
              }}
            >
              Développez votre business<br />avec {" "}
              <span style={{ color: "#44ce7dff",
                fontSize: "40px",
               }}>GoShop</span>
            </h1>

            <p
              style={{
                fontSize: "14px",
                color: "#4b5563",
                maxWidth: "520px",
                marginBottom: 18,
              }}
            >
              Vendez vos produits à des milliers de clients en Afrique de
              l’Ouest. Paiement Mobile Money (Flooz / TMoney via PayGate) et
              paiement à la livraison, sans que le client ait besoin de créer
              un compte.
            </p>

            {/* Points clés */}
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 18px",
                display: "grid",
                gap: 8,
              }}
            >
              <li style={{ display: "flex", gap: 8, fontSize: 13 }}>
                <span style={{ color: "#16a34a" }}>●</span>
                <span>
                  <strong>Aucun abonnement mensuel :</strong> vous payez
                  uniquement sur les ventes réalisées.
                </span>
              </li>
              <li style={{ display: "flex", gap: 8, fontSize: 13 }}>
                <span style={{ color: "#4f46e5" }}>●</span>
                <span>
                  <strong>Produits variés :</strong> électronique, beauté,
                  maison, alimentaire, automobile, etc.
                </span>
              </li>
              <li style={{ display: "flex", gap: 8, fontSize: 13 }}>
                <span style={{ color: "#f59e0b" }}>●</span>
                <span>
                  <strong>Logistique adaptée à la région :</strong> livraison,
                  point relais, paiement à la réception.
                </span>
              </li>
            </ul>
          </div>

          {/* Boutons CTA */}
          <div
            style={{
              marginTop: 10,
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {/* 👉 Lien vers la page d’enregistrement vendeur */}
            <Link
              to="/inscription-vendeur"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 18px",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, #4f46e5 0%, #6366f1 40%, #22c55e 100%)",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 10px 25px rgba(79,70,229,0.3)",
              }}
            >
              Rejoindre le marketplace
            </Link>

            {/* Lien vers ton site actuel GoShop */}
            <a
              href="https://goshopforall.com/"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "9px 16px",
                borderRadius: "999px",
                border: "1px solid #e5e7eb",
                background: "#ffffff",
                color: "#111827",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Voir le marketplace GoShop
            </a>
          </div>

          {/* Bandeau stats */}
          <div
            style={{
              marginTop: 22,
              padding: "12px 14px",
              borderRadius: "16px",
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0,1fr))",
              gap: 8,
              fontSize: 12,
            }}
          >
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>
                10k+
              </div>
              <div style={{ color: "#6b7280" }}>Clients servis</div>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>
                0 FCFA
              </div>
              <div style={{ color: "#6b7280" }}>Frais d’abonnement</div>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#111827" }}>
                Mobile Money
              </div>
              <div style={{ color: "#6b7280" }}>PayGate, Flooz, TMoney</div>
            </div>
          </div>
        </section>

        {/* COLONNE DROITE – CARDS / SECTIONS */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Bloc “Pourquoi vendre sur GoShop ?” */}
          <div
            style={{
              background: "#0f172a",
              borderRadius: "24px",
              padding: "18px 18px 20px",
              color: "#e5e7eb",
            }}
          >
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: 8,
                color: "#ffffff",
              }}
            >
              Pourquoi vendre sur GoShop ?
            </h2>
            <p
              style={{
                fontSize: "13px",
                marginBottom: 10,
                color: "#cbd5f5",
              }}
            >
              GoShop est une marketplace multi-vendeurs qui accepte les clients{" "}
              sans création de compte, avec paiement Mobile Money et à la
              livraison. Idéal pour toucher une clientèle locale et diaspora.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: 12,
                display: "grid",
                gap: 6,
              }}
            >
              <li>✔ Interface simple pour ajouter vos produits.</li>
              <li>✔ Gestion des commandes et des paiements centralisée.</li>
              <li>✔ Accompagnement par notre équipe pour le démarrage.</li>
            </ul>
          </div>

          {/* Bloc “Comment ça marche ?” */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "16px 16px 18px",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#111827",
                marginBottom: 8,
              }}
            >
              Comment ça fonctionne ?
            </h3>
            <ol
              style={{
                paddingLeft: "18px",
                margin: 0,
                fontSize: 13,
                color: "#4b5563",
                display: "grid",
                gap: 4,
              }}
            >
              <li>Remplissez le formulaire d’inscription vendeur.</li>
              <li>Votre demande est validée par l’équipe GoShop.</li>
              <li>Vous recevez un lien pour créer votre mot de passe.</li>
              <li>Ajoutez vos produits et commencez à vendre.</li>
            </ol>
          </div>

          {/* Bloc “Catégories phares” */}
          <div
            style={{
              background: "#f9fafb",
              borderRadius: "20px",
              padding: "16px 16px 18px",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#111827",
                marginBottom: 8,
              }}
            >
              Catégories phares du marketplace
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                fontSize: 12,
              }}
            >
              {[
                "Électronique & accessoires",
                "Beauté & soins personnels",
                "Maison & électroménager",
                "Nourriture & boissons",
                "Pharmacie & santé",
                "Jeux & jouets",
                "Vêtements & mode",
                "Auto & accessoires",
              ].map((cat) => (
                <span
                  key={cat}
                  style={{
                    padding: "5px 10px",
                    borderRadius: "999px",
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Bloc “FAQ rapide” */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "14px 16px 16px",
              border: "1px solid #e5e7eb",
            }}
          >
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#111827",
                marginBottom: 6,
              }}
            >
              Questions fréquentes
            </h3>
            <p style={{ fontSize: 12, color: "#4b5563", marginBottom: 4 }}>
              <strong>Y a-t-il des frais pour devenir vendeur ?</strong>
              <br />
              Pas de frais d’abonnement mensuel. Des commissions peuvent
              s’appliquer sur les ventes selon la catégorie.
            </p>
            <p style={{ fontSize: 12, color: "#4b5563", marginBottom: 0 }}>
              <strong>Puis-je vendre depuis un autre pays ?</strong>
              <br />
              Oui, tant que votre logistique vous permet de livrer vos clients
              sur nos zones desservies.
            </p>
          </div>
        </section>
      </main>

      {/* Responsive */}
      <style>
        {`
          @media (max-width: 900px) {
            main[style] {
              grid-template-columns: minmax(0, 1fr) !important;
            }
          }
        `}
      </style>
    </div>
  );
}
