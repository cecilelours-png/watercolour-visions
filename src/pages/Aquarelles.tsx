import { useState } from "react";
import Layout from "@/components/layout/Layout";
import eteaparis from "@/assets/eteaparis.jpg";
import firstkissaucanal from "@/assets/firstkissaucanal.jpg";
import lacolonnemorris from "@/assets/lacolonnemorris.jpg";
import ete from "@/assets/ete.JPEG";
import automne from "@/assets/automne.JPEG";
import hiver from "@/assets/hiver.JPEG";
import printemps from "@/assets/printemps.JPEG";
import banc from "@/assets/banc.JPEG";
import metro from "@/assets/metro.JPEG";
import lampadaire from "@/assets/lampadaire.JPEG";

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
      { id: 1, image: printemps, title: "Printemps à Paris", price: "2,50 €" },
      { id: 2, image: ete, title: "Été à Paris", price: "2,50 €" },
      { id: 3, image: automne, title: "Automne à Paris", price: "2,50 €" },
      { id: 4, image: hiver, title: "Hiver à Paris", price: "2,50 €" },
      
    ],
    mobilier: [
      { id: 5, image: lampadaire, title: "Le lampadaire", price: "2,50 €" },
      { id: 6, image: metro, title: "Le métro", price: "2,50 €" },
      { id: 7, image: banc, title: "Le banc", price: "2,50 €" },
    ],
  },
  tirages: {
    inspiration: [
      { id: 1, image: lacolonnemorris, title: "Horizon paisible", price: "120 €", edition: "1/30" },
      { id: 2, image: eteaparis, title: "Floraison délicate", price: "120 €", edition: "5/30" },
    ],
  },
  uniques: {
    lieux: [
      { id: 1, image: firstkissaucanal, title: "L'océan rêveur", price: "350 €", size: "30 x 40 cm" },
    ],
    enfants: [
      { id: 2, image: lacolonnemorris, title: "Portrait personnalisé", price: "450 €", size: "40 x 50 cm" },
    ],
    vacances: [],
    voeux: [],
    autres: [],
  },
};

const tabDescriptions = {
  impressions: {
    title: "Impressions d'art",
    description: "Reproductions fidèles sur papier d'art de haute qualité. Chaque impression est réalisée avec des encres pigmentaires garantissant une durabilité exceptionnelle.",
  },
  tirages: {
    title: "Tirages limités",
    description: "Éditions numérotées et signées à la main. Chaque tirage est accompagné d'un certificat d'authenticité et produit en quantité limitée à 30 exemplaires.",
  },
  uniques: {
    title: "Créations uniques",
    description: "Œuvres originales peintes à la main sur papier aquarelle 100% coton. Chaque pièce est unique et témoigne d'un moment créatif particulier.",
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
            qui résonnera avec votre sensibilité.
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
