import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, TrendingUp, Award, BookOpen } from "lucide-react";
import { placementDrives } from "@/data/appData";
import { toast } from "sonner";

export default function Placements() {
  const handleRegister = (company: string) => {
    toast.success(`Registration for ${company} initiated!`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Placement & Internships</h2>
        <p className="text-muted-foreground mt-1">Career opportunities and placement updates</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-border">
          <CardContent className="p-6 text-center">
            <Award className="w-10 h-10 text-primary mx-auto mb-2" />
            <p className="text-3xl font-bold text-foreground">450</p>
            <p className="text-sm text-muted-foreground">Students Placed</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-10 h-10 text-success mx-auto mb-2" />
            <p className="text-3xl font-bold text-foreground">42 LPA</p>
            <p className="text-sm text-muted-foreground">Highest Package</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-6 text-center">
            <Briefcase className="w-10 h-10 text-secondary mx-auto mb-2" />
            <p className="text-3xl font-bold text-foreground">5.2 LPA</p>
            <p className="text-sm text-muted-foreground">Average Package</p>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="p-6 text-center">
            <BookOpen className="w-10 h-10 text-accent mx-auto mb-2" />
            <p className="text-3xl font-bold text-foreground">85+</p>
            <p className="text-sm text-muted-foreground">Companies</p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Drives */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Upcoming Placement Drives</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {placementDrives.map((drive) => (
              <div
                key={drive.id}
                className="p-6 rounded-lg border border-border bg-muted/30 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-primary flex-shrink-0">
                  {drive.company.charAt(0)}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{drive.company}</h3>
                      <p className="text-sm text-muted-foreground">{drive.role}</p>
                    </div>
                    <Badge
                      className={
                        drive.status === "Closing Soon"
                          ? "bg-warning text-warning-foreground"
                          : "bg-success text-success-foreground"
                      }
                    >
                      {drive.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Package: </span>
                      <span className="font-semibold text-foreground">{drive.ctc}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Eligibility: </span>
                      <span className="font-semibold text-foreground">{drive.eligibility}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Deadline: </span>
                      <span className="font-semibold text-foreground">{drive.deadline}</span>
                    </div>
                  </div>
                </div>

                <Button onClick={() => handleRegister(drive.company)} className="md:w-auto">
                  Register Now
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Training Resources */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Training Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-border hover:shadow-md transition-all cursor-pointer">
              <h4 className="font-semibold text-foreground mb-2">
                📝 Aptitude Test Preparation
              </h4>
              <p className="text-sm text-muted-foreground">
                Practice questions and mock tests
              </p>
            </div>
            <div className="p-4 rounded-lg border border-border hover:shadow-md transition-all cursor-pointer">
              <h4 className="font-semibold text-foreground mb-2">💼 Interview Question Bank</h4>
              <p className="text-sm text-muted-foreground">Technical and HR questions</p>
            </div>
            <div className="p-4 rounded-lg border border-border hover:shadow-md transition-all cursor-pointer">
              <h4 className="font-semibold text-foreground mb-2">📄 Resume Building Workshop</h4>
              <p className="text-sm text-muted-foreground">Create ATS-friendly resumes</p>
            </div>
            <div className="p-4 rounded-lg border border-border hover:shadow-md transition-all cursor-pointer">
              <h4 className="font-semibold text-foreground mb-2">💻 Coding Practice</h4>
              <p className="text-sm text-muted-foreground">DSA problems and solutions</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
