import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-2 text-4xl font-bold">Page not found</h1>
        <p className="mb-6 text-xl text-muted-foreground">mais pas d'angoisse de la page blanche</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Retour aux couleurs
        </a>
      </div>
    </div>
  );
};

export default NotFound;
