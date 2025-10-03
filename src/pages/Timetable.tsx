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
                            className="h-full p-3 rounded-lg border flex items-center justify-center transition-all hover:shadow-md"
                            style={{ 
                              backgroundColor: classInfo.color,
                              borderColor: classInfo.color
                            }}
                          >
                            <p className="font-bold text-sm text-center leading-tight text-foreground">
                              {classInfo.subject}
                            </p>
                          </div>
                        ) : (
                          <div className="h-full border border-dashed border-border rounded-lg bg-muted/10 flex items-center justify-center">
                            <span className="text-muted-foreground text-lg">-</span>
                          </div>
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
                    backgroundColor: classInfo.color,
                    borderColor: classInfo.color
                  }}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-base">{classInfo.subject}</p>
                    <span className="text-sm font-semibold">{classInfo.time}</span>
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
