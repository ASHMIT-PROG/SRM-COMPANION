import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { timetable } from "@/data/appData";
import { cn } from "@/lib/utils";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const timeSlots = [
  "9:00-10:00",
  "10:00-11:00",
  "11:00-11:30",
  "11:30-12:30",
  "12:30-2:00",
  "2:00-3:00",
  "3:00-4:00",
  "4:00-5:00",
];

const subjectColors = [
  "bg-primary/10 border-primary/30 text-primary",
  "bg-secondary/10 border-secondary/30 text-secondary",
  "bg-success/10 border-success/30 text-success",
  "bg-warning/10 border-warning/30 text-warning",
  "bg-accent/10 border-accent/30 text-accent",
];

export default function Timetable() {
  const getColorForSubject = (subject: string) => {
    const hash = subject.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return subjectColors[hash % subjectColors.length];
  };

  const currentDay = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Weekly Timetable</h2>
        <p className="text-muted-foreground mt-1">
          Your class schedule • Today is {currentDay}
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block overflow-x-auto">
        <Card className="border-border">
          <CardContent className="p-6">
            <div className="grid grid-cols-6 gap-4">
              {/* Time Column */}
              <div className="space-y-3">
                <div className="h-12 flex items-center justify-center font-semibold text-foreground">
                  Time
                </div>
                {timeSlots.map((time) => (
                  <div
                    key={time}
                    className="h-24 flex items-center justify-center text-sm font-medium text-muted-foreground border border-border rounded-lg bg-muted/30"
                  >
                    {time === "11:00-11:30" ? "Break" : time === "12:30-2:00" ? "Lunch" : time}
                  </div>
                ))}
              </div>

              {/* Day Columns */}
              {days.map((day) => (
                <div key={day} className="space-y-3">
                  <div
                    className={cn(
                      "h-12 flex items-center justify-center font-semibold rounded-lg",
                      currentDay === day
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    )}
                  >
                    {day}
                  </div>
                  {timeSlots.map((slot) => {
                    const classInfo = timetable[day as keyof typeof timetable]?.find(
                      (c) => c.time === slot
                    );
                    
                    if (slot === "11:00-11:30" || slot === "12:30-2:00") {
                      return (
                        <div
                          key={slot}
                          className="h-24 flex items-center justify-center border border-dashed border-border rounded-lg bg-muted/20"
                        />
                      );
                    }

                    return (
                      <div key={slot} className="h-24">
                        {classInfo ? (
                          <div
                            className={cn(
                              "h-full p-3 rounded-lg border-2 flex flex-col justify-between transition-all hover:shadow-md",
                              getColorForSubject(classInfo.subject)
                            )}
                          >
                            <div>
                              <p className="font-bold text-sm leading-tight">
                                {classInfo.subject}
                              </p>
                              <p className="text-xs opacity-80 mt-1">{classInfo.code}</p>
                            </div>
                            <div className="text-xs opacity-90">
                              <p className="font-medium">{classInfo.instructor}</p>
                              <p>{classInfo.room}</p>
                            </div>
                          </div>
                        ) : (
                          <div className="h-full border border-dashed border-border rounded-lg bg-muted/10" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden space-y-4">
        {days.map((day) => (
          <Card key={day} className={cn("border-border", currentDay === day && "border-primary")}>
            <CardHeader>
              <CardTitle className={cn(currentDay === day && "text-primary")}>
                {day} {currentDay === day && "• Today"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {timetable[day as keyof typeof timetable]?.map((classInfo, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-4 rounded-lg border-2",
                    getColorForSubject(classInfo.subject)
                  )}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold">{classInfo.subject}</p>
                      <p className="text-sm opacity-80">{classInfo.code}</p>
                    </div>
                    <span className="text-sm font-semibold">{classInfo.time}</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">{classInfo.instructor}</p>
                    <p className="opacity-80">
                      {classInfo.room} • {classInfo.type}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
