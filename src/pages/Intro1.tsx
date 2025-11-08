import { useNavigate } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

const Intro1 = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-primary flex items-center justify-center cursor-pointer"
      onClick={() => navigate("/intro2")}
    >
      <img src={logoWhite} alt="A.T.O.M Logo" className="w-32 h-32" />
    </div>
  );
};

export default Intro1;
