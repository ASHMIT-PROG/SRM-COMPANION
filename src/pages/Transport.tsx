import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bus, Clock, MapPin } from "lucide-react";
import { transportRoutes } from "@/data/appData";

export default function Transport() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Transport Information</h2>
        <p className="text-muted-foreground mt-1">Campus shuttle schedules and routes</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {transportRoutes.map((route) => (
          <Card key={route.route} className="border-border card-hover">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bus className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">{route.route}</p>
                    <p className="text-sm font-normal text-muted-foreground">{route.name}</p>
                  </div>
                </CardTitle>
                {route.status === "running" ? (
                  <Badge className="bg-success text-success-foreground">
                    Running • Next in {route.nextIn}
                  </Badge>
                ) : (
                  <Badge variant="secondary">Weekend Only</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">First Bus</p>
                    <p className="font-semibold text-foreground">{route.firstBus}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Last Bus</p>
                    <p className="font-semibold text-foreground">{route.lastBus}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Frequency</p>
                    <p className="font-semibold text-foreground">{route.frequency}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-primary/30 bg-primary/5">
        <CardContent className="p-6">
          <h3 className="font-bold text-foreground mb-2">📍 Live Tracking</h3>
          <p className="text-sm text-muted-foreground">
            Real-time bus tracking feature coming soon! You'll be able to see exact bus locations
            and estimated arrival times.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
