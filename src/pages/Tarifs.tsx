import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Check, CornerDownRight } from "lucide-react";

const pricingTiers = [
  {
    name: "Impressions",
    description: "Reproductions au format carte postale",
    prices: [
      { size: "10,5 x 14,8 cm (A6)", price: "2,50 €", framedPrice: "+2 €" },
    ],
    features: [
      "Papier Diva Art 300g/m²",
      "Emballage protégé",
      "Enveloppe vierge fournie",
      "Envoi sous 5 jours",
    ],
    variant: "light",
  },
  {
    name: "Tirages limités",
    description: "Éditions numérotées et signées",
    prices: [
      { size: "14,8 x 21 cm (A5)", price: "15 €", framedPrice: "+4 €" },
    ],
    features: [
      "Papier d'art Olin 300g/m²",
      "Emballage protégé",
      "Edition limitée à 30 exemplaires",
      "Envoi sous 5 jours",
    ],
    variant: "medium",
  },
  {
    name: "Créations uniques",
    description: "Œuvres originales sur commande",
    prices: [
      { size: "10,5 x 14,8 cm (A6)", price: "20 €", framedPrice: "+2 €" },
      { size: "13 x 18 cm", price: "25 €", framedPrice: "+3 €"  },
      { size: "14,8 x 21 cm (A5)", price: "28 €", framedPrice: "+4 €" },
      { size: "21 x 29,7 cm (A4)", price: "40 €", framedPrice: "+4 €" },
    ],
    features: [
      "Papier aquarelle 300g/m²",
      "Emballage protégé", 
      "Œuvre unique sur commande",
      "Délais selon complexité du projet",
    ],
    variant: "dark",
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
            Des options pour tous les budgets,<br />
            de l'impression à l'œuvre originale unique.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => {
              const variantClasses = {
                light: "bg-pricing-light border border-border",
                medium: "bg-pricing-medium border border-border",
                dark: "bg-pricing-dark border border-border",
              };
              return (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 transition-all duration-300 hover-lift ${variantClasses[tier.variant]}`}
              >
                <h2 className="font-display text-2xl mb-2 text-foreground">
                  {tier.name}
                </h2>
                <p className="font-body text-sm mb-8 text-muted-foreground">
                  {tier.description}
                </p>

                {/* Prices */}
                <div className="space-y-5 mb-8">
                  {tier.prices.map((item) => (
                    <div key={item.size} className="space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-body text-sm text-muted-foreground">
                          {item.size}
                        </span>
                        <span className="font-body font-medium text-foreground whitespace-nowrap flex items-baseline gap-1">
                          {item.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CornerDownRight size={12} className="text-muted-foreground" />
                        <span className="font-body text-xs text-muted-foreground">
                          Option encadré {item.framedPrice}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px mb-8 bg-border" />

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check size={16} className="text-foreground" />
                      <span className="font-body text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              );
            })}
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
                <strong className="text-foreground">Livraison :</strong><br /> 
                France métropolitaine : 4 € Lettre Suivie ou Mondial Relay<br /> 
                International : Frais calculés selon la destination.
              </p>
              <p>
                <strong className="text-foreground">Paiement :</strong> Virement bancaire ou PayPal avec protection acheteur.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-10 font-body text-sm tracking-widest uppercase px-8 py-4 border border-foreground/30 rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tarifs;
