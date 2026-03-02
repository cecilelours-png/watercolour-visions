import Layout from "@/components/layout/Layout";
import { FileText, Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Contact
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Deux façons de me joindre, à vous de choisir.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <div className="space-y-6">
            {/* Formulaire */}
            <a
              href="https://tally.so/r/1ArOvM"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 rounded-2xl border border-border bg-card hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileText size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="font-body text-foreground leading-relaxed">
                    Une question, une commande ou envie d'échanger ?
                    <br />
                    <span className="font-medium underline underline-offset-4 decoration-muted-foreground/40 group-hover:decoration-foreground transition-colors">
                      Répondez au formulaire.
                    </span>
                  </p>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:coloursawait@gmail.com"
              className="block p-8 rounded-2xl border border-border bg-card hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="font-body text-foreground leading-relaxed">
                    Vous voulez me contacter directement ?
                    <br />
                    <span className="font-medium underline underline-offset-4 decoration-muted-foreground/40 group-hover:decoration-foreground transition-colors">
                      Écrivez-moi.
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
