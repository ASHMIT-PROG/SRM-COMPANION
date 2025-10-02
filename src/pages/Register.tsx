import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface RegisterProps {
  onRegister: (user: any) => void;
}

export default function Register({ onRegister }: RegisterProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!formData.email.endsWith("@srmist.edu.in")) {
      toast.error("Please use your SRM email address");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const newUser = {
        id: Date.now().toString(),
        email: formData.email,
        name: formData.name,
        studentId: formData.studentId,
        department: formData.department,
        year: formData.year,
        phone: formData.phone,
        avatar: formData.name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase(),
      };

      onRegister(newUser);
      toast.success("Registration successful! Welcome to SRM Companion.");
      navigate("/dashboard");
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-2xl space-y-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Create Account</h2>
            <p className="mt-2 text-muted-foreground">Join SRM Companion today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID *</Label>
                <Input
                  id="studentId"
                  placeholder="RA2111003010001"
                  value={formData.studentId}
                  onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="yourname@srmist.edu.in"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department *</Label>
                <Select value={formData.department} onValueChange={(value) => setFormData({ ...formData, department: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CSE">Computer Science & Engineering</SelectItem>
                    <SelectItem value="ECE">Electronics & Communication</SelectItem>
                    <SelectItem value="Mechanical">Mechanical Engineering</SelectItem>
                    <SelectItem value="Civil">Civil Engineering</SelectItem>
                    <SelectItem value="IT">Information Technology</SelectItem>
                    <SelectItem value="EEE">Electrical & Electronics</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Year *</Label>
                <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st Year">1st Year</SelectItem>
                    <SelectItem value="2nd Year">2nd Year</SelectItem>
                    <SelectItem value="3rd Year">3rd Year</SelectItem>
                    <SelectItem value="4th Year">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, agreeTerms: checked as boolean })
                }
              />
              <Label htmlFor="terms" className="text-sm font-normal cursor-pointer leading-relaxed">
                I agree to the Terms & Conditions and Privacy Policy
              </Label>
            </div>

            <Button type="submit" className="w-full h-11" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Gradient Background */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero items-center justify-center p-12">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center text-white font-bold text-3xl mb-6 mx-auto shadow-xl">
            S
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Join SRM Companion</h1>
          <p className="text-xl text-white/90 mb-8">
            Start your journey to academic success and vibrant campus life
          </p>
        </div>
      </div>
    </div>
  );
}
