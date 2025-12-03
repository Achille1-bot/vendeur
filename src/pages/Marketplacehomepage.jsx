// src/pages/MarketplaceHomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

const SERVICE_CARDS = [
  {
    id: 1,
    title: "Choisissez parmi nos options de livraison",
    text: "Sous-traitez une partie de votre logistique à GoShop et profitez d’une solution adaptée aux vendeurs de toutes tailles.",
    linkLabel: "Découvrir nos solutions logistiques",
    // 🔁 Mets ici l’URL de TON image
    imageUrl: "/images/services-logistique.jpg",
  },
  {
    id: 2,
    title: "Gagnez en visibilité auprès de milliers de clients",
    text: "Boostez vos ventes grâce à des bannières sponsorisées et mises en avant sur la page d’accueil GoShop.",
    linkLabel: "En savoir plus sur la publicité",
    imageUrl: "/images/services-publicite.jpg",
  },
  {
    id: 3,
    title: "Vendez facilement vers d’autres villes et pays",
    text: "Utilisez votre compte vendeur GoShop pour toucher des clients dans différentes villes et pays d’Afrique de l’Ouest.",
    linkLabel: "Voir les options d’expansion",
    imageUrl: "/images/services-expansion.jpg",
  },
];

const SUBSCRIPTIONS = [
  {
    id: "basic",
    name: "Pack Essentiel",
    price: "À partir de 3000 FCFA / mois*",
    tag: "Idéal pour débuter",
    description:
      "Vendez vos produits avec un nombre limité d’articles et une commission sur les ventes.",
    features: [
      "Mise en ligne des produits",
      "Paiement Mobile Money & à la livraison",
      "Support par email",
    ],
  },
  {
    id: "pro",
    name: "Pack Pro",
    price: "À partir de 5 000 FCFA / mois",
    tag: "Boutiques en croissance",
    description:
      "Plus de visibilité, plus de produits et des outils pour suivre vos performances.",
    features: [
      "Statistiques détaillées (ventes, clics…)",
      "Mise en avant régulière sur la page d’accueil",
      "Support prioritaire WhatsApp",
    ],
  },
  {
    id: "premium",
    name: "Pack Premium",
    price: "Sur devis",
    tag: "Pour grandes enseignes",
    description:
      "Accompagnement personnalisé pour les marques et supermarchés.",
    features: [
      "Gestion multi-boutiques / multi-villes",
      "Accompagnement marketing & shooting produits",
      "Gestion dédiée par un account manager",
    ],
  },
];

export default function MarketplaceHomePage() {
  const joinButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "9px 18px",
    borderRadius: "999px",
    background:
      "linear-gradient(135deg, #4f46e5 0%, #6366f1 40%, #22c55e 100%)",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 8px 20px rgba(79,70,229,0.30)",
    border: "none",
    whiteSpace: "nowrap",
  };

  // scroll doux vers une section (#id)
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
      }}
    >
      {/* NAVBAR TYPE WALMART */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {/* Logo + titre */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              minWidth: 0,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg,#16a34a 0%,#22c55e 40%,#4ade80 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              G
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.2,
              }}
            >
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                GoShop Marketplace
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: "#6b7280",
                }}
              >
                Plateforme vendeurs · Afrique de l’Ouest
              </span>
            </div>
          </div>

          {/* Liens du menu */}
          <nav
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              gap: 18,
              fontSize: 14,
              color: "#4b5563",
            }}
          >
            <button
              type="button"
              onClick={() => scrollToId("pourquoi")}
              style={{
                border: "none",
                background: "transparent",
                padding: 0,
                cursor: "pointer",
                color: "#4b5563",
              }}
            >
              Pourquoi GoShop
            </button>
            <button
              type="button"
              onClick={() => scrollToId("fonctionnement")}
              style={{
                border: "none",
                background: "transparent",
                padding: 0,
                cursor: "pointer",
                color: "#4b5563",
              }}
            >
              Comment ça marche
            </button>
            <button
              type="button"
              onClick={() => scrollToId("offres")}
              style={{
                border: "none",
                background: "transparent",
                padding: 0,
                cursor: "pointer",
                color: "#4b5563",
              }}
            >
              Avantages vendeurs
            </button>
            <button
              type="button"
              onClick={() => scrollToId("faq")}
              style={{
                border: "none",
                background: "transparent",
                padding: 0,
                cursor: "pointer",
                color: "#4b5563",
              }}
            >
              FAQ
            </button>
          </nav>

          {/* Actions à droite */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <a
              href="#"
              style={{
                fontSize: 13,
                color: "#4b5563",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Connexion vendeur
            </a>

            <Link to="/inscription-vendeur" style={joinButtonStyle}>
              Rejoindre le marketplace
            </Link>
          </div>
        </div>
      </header>

      {/* CONTENU PRINCIPAL */}
      <div
        style={{
          padding: "24px 16px 40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <main
          style={{
            width: "100%",
            maxWidth: "1120px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            fontSize: "15px",
            lineHeight: 1.6,
          }}
        >
          {/* Bandeau texte haut */}
          <div style={{ fontSize: 12, color: "#4b5563", marginBottom: 4 }}>
            <span
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "#6d28d9",
                fontWeight: 600,
              }}
            >
              Inscris toi en tant que vendeur
            </span>
          </div>

          {/* HERO + bannières (vertical) */}
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* HERO */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                padding: "24px 24px 28px",
                boxShadow: "0 20px 60px rgba(15,23,42,0.12)",
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: "#9ca3af",
                  fontWeight: 600,
                  marginBottom: 6,
                }}
              >
                Plateforme vendeurs
              </p>

              <h1
                style={{
                  fontSize: 34,
                  lineHeight: 1.15,
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: 10,
                }}
              >
                Développez votre business avec{" "}
                <span style={{ color: "#16a34a" }}>GoShop</span>
              </h1>

              <p
                style={{
                  fontSize: 15,
                  color: "#4b5563",
                  maxWidth: "620px",
                  marginBottom: 18,
                }}
              >
                Rejoignez la marketplace GoShop et vendez vos produits à des
                milliers de clients en Afrique de l’Ouest. Paiement Mobile
                Money, paiement à la livraison, sans que le client ait besoin
                de créer un compte.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 18px",
                  display: "grid",
                  gap: 6,
                  color: "#111827",
                }}
              >
          
                <li style={{ display: "flex", gap: 8 }}>
                  <span style={{ color: "#4f46e5" }}>●</span>
                  <span>
                    <strong>Produits variés :</strong> électronique, beauté,
                    maison, alimentaire, automobile, etc.
                  </span>
                </li>
                <li style={{ display: "flex", gap: 8 }}>
                  <span style={{ color: "#f59e0b" }}>●</span>
                  <span>
                    <strong>Adapté à la réalité locale :</strong> Mobile Money,
                    livraison, point relais, paiement à la réception.
                  </span>
                </li>
              </ul>

              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                <Link to="/inscription-vendeur" style={joinButtonStyle}>
                  Rejoindre le marketplace
                </Link>

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

              <div
                style={{
                  marginTop: 22,
                  padding: "12px 14px",
                  borderRadius: "16px",
                  background: "#f9fafb",
                  border: "1px solid #e5e7eb",
                  display: "grid",
                  gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                  gap: 8,
                  fontSize: 13,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    10k+
                  </div>
                  <div style={{ color: "#6b7280" }}>Clients servis</div>
                </div>
                <div>
                  
                  
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    Mobile Money
                  </div>
                  <div style={{ color: "#6b7280" }}>PayGate, Flooz, TMoney</div>
                </div>
              </div>
            </div>

            {/* Bannière gradient */}
            <div
              id="pourquoi"
              style={{
                borderRadius: "24px",
                padding: "20px 22px",
                background:
                  "linear-gradient(135deg, #0f172a 0%, #0f766e 45%, #16a34a 100%)",
                color: "#e5e7eb",
              }}
            >
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 8,
                  color: "#ffffff",
                }}
              >
                GoShop : votre partenaire e-commerce
              </h2>
              <p
                style={{
                  fontSize: 14,
                  marginBottom: 10,
                  maxWidth: 640,
                }}
              >
                Une seule plateforme pour gérer votre catalogue, vos commandes,
                vos paiements et la relation avec vos clients.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: 14,
                  display: "grid",
                  gap: 4,
                }}
              >
                <li>✔ Interface simple pour ajouter vos produits.</li>
                <li>✔ Tableau de bord centralisé des commandes.</li>
                <li>✔ Support en français et en langues locales.</li>
              </ul>
            </div>

            {/* Carte commerçant physique */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "18px 18px 20px",
                border: "1px solid #e5e7eb",
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#111827",
                  marginBottom: 6,
                }}
              >
                Déjà commerçant physique ?
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#4b5563",
                  marginBottom: 8,
                }}
              >
                Transformez votre boutique locale en vitrine en ligne. Vendez à
                vos clients habituels et à de nouveaux clients en quelques
                clics.
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "#4b5563",
                  margin: 0,
                }}
              >
                <strong>Idéal pour :</strong> boutiques de vêtements, shops
                électroniques, supermarchés & épiceries.
              </p>
            </div>
          </section>

          {/* COMMENT ÇA FONCTIONNE */}
          <section id="fonctionnement">
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#111827",
                marginBottom: 10,
              }}
            >
              Comment ça fonctionne ?
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1fr)",
                gap: "10px",
              }}
            >
              {[
                {
                  title: "1. Inscrivez-vous",
                  text: "Remplissez le formulaire vendeur avec vos informations.",
                },
                {
                  title: "2. Validation",
                  text: "Notre équipe vérifie votre profil et valide votre compte.",
                },
                {
                  title: "3. Activation du compte",
                  text: "Vous recevez un email pour définir votre mot de passe.",
                },
                {
                  title: "4. Commencez à vendre",
                  text: "Ajoutez vos produits, suivez vos commandes et vos paiements.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    padding: "12px 14px",
                    border: "1px solid #e5e7eb",
                    fontSize: 14,
                    color: "#111827",
                  }}
                >
                  <strong>{step.title}</strong>
                  <br />
                  <span style={{ color: "#4b5563" }}>{step.text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* OFFRES GOSHOP */}
          <section id="offres">
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#111827",
                marginBottom: 10,
              }}
            >
              Ce que GoShop offre aux vendeurs
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1fr)",
                gap: "10px",
              }}
            >
              {[
                "Mise en avant de vos produits sur la page d’accueil.",
                "Support pour configurer votre catalogue et vos prix.",
                "Possibilité de gérer plusieurs catégories (alimentaire, électronique, mode, véhicules…).",
                "Intégration prochaine de statistiques détaillées (ventes, clics, meilleures références).",
                "Outils pour partager vos produits par WhatsApp et réseaux sociaux.",
                "Accompagnement pour optimiser vos fiches produits (photos, titres, descriptions).",
              ].map((text, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    padding: "12px 14px",
                    border: "1px solid #e5e7eb",
                    fontSize: 14,
                    color: "#111827",
                  }}
                >
                  {text}
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#111827",
                marginBottom: 10,
              }}
            >
              Questions fréquentes
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,1fr)",
                gap: "10px",
              }}
            >
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "12px 14px",
                  border: "1px solid #e5e7eb",
                  fontSize: 14,
                  color: "#111827",
                }}
              >
                <p style={{ marginBottom: 4 }}>
                  <strong>Y a-t-il des frais pour devenir vendeur ?</strong>
                </p>
                <p style={{ color: "#4b5563", margin: 0 }}>
                  Bien évidement que oui vous verez les détails un peu plus en bas.
                </p>
              </div>

              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  padding: "12px 14px",
                  border: "1px solid #e5e7eb",
                  fontSize: 14,
                  color: "#111827",
                }}
              >
                <p style={{ marginBottom: 4 }}>
                  <strong>Puis-je vendre depuis un autre pays ?</strong>
                </p>
                <p style={{ color: "#4b5563", margin: 0 }}>
                  Oui, à condition de pouvoir livrer vos clients sur nos zones
                  des servies (Togo et autres pays d’Afrique de l’Ouest). Vous
                  pouvez également gérer des stocks depuis plusieurs
                  emplacements.
                </p>
              </div>
            </div>
          </section>
{/* BLOCS DE SERVICES (style Walmart) */}
<section id="services">
  <h2
    style={{
      fontSize: 20,
      fontWeight: 700,
      color: "#111827",
      marginBottom: 10,
    }}
  >
    Des solutions pour développer votre activité
  </h2>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
    }}
  >
    {SERVICE_CARDS.map((card) => (
      <div
        key={card.id}
        style={{
          flex: "1 1 280px",
          minWidth: 280,
          maxWidth: 360,
          background: "#ffffff",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "0 12px 30px rgba(15,23,42,0.10)",
          border: "1px solid #e5e7eb",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Image en haut */}
        <div
          style={{
            width: "100%",
            height: 180,
            backgroundColor: "#e5e7eb",
            overflow: "hidden",
          }}
        >
          <img
            src={card.imageUrl}
            alt={card.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Contenu texte */}
        <div
          style={{
            padding: "14px 16px 16px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <h3
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#1d4ed8",
              marginBottom: 6,
              lineHeight: 1.3,
            }}
          >
            {card.title}
          </h3>

          <p
            style={{
              fontSize: 14,
              color: "#4b5563",
              marginBottom: 10,
              flex: 1,
            }}
          >
            {card.text}
          </p>

          <button
            type="button"
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              marginTop: 4,
              fontSize: 14,
              fontWeight: 600,
              color: "#1d4ed8",
              cursor: "pointer",
              alignSelf: "flex-start",
            }}
          >
            {card.linkLabel}
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

          {/* NOS ABONNEMENTS */}
<section id="abonnements">
  <h2
    style={{
      fontSize: 20,
      fontWeight: 700,
      color: "#111827",
      marginBottom: 8,
    }}
  >
    Nos abonnements vendeurs
  </h2>

  <p
    style={{
      fontSize: 14,
      color: "#4b5563",
      marginBottom: 12,
      maxWidth: 640,
    }}
  >
    Choisissez la formule qui correspond le mieux à votre activité. Vous
    pouvez démarrer avec un pack simple puis évoluer ensuite.
  </p>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
    }}
  >
    {SUBSCRIPTIONS.map((plan) => (
      <div
        key={plan.id}
        style={{
          flex: "1 1 260px",
          minWidth: 260,
          maxWidth: 340,
          borderRadius: 20,
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
          padding: "16px 16px 18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* En-tête */}
        <div>
          <div
            style={{
              fontSize: 12,
              color: "#4f46e5",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 4,
            }}
          >
            {plan.tag}
          </div>
          <h3
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#111827",
              marginBottom: 4,
            }}
          >
            {plan.name}
          </h3>
          <div
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#16a34a",
              marginBottom: 6,
            }}
          >
            {plan.price}
          </div>
          <p
            style={{
              fontSize: 13,
              color: "#4b5563",
              marginBottom: 8,
            }}
          >
            {plan.description}
          </p>
        </div>

        {/* Liste des avantages */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 10px",
            fontSize: 13,
            color: "#111827",
            display: "grid",
            gap: 4,
          }}
        >
          {plan.features.map((f, i) => (
            <li key={i} style={{ display: "flex", gap: 6 }}>
              <span style={{ color: "#16a34a" }}>✔</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Bouton */}
        <div style={{ marginTop: "auto" }}>
          <Link to="/inscription-vendeur" style={joinButtonStyle}>
            Rejoindre avec ce pack
          </Link>
        </div>
      </div>
    ))}
  </div>

  <p
    style={{
      fontSize: 12,
      color: "#6b7280",
      marginTop: 10,
    }}
  >
    *Les conditions exactes (commissions, plafonds de produits, etc.) peuvent
    être précisées dans votre contrat ou la page de tarification détaillée.
  </p>
</section>


          {/* CTA BAS DE PAGE */}
          <div
            style={{
              marginTop: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to="/inscription-vendeur" style={joinButtonStyle}>
              Rejoindre le marketplace
            </Link>
          </div>

          <footer
            style={{
              marginTop: 18,
              fontSize: 12,
              color: "#9ca3af",
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} GoShop Marketplace – Plateforme
            vendeurs, Afrique de l’Ouest.
          </footer>
        </main>
      </div>
    </div>
  );
}
