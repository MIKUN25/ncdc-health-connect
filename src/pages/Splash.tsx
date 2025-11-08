import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoSplash from "@/assets/logo-splash.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-brand-splash flex flex-col items-center justify-center">
      <div className="animate-in fade-in zoom-in duration-500">
        <img src={logoSplash} alt="A.T.O.M Logo" className="w-32 h-32 mb-8" />
        <h1 className="text-5xl font-bold text-primary tracking-wider">A.T.O.M</h1>
      </div>
    </div>
  );
};

export default Splash;
