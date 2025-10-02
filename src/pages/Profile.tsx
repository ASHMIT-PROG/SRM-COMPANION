import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, Building, Calendar, Edit } from "lucide-react";

interface ProfileProps {
  user: any;
}

export default function Profile({ user }: ProfileProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">My Profile</h2>
        <p className="text-muted-foreground mt-1">View and manage your account information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="border-border">
          <CardContent className="p-6 text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-primary text-white flex items-center justify-center text-4xl font-bold mx-auto mb-4 shadow-primary">
              {user.avatar}
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-1">{user.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{user.studentId}</p>
            <Badge className="mb-4">{user.year}</Badge>
            <Button className="w-full" variant="outline">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card className="lg:col-span-2 border-border">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <User className="w-4 h-4" />
                  <span>Full Name</span>
                </div>
                <p className="font-semibold text-foreground">{user.name}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Mail className="w-4 h-4" />
                  <span>Email Address</span>
                </div>
                <p className="font-semibold text-foreground">{user.email}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Phone className="w-4 h-4" />
                  <span>Phone Number</span>
                </div>
                <p className="font-semibold text-foreground">{user.phone || "Not provided"}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Building className="w-4 h-4" />
                  <span>Department</span>
                </div>
                <p className="font-semibold text-foreground">{user.department}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>Academic Year</span>
                </div>
                <p className="font-semibold text-foreground">{user.year}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <User className="w-4 h-4" />
                  <span>Student ID</span>
                </div>
                <p className="font-semibold text-foreground">{user.studentId}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Stats */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Activity Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg bg-primary/10">
              <p className="text-3xl font-bold text-primary">15</p>
              <p className="text-sm text-muted-foreground mt-1">Materials Downloaded</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-secondary/10">
              <p className="text-3xl font-bold text-secondary">8</p>
              <p className="text-sm text-muted-foreground mt-1">Forum Posts</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-success/10">
              <p className="text-3xl font-bold text-success">3</p>
              <p className="text-sm text-muted-foreground mt-1">Clubs Joined</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-accent/10">
              <p className="text-3xl font-bold text-accent">2</p>
              <p className="text-sm text-muted-foreground mt-1">Items Listed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
