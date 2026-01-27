import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-display text-xl tracking-wide text-foreground transition-opacity hover:opacity-70"
          >
            Colours Await
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link 
              to="/aquarelles" 
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Aquarelles
            </Link>
            <Link 
              to="/tarifs" 
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Tarifs
            </Link>
            <Link 
              to="/contact" 
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Colours Await
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
