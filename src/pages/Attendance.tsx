import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle, TrendingUp } from "lucide-react";
import { attendanceData } from "@/data/appData";
import { cn } from "@/lib/utils";

export default function Attendance() {
  const overallAttendance = Math.round(
    attendanceData.reduce((sum, item) => sum + item.percentage, 0) / attendanceData.length
  );

  const getStatusIcon = (status: string) => {
    if (status === "good") return <CheckCircle className="w-5 h-5 text-success" />;
    if (status === "warning") return <AlertCircle className="w-5 h-5 text-warning" />;
    return <AlertCircle className="w-5 h-5 text-destructive" />;
  };

  const getStatusColor = (status: string) => {
    if (status === "good") return "border-success/30 bg-success/5";
    if (status === "warning") return "border-warning/30 bg-warning/5";
    return "border-destructive/30 bg-destructive/5";
  };

  const calculateClassesNeeded = (percentage: number, total: number) => {
    if (percentage >= 75) return 0;
    const attended = Math.round((percentage / 100) * total);
    return Math.ceil((0.75 * total - attended) / 0.25);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Attendance Tracker</h2>
        <p className="text-muted-foreground mt-1">Monitor your class attendance</p>
      </div>

      {/* Overall Attendance */}
      <Card className="border-border">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-40 h-40">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-muted"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 70}`}
                  strokeDashoffset={`${2 * Math.PI * 70 * (1 - overallAttendance / 100)}`}
                  className={cn(
                    "transition-all duration-1000",
                    overallAttendance >= 85
                      ? "text-success"
                      : overallAttendance >= 75
                      ? "text-warning"
                      : "text-destructive"
                  )}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-foreground">{overallAttendance}%</span>
                <span className="text-sm text-muted-foreground">Overall</span>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Overall Attendance Status
                </h3>
                <p className="text-muted-foreground">
                  {overallAttendance >= 85
                    ? "Excellent! Keep up the good work."
                    : overallAttendance >= 75
                    ? "You're meeting the minimum requirement. Try to improve!"
                    : "Warning: Your attendance is below 75%. Attend more classes."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-success/10 border border-success/30">
                  <p className="text-2xl font-bold text-success">
                    {attendanceData.filter((s) => s.status === "good").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Subjects above 85%</p>
                </div>
                <div className="p-4 rounded-lg bg-warning/10 border border-warning/30">
                  <p className="text-2xl font-bold text-warning">
                    {attendanceData.filter((s) => s.status === "warning").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Subjects at 75-85%</p>
                </div>
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                  <p className="text-2xl font-bold text-destructive">
                    {attendanceData.filter((s) => s.status === "danger").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Subjects below 75%</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Subject-wise Attendance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {attendanceData.map((subject) => (
          <Card
            key={subject.subject}
            className={cn("border-2", getStatusColor(subject.status))}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg">{subject.subject}</span>
                {getStatusIcon(subject.status)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-foreground">
                  {subject.percentage}%
                </span>
                <span className="text-sm text-muted-foreground">
                  {subject.attended} / {subject.total} classes
                </span>
              </div>

              <Progress
                value={subject.percentage}
                className={cn(
                  "h-3",
                  subject.status === "good"
                    ? "[&>div]:bg-success"
                    : subject.status === "warning"
                    ? "[&>div]:bg-warning"
                    : "[&>div]:bg-destructive"
                )}
              />

              {subject.percentage < 75 && (
                <div className="flex items-start gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/30">
                  <TrendingUp className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">Action Required!</p>
                    <p className="text-muted-foreground mt-1">
                      Attend next{" "}
                      <span className="font-bold text-destructive">
                        {calculateClassesNeeded(subject.percentage, subject.total)}
                      </span>{" "}
                      consecutive classes to reach 75%
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
