import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ete from "@/assets/ete.jpg";
import automne from "@/assets/automne.jpg";
import hiver from "@/assets/hiver.jpg";
import printemps from "@/assets/printemps.jpg";
import banc from "@/assets/banc.jpg";
import metro from "@/assets/metro.jpg";
import lampadaire from "@/assets/lampadaire.jpg";
import colonnemorris from "@/assets/colonnemorris.jpg";
import metropolitain from "@/assets/metropolitain.jpg";
import agathe from "@/assets/agathe.jpg";
import alix from "@/assets/alix.jpg";
import leonard from "@/assets/leonard.jpg";
import lou from "@/assets/lou.jpg";
import albane from "@/assets/albane.jpg";
import canal from "@/assets/canal.jpg";
import grau from "@/assets/grau.jpg";
import norvege from "@/assets/norvege.jpg";
import matisse from "@/assets/matisse.jpg";
import ronron from "@/assets/ronron.jpg";
import swing from "@/assets/swing.jpg";
import andreas from "@/assets/andreas.jpg";
import chrysopigi from "@/assets/chrysopigi.jpg";
import merry from "@/assets/merry.jpg";
import rouge from "@/assets/rouge.jpg";

type TabType = "impressions" | "tirages" | "uniques";

type SubFilter = {
  id: string;
  label: string;
};

const tabs: { id: TabType; label: string; subFilters: SubFilter[] }[] = [
  {
    id: "impressions",
    label: "Impressions",
    subFilters: [
      { id: "saisons", label: "Saisons parisiennes" },
      { id: "mobilier", label: "Mobilier parisien" },
    ],
  },
  {
    id: "tirages",
    label: "Tirages limités",
    subFilters: [
      { id: "inspiration", label: "Inspiration parisienne" },
    ],
  },
  {
    id: "uniques",
    label: "Créations uniques",
    subFilters: [
      { id: "lieux", label: "Vos lieux préférés" },
      { id: "enfants", label: "Vos enfants adorés" },
      { id: "vacances", label: "Souvenirs de vacances" },
      { id: "voeux", label: "Carte de voeux" },
      { id: "autres", label: "Autres projets perso" },
    ],
  },
];

const artworks = {
  impressions: {
    saisons: [
      { id: 1, image: printemps, title: "Printemps à Paris", price: "2,50 €", size: "A6" },
      { id: 2, image: ete, title: "Été à Paris", price: "2,50 €", size: "A6" },
      { id: 3, image: automne, title: "Automne à Paris", price: "2,50 €", size: "A6" },
      { id: 4, image: hiver, title: "Hiver à Paris", price: "2,50 €", size: "A6" },
      
    ],
    mobilier: [
      { id: 5, image: lampadaire, title: "Le lampadaire", price: "2,50 €", size: "A6" },
      { id: 6, image: metro, title: "Le métro", price: "2,50 €", size: "A6" },
      { id: 7, image: banc, title: "Le banc", price: "2,50 €", size: "A6" },
    ],
  },
  tirages: {
    inspiration: [
      { id: 8, image: colonnemorris, title: "La colonne Morris", price: "15 €", edition: "3/30", size: "A5" },
      { id: 9, image: metropolitain, title: "Le Metropolitain", price: "15 €", edition: "5/30", size: "A5" },
    ],
  },
  uniques: {
    lieux: [
      { id: 10, image: canal, title: "First kiss au Canal Saint Martin", size: "A4" },
      { id: 11, image: grau, title: "Le Grau-de-la-Reine", size: "13 x 18 cm" },
      { id: 12, image: norvege, title: "Voyage en Norvège", size: "A4" },
    ],
    enfants: [
      { id: 13, image: agathe, title: "Agathe", size: "13 x 18 cm" },
      { id: 14, image: alix, title: "Alix", size: "13 x 18 cm" },
      { id: 15, image: leonard, title: "Léonard", size: "13 x 18 cm" },
      { id: 16, image: lou, title: "Lou", size: "13 x 18 cm" },
      { id: 17, image: albane, title: "Albane", size: "13 x 18 cm" },
    ],
    vacances: [
      { id: 18, image: chrysopigi, title: "Coin chill au Monastère", size: "A6" },
      { id: 19, image: andreas, title: "Agios Andreas, Sifnos", size: "A6" },
    ],
    voeux: [
      { id: 20, image: merry, title: "Merry 1st Christmas", size: "13 x 18 cm" },
      { id: 21, image: rouge, title: "Lots of Love", size: "13 x 18 cm" },
    ],
    autres: [
      { id: 22, image: matisse, title: "La blouse romaine", size: "13 x 18 cm" },
      { id: 23, image: ronron, title: "Ronron thérapie", size: "13 x 18 cm" },
      { id: 24, image: swing, title: "Let's swing", size: "13 x 18 cm double" },
    ],
  },
};

const tabDescriptions = {
  impressions: {
    title: "Impressions",
    description: "Des souvenirs au format carte postale, imprimés sur un papier de qualité.",
  },
  tirages: {
    title: "Tirages limités",
    description: "Éditions numérotées et signées à la main. Chaque tirage est produit en quantité limitée à 30 exemplaires.",
  },
  uniques: {
    title: "Créations uniques",
    description: "Une aquarelle originale personnalisée, imaginée selon vos envies.",
  },
};

const Aquarelles = () => {
  const [activeTab, setActiveTab] = useState<TabType>("impressions");
  const [activeSubFilter, setActiveSubFilter] = useState<string | null>(null);

  const currentTab = tabs.find((t) => t.id === activeTab);
  const subFilters = currentTab?.subFilters || [];

  const handleTabClick = (tabId: TabType) => {
    setActiveTab(tabId);
    // Reset sub-filter when changing main tab
    setActiveSubFilter(null);
  };

  const handleSubFilterClick = (subFilterId: string) => {
    setActiveSubFilter(activeSubFilter === subFilterId ? null : subFilterId);
  };

  // Get artworks based on current filters
  const getCurrentArtworks = () => {
    const tabArtworks = artworks[activeTab];
    if (activeSubFilter && tabArtworks[activeSubFilter as keyof typeof tabArtworks]) {
      return tabArtworks[activeSubFilter as keyof typeof tabArtworks] || [];
    }
    // If no sub-filter selected, show all artworks from all sub-categories
    return Object.values(tabArtworks).flat();
  };

  const currentArtworks = getCurrentArtworks();

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
            qui vous inspire.
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 border-b border-border">
        <div className="container">
          {/* Main Tabs */}
          <nav className="flex flex-wrap justify-center gap-2 md:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
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

          {/* Sub-filters */}
          {subFilters.length > 0 && (
            <nav className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 pt-4 border-t border-border/50">
              {subFilters.map((subFilter) => (
                <button
                  key={subFilter.id}
                  onClick={() => handleSubFilterClick(subFilter.id)}
                  className={`font-body text-xs md:text-sm px-3 py-1.5 rounded-full transition-all duration-300 ${
                    activeSubFilter === subFilter.id
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground border border-border/50"
                  }`}
                >
                  {subFilter.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Tab Description */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              {tabDescriptions[activeTab].title}
            </h2>
            <p className="font-body text-muted-foreground">
              {tabDescriptions[activeTab].description}
            </p>
          </div>

          {/* Artworks Grid */}
          {currentArtworks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentArtworks.map((artwork) => (
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
                          Édition {(artwork as { edition: string }).edition}
                        </p>
                      )}
                      {"size" in artwork && (
                        <p className="font-body text-xs text-muted-foreground">
                          {artwork.size}
                        </p>
                      )}
                    </div>
                    {"price" in artwork && (
                      <span className="font-body text-foreground">
                        {(artwork as { price: string }).price}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-body text-muted-foreground">
                Aucune œuvre disponible dans cette catégorie pour le moment.
              </p>
            </div>
          )}
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
