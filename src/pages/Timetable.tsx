import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { timetable } from "@/data/appData";
import { cn } from "@/lib/utils";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const timeSlots = [
  "8:00-8:50",
  "8:50-9:40",
  "9:00-10:00",
  "9:45-10:35",
  "10:00-11:00",
  "10:40-11:30",
  "11:00-11:30",
  "11:30-12:30",
  "11:35-12:25",
  "12:30-1:20",
  "12:30-2:00",
  "1:25-2:15",
  "2:00-3:00",
  "2:20-3:10",
  "3:00-4:00",
  "3:10-4:00",
  "4:00-4:50",
  "4:00-5:00",
];

// Convert hex to HSL for better theming
const getSubjectColor = (subject: string) => {
  const colors = [
    "hsl(210 70% 85%)", // Light blue
    "hsl(30 100% 90%)", // Light orange
    "hsl(120 60% 85%)", // Light green
    "hsl(280 60% 85%)", // Light purple
    "hsl(210 100% 70%)", // Medium blue
    "hsl(210 100% 40%)", // Dark blue
  ];
  const hash = subject.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

export default function Timetable() {
  // For demo purposes, always show Thursday as current day
  const currentDay = "Thursday";

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
                    className="h-20 flex items-center justify-center text-xs font-medium text-muted-foreground border border-border rounded-lg bg-muted/30"
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
                    
                    // Break slots
                    if (slot === "11:00-11:30" || slot === "12:30-2:00") {
                      return (
                        <div
                          key={slot}
                          className="h-20 flex items-center justify-center border border-dashed border-border rounded-lg bg-muted/20 text-sm text-muted-foreground font-medium"
                        >
                          {slot === "11:00-11:30" ? "Break" : "Lunch"}
                        </div>
                      );
                    }

                    return (
                      <div key={slot} className="h-20">
                        {classInfo ? (
                          <div
                            className="h-full p-2 rounded-lg border flex flex-col justify-between transition-all hover:shadow-md"
                            style={{ 
                              backgroundColor: getSubjectColor(classInfo.subject),
                              borderColor: getSubjectColor(classInfo.subject)
                            }}
                          >
                            <div>
                              <p className="font-bold text-xs leading-tight text-foreground">
                                {classInfo.subject}
                              </p>
                              <p className="text-[10px] opacity-70 mt-0.5 text-foreground">{classInfo.code}</p>
                            </div>
                            <div className="text-[10px] opacity-80 text-foreground">
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
                  className="p-4 rounded-lg border-2"
                  style={{ 
                    backgroundColor: getSubjectColor(classInfo.subject),
                    borderColor: getSubjectColor(classInfo.subject)
                  }}
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
