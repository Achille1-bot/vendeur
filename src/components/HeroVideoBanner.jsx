// src/components/HeroVideoBanner.jsx
import React from "react";
import { Link } from "react-router-dom";

function HeroVideoBanner() {
  return (
    <section className="gs-hero">
      <video
        className="gs-hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/y2mate--Tiakola-M3lo-Clip-Officiel_360.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>

      <div className="gs-hero-overlay" />

      <div className="gs-hero-inner">
        

        <h1 className="gs-hero-title">
          Vendez plus, <span>sans complexité</span>
        </h1>

        <p className="gs-hero-text">
          GoShop connecte votre boutique à des milliers de clients grâce à un
          catalogue en ligne, le paiement Mobile Money et la livraison adaptée
          à la réalité locale.
        </p>

        
        <div className="gs-hero-meta">
          <span>✔ Paiement Mobile Money & à la livraison</span>
          <span>✔ Vitrine en ligne pour votre boutique</span>
        </div>
        <div className="gs-hero-cta">
          <Link
            to="/inscription-vendeur"
            className="gs-hero-btn gs-hero-btn-secondary"
          >
            Devenir vendeur GoShop
          </Link>
        </div>

      </div>
    </section>
  );
}

export default HeroVideoBanner;
