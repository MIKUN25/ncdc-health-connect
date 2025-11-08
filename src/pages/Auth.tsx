import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import logoBlue from "@/assets/logo-blue.png";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin) {
      if (!formData.fullName) {
        toast.error("Please enter your full name");
        return;
      }
      // Save the user's name to localStorage
      localStorage.setItem("userName", formData.fullName);
      toast.success("Account created successfully!");
      navigate("/dashboard");
    } else {
      if (!formData.email || !formData.password) {
        toast.error("Please fill all fields");
        return;
      }
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start pt-16 px-6">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <img src={logoBlue} alt="A.T.O.M Logo" className="w-16 h-16" />
        </div>

        <h1 className="text-2xl font-semibold text-center mb-8">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm text-muted-foreground">
              Full Name
            </Label>
            <Input
              id="fullName"
              placeholder="Name Input"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm text-muted-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm text-muted-foreground">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Password Input"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm text-muted-foreground">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Password Input"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country" className="text-sm text-muted-foreground">
              Country
            </Label>
            <Select onValueChange={(value) => setFormData({ ...formData, country: value })}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Your Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nigeria">Nigeria</SelectItem>
                <SelectItem value="ghana">Ghana</SelectItem>
                <SelectItem value="kenya">Kenya</SelectItem>
                <SelectItem value="south-africa">South Africa</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-center text-sm pt-2">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className="text-primary font-medium hover:underline"
            >
              Sign In
            </button>
          </div>

          <Button type="submit" className="w-full h-12 mt-6">
            Create an account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
