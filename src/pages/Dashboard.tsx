import { Link } from "react-router-dom";
import {
  BookOpen,
  Calendar,
  CheckSquare,
  AlertCircle,
  TrendingUp,
  Users,
  Bell,
  Bus,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { attendanceData, notifications, timetable, studyMaterials } from "@/data/appData";

export default function Dashboard() {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  // For demo purposes, always show Thursday's schedule
  const todayClasses = timetable["Thursday"] || [];
  const overallAttendance = Math.round(
    attendanceData.reduce((sum, item) => sum + item.percentage, 0) / attendanceData.length
  );

  const stats = [
    {
      title: "Study Materials",
      value: studyMaterials.length,
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10",
      link: "/materials",
    },
    {
      title: "Today's Classes",
      value: todayClasses.length,
      icon: Calendar,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      link: "/timetable",
    },
    {
      title: "Overall Attendance",
      value: `${overallAttendance}%`,
      icon: CheckSquare,
      color: overallAttendance >= 75 ? "text-success" : "text-warning",
      bgColor: overallAttendance >= 75 ? "bg-success/10" : "bg-warning/10",
      link: "/attendance",
    },
    {
      title: "Active Clubs",
      value: "8",
      icon: Users,
      color: "text-accent",
      bgColor: "bg-accent/10",
      link: "/clubs",
    },
  ];

  const lowAttendanceSubjects = attendanceData.filter((item) => item.percentage < 75);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Dashboard</h2>
        <p className="text-muted-foreground mt-1">
          {new Date().toLocaleDateString("en-US", { 
            weekday: "long", 
            year: "numeric", 
            month: "long", 
            day: "numeric" 
          })}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link key={stat.title} to={stat.link}>
            <Card className="card-hover cursor-pointer border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                  </div>
                  <div className={`w-14 h-14 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            {todayClasses.length > 0 ? (
              <div className="space-y-3">
                {todayClasses.map((cls, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border"
                  >
                    <div className="text-center min-w-[80px]">
                      <p className="text-sm font-semibold text-primary">{cls.time}</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{cls.subject}</p>
                      <p className="text-sm text-muted-foreground">
                        {cls.instructor} • {cls.room}
                      </p>
                    </div>
                    <span className="badge-info">{cls.type}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-8">No classes scheduled for today</p>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions & Alerts */}
        <div className="space-y-6">
          {/* Attendance Alerts */}
          {lowAttendanceSubjects.length > 0 && (
            <Card className="border-warning">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-warning">
                  <AlertCircle className="w-5 h-5" />
                  Attendance Alert
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {lowAttendanceSubjects.map((subject) => (
                  <div key={subject.subject} className="p-3 rounded-lg bg-warning/10 border border-warning/30">
                    <p className="font-semibold text-sm text-foreground">{subject.subject}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Current: {subject.percentage}% • Need: {Math.ceil((0.75 * subject.total - subject.attended) / 0.25)} more classes
                    </p>
                    <Progress value={subject.percentage} className="mt-2 h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Recent Notifications */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Recent Updates
                </span>
                <Link to="/notifications" className="text-sm text-primary hover:underline">
                  View All
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {notifications.slice(0, 4).map((notification) => (
                <div
                  key={notification.id}
                  className="p-3 rounded-lg bg-muted/30 border border-border text-sm"
                >
                  <p className="font-medium text-foreground">{notification.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Links */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Quick Access</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/materials"
              className="p-4 rounded-lg border border-border hover:shadow-md transition-all text-center"
            >
              <BookOpen className="w-8 h-8 mx-auto text-primary mb-2" />
              <p className="text-sm font-medium text-foreground">Study Materials</p>
            </Link>
            <Link
              to="/forum"
              className="p-4 rounded-lg border border-border hover:shadow-md transition-all text-center"
            >
              <Users className="w-8 h-8 mx-auto text-secondary mb-2" />
              <p className="text-sm font-medium text-foreground">Peer Help</p>
            </Link>
            <Link
              to="/transport"
              className="p-4 rounded-lg border border-border hover:shadow-md transition-all text-center"
            >
              <Bus className="w-8 h-8 mx-auto text-success mb-2" />
              <p className="text-sm font-medium text-foreground">Transport</p>
            </Link>
            <Link
              to="/placements"
              className="p-4 rounded-lg border border-border hover:shadow-md transition-all text-center"
            >
              <TrendingUp className="w-8 h-8 mx-auto text-accent mb-2" />
              <p className="text-sm font-medium text-foreground">Placements</p>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
