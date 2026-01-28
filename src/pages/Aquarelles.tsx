import { useState } from "react";
import Layout from "@/components/layout/Layout";
import eteaparis from "@/assets/eteaparis.jpg";
import firstkissaucanal from "@/assets/firstkissaucanal.jpg";
import lacolonnemorris from "@/assets/lacolonnemorris.jpg";

type TabType = "impressions" | "tirages" | "uniques";

const tabs = [
  { id: "impressions" as TabType, label: "Impressions" },
  { id: "tirages" as TabType, label: "Tirages limités" },
  { id: "uniques" as TabType, label: "Créations uniques" },
];

const artworks = {
  impressions: [
    { id: 1, image: eteaparis, title: "Branche de printemps", price: "45 €" },
    { id: 2, image: firstkissaucanal, title: "Vagues d'été", price: "45 €" },
    { id: 3, image: lacolonnemorris, title: "Brume matinale", price: "45 €" },
  ],
  tirages: [
    { id: 1, image: lacolonnemorris, title: "Horizon paisible", price: "120 €", edition: "1/30" },
    { id: 2, image: eteaparis, title: "Floraison délicate", price: "120 €", edition: "5/30" },
  ],
  uniques: [
    { id: 1, image: firstkissaucanal, title: "L'océan rêveur", price: "350 €", size: "30 x 40 cm" },
    { id: 2, image: lacolonnemorris, title: "Montagnes de brume", price: "450 €", size: "40 x 50 cm" },
  ],
};

const Aquarelles = () => {
  const [activeTab, setActiveTab] = useState<TabType>("impressions");

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Aquarelles
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Explorez mes différentes collections et trouvez l'œuvre 
            qui résonnera avec votre sensibilité.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <nav className="flex flex-wrap justify-center gap-2 md:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-body text-sm md:text-base px-4 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Tab Description */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            {activeTab === "impressions" && (
              <>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  Impressions d'art
                </h2>
                <p className="font-body text-muted-foreground">
                  Reproductions fidèles sur papier d'art de haute qualité. 
                  Chaque impression est réalisée avec des encres pigmentaires 
                  garantissant une durabilité exceptionnelle.
                </p>
              </>
            )}
            {activeTab === "tirages" && (
              <>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  Tirages limités
                </h2>
                <p className="font-body text-muted-foreground">
                  Éditions numérotées et signées à la main. Chaque tirage est 
                  accompagné d'un certificat d'authenticité et produit en 
                  quantité limitée à 30 exemplaires.
                </p>
              </>
            )}
            {activeTab === "uniques" && (
              <>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  Créations uniques
                </h2>
                <p className="font-body text-muted-foreground">
                  Œuvres originales peintes à la main sur papier aquarelle 
                  100% coton. Chaque pièce est unique et témoigne d'un moment 
                  créatif particulier.
                </p>
              </>
            )}
          </div>

          {/* Artworks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks[activeTab].map((artwork) => (
              <article
                key={artwork.id}
                className="group hover-lift"
              >
                <div className="image-reveal aspect-square rounded-lg overflow-hidden mb-4 bg-secondary">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      {artwork.title}
                    </h3>
                    {"edition" in artwork && (
                      <p className="font-body text-xs text-muted-foreground">
                        Édition {artwork.edition}
                      </p>
                    )}
                    {"size" in artwork && (
                      <p className="font-body text-xs text-muted-foreground">
                        {artwork.size}
                      </p>
                    )}
                  </div>
                  <span className="font-body text-foreground">
                    {artwork.price}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent/50">
        <div className="container text-center">
          <p className="font-body text-muted-foreground mb-6">
            Vous souhaitez acquérir une œuvre ou en savoir plus ?
          </p>
          <a
            href="/contact"
            className="inline-block font-body text-sm tracking-widest uppercase px-8 py-4 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Me contacter
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Aquarelles;
