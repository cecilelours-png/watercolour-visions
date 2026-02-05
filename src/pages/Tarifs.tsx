import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Impressions",
    description: "Reproductions sur papier d'art",
    prices: [
      { size: "A5 (15 x 21 cm)", price: "25 €" },
      { size: "A4 (21 x 30 cm)", price: "45 €" },
      { size: "A3 (30 x 42 cm)", price: "65 €" },
    ],
    features: [
      "Papier d'art 300g/m²",
      "Encres pigmentaires",
      "Emballage protégé",
      "Envoi sous 5 jours",
    ],
  },
  {
    name: "Tirages limités",
    description: "Éditions numérotées et signées",
    prices: [
      { size: "30 x 40 cm", price: "120 €" },
      { size: "40 x 50 cm", price: "180 €" },
      { size: "50 x 70 cm", price: "250 €" },
    ],
    features: [
      "Limité à 30 exemplaires",
      "Signé et numéroté",
      "Certificat d'authenticité",
      "Papier coton 310g/m²",
      "Envoi sécurisé",
    ],
    highlighted: true,
  },
  {
    name: "Créations uniques",
    description: "Œuvres originales",
    prices: [
      { size: "24 x 32 cm", price: "À partir de 200 €" },
      { size: "30 x 40 cm", price: "À partir de 350 €" },
      { size: "40 x 50 cm", price: "À partir de 450 €" },
    ],
    features: [
      "Pièce unique",
      "Aquarelle originale",
      "Papier 100% coton",
      "Certificat d'authenticité",
      "Envoi assuré",
    ],
  },
];

const Tarifs = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Tarifs
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Des options pour tous les budgets,<b />
            de l'impression à l'œuvre originale unique.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-foreground text-background ring-2 ring-foreground"
                    : "bg-card border border-border hover-lift"
                }`}
              >
                <h2
                  className={`font-display text-2xl mb-2 ${
                    tier.highlighted ? "text-background" : "text-foreground"
                  }`}
                >
                  {tier.name}
                </h2>
                <p
                  className={`font-body text-sm mb-8 ${
                    tier.highlighted ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {tier.description}
                </p>

                {/* Prices */}
                <div className="space-y-4 mb-8">
                  {tier.prices.map((item) => (
                    <div
                      key={item.size}
                      className="flex items-center justify-between"
                    >
                      <span
                        className={`font-body text-sm ${
                          tier.highlighted ? "text-background/80" : "text-muted-foreground"
                        }`}
                      >
                        {item.size}
                      </span>
                      <span
                        className={`font-body font-medium ${
                          tier.highlighted ? "text-background" : "text-foreground"
                        }`}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div
                  className={`h-px mb-8 ${
                    tier.highlighted ? "bg-background/20" : "bg-border"
                  }`}
                />

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check
                        size={16}
                        className={
                          tier.highlighted ? "text-background" : "text-foreground"
                        }
                      />
                      <span
                        className={`font-body text-sm ${
                          tier.highlighted ? "text-background/80" : "text-muted-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-accent/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
              Informations pratiques
            </h2>
            <div className="font-body text-muted-foreground space-y-4 text-left md:text-center">
              <p>
                <strong className="text-foreground">Livraison :</strong> France métropolitaine et 
                international. Frais calculés selon la destination.
              </p>
              <p>
                <strong className="text-foreground">Paiement :</strong> Virement bancaire ou PayPal. 
                Paiement en plusieurs fois possible pour les créations uniques.
              </p>
              <p>
                <strong className="text-foreground">Commandes personnalisées :</strong> Sur devis. 
                N'hésitez pas à me contacter pour discuter de votre projet.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-10 font-body text-sm tracking-widest uppercase px-8 py-4 border border-foreground/30 rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tarifs;
