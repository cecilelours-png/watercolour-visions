import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <p className="text-8xl font-['Playfair_Display'] font-semibold text-primary/20 mb-4">404</p>
        <h1 className="text-2xl font-['Playfair_Display'] font-medium text-foreground mb-3">Page not found</h1>
        <p className="text-base font-['DM_Sans'] text-muted-foreground mb-8">mais pas d'angoisse de la page blanche...</p>
        <a href="/" className="font-['DM_Sans'] text-sm text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">
          Retour aux couleurs
        </a>
      </div>
    </div>
  );
};

export default NotFound;
