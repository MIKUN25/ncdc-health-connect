import { useNavigate } from "react-router-dom";
import logoBlue from "@/assets/logo-blue.png";

const Intro2 = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-background flex flex-col items-center justify-center cursor-pointer"
      onClick={() => navigate("/auth")}
    >
      <img src={logoBlue} alt="A.T.O.M Logo" className="w-24 h-24 mb-6" />
      <h1 className="text-5xl font-bold text-primary tracking-wider">A.T.O.M</h1>
    </div>
  );
};

export default Intro2;
