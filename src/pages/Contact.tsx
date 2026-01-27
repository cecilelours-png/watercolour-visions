import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message envoyé !", {
      description: "Je vous répondrai dans les plus brefs délais.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Contact
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Une question, une commande ou simplement envie d'échanger ? 
            N'hésitez pas à m'écrire.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                Restons en contact
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:contact@coloursawait.com"
                      className="font-body text-muted-foreground hover:text-foreground transition-colors"
                    >
                      contact@coloursawait.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-body font-medium text-foreground mb-1">
                      Localisation
                    </h3>
                    <p className="font-body text-muted-foreground">
                      France
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-accent/50">
                <h3 className="font-display text-lg text-foreground mb-3">
                  Délai de réponse
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Je m'efforce de répondre à tous les messages sous 48 heures. 
                  Pour les commandes personnalisées, comptez un délai supplémentaire 
                  pour l'élaboration d'un devis détaillé.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body text-sm text-foreground mb-2"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-sm text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-body text-sm text-foreground mb-2"
                  >
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  >
                    <option value="">Choisir un sujet</option>
                    <option value="commande">Passer une commande</option>
                    <option value="devis">Demande de devis</option>
                    <option value="question">Question générale</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-sm text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-body text-sm tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
