import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { demoAccounts } from "@/data/appData";

interface LoginProps {
  onLogin: (user: any) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const user = demoAccounts.find(
        (acc) => acc.email === formData.email && acc.password === formData.password
      );

      if (user) {
        onLogin(user);
        toast.success("Login successful! Welcome back.");
        navigate("/dashboard");
      } else {
        toast.error("Invalid email or password");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Gradient Background */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center text-white font-bold text-3xl mb-6 mx-auto shadow-xl">
            S
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">SRM Companion</h1>
          <p className="text-xl text-white/90 mb-8">
            Your all-in-one platform for academic excellence and campus life
          </p>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✓</div>
              <span>Access study materials anytime</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✓</div>
              <span>Track attendance & timetable</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✓</div>
              <span>Connect with clubs & peers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Welcome Back</h2>
            <p className="mt-2 text-muted-foreground">Sign in to your account</p>
          </div>

          {/* Demo Credentials Card */}
          <div className="bg-muted/50 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm font-semibold text-foreground">Demo Accounts:</p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>📧 student@srmist.edu.in • 🔑 password123</p>
              <p>📧 senior@srmist.edu.in • 🔑 password123</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="student@srmist.edu.in"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="h-11"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={formData.remember}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, remember: checked as boolean })
                  }
                />
                <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                  Remember me
                </Label>
              </div>
              <button type="button" className="text-sm text-primary hover:underline">
                Forgot password?
              </button>
            </div>

            <Button type="submit" className="w-full h-11" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary font-semibold hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
