import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-watercolor.jpg";
import eteaparis from "@/assets/eteaparis.jpg";
import lacolonnemorris from "@/assets/lacolonnemorris.jpg";
import firstkissaucanal from "@/assets/firstkissaucanal.jpg";
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Aquarelle de pivoines" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background bg-primary-foreground" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center px-6">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground animate-fade-in-up mb-6">
            Aquarelles à offrir
            <br />
            <span className="text-muted-foreground">ou à s'offrir</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto animate-fade-in-delay mb-10">
            Un cadeau personnel, une œuvre à collectionner,<br />
            une carte à envoyer ou à afficher... 
          </p>
          <Link to="/aquarelles" className="inline-block font-body text-sm tracking-widest uppercase px-8 py-4 border border-foreground/30 rounded-full hover:bg-foreground hover:text-background transition-all duration-300 animate-fade-in-delay-2">
            Découvrir les œuvres
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              L'univers Colours Await
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Je peins des aquarelles pensées pour devenir des cadeaux personnels,
              porteurs d’une histoire, d’une émotion, d’un lien que l’on choisit d’offrir.</p>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-16">
            Aperçu des collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <Link to="/aquarelles" className="group block hover-lift">
              <div className="image-reveal aspect-square rounded-lg overflow-hidden mb-4">
                <img src={eteaparis} alt="Ete à Paris" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                Impressions
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Des souvenirs au format carte postale, 
                imprimés sur un papier de qualité.
              </p>
            </Link>

            {/* Card 2 */}
            <Link to="/aquarelles" className="group block hover-lift">
              <div className="image-reveal aspect-square rounded-lg overflow-hidden mb-4">
                <img src={lacolonnemorris} alt="La colonne Morris" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                Tirages limités
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Tirages d’aquarelle en édition limitée, 
                numérotés et signés à la main. 
                Imprimés sur papier d’art.
              </p>
            </Link>

            {/* Card 3 */}
            <Link to="/aquarelles" className="group block hover-lift">
              <div className="image-reveal aspect-square rounded-lg overflow-hidden mb-4">
                <img src={firstkissaucanal} alt="First kiss au Canal Saint Martin" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                Créations uniques
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Une aquarelle originale personnalisée, 
                pour offrir un cadeau unique.
              </p>
            </Link>
          </div>

          <div className="text-center mt-16">
            <Link to="/aquarelles" className="inline-block font-body text-sm tracking-widest uppercase px-8 py-4 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity duration-300">
              Voir toutes les collections
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-accent/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Une création sur mesure ?
            </h2>
            <p className="font-body text-muted-foreground mb-10">
              Contactez-moi pour imaginer ensemble une aquarelle personnalisée.
              Que vous ayez une idée précise ou simplement une envie, 
              je vous accompagnerai pour créer un cadeau sur mesure.
            </p>
            <Link to="/contact" className="inline-block font-body text-sm tracking-widest uppercase px-8 py-4 border border-foreground/30 rounded-full hover:bg-foreground hover:text-background transition-all duration-300">
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;
