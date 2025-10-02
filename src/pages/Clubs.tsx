import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Heart } from "lucide-react";
import { clubs } from "@/data/appData";
import { toast } from "sonner";

export default function Clubs() {
  const [followedClubs, setFollowedClubs] = useState<string[]>([]);

  const toggleFollow = (clubId: string, clubName: string) => {
    if (followedClubs.includes(clubId)) {
      setFollowedClubs(followedClubs.filter((id) => id !== clubId));
      toast.success(`Unfollowed ${clubName}`);
    } else {
      setFollowedClubs([...followedClubs, clubId]);
      toast.success(`Following ${clubName}`);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Clubs & Societies</h2>
        <p className="text-muted-foreground mt-1">
          Explore and join campus clubs and activities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <Card key={club.id} className="card-hover border-border">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-4xl shadow-primary">
                  {club.icon}
                </div>
                <Button
                  size="sm"
                  variant={followedClubs.includes(club.id) ? "default" : "outline"}
                  onClick={() => toggleFollow(club.id, club.name)}
                >
                  <Heart
                    className={`w-4 h-4 mr-2 ${
                      followedClubs.includes(club.id) ? "fill-current" : ""
                    }`}
                  />
                  {followedClubs.includes(club.id) ? "Following" : "Follow"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">{club.name}</h3>
                <p className="text-sm text-muted-foreground">{club.description}</p>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {club.members} members
                </span>
                <Badge variant="secondary" className="ml-auto">
                  {club.category}
                </Badge>
              </div>

              {club.updates.length > 0 && (
                <div className="pt-4 border-t border-border space-y-2">
                  <p className="text-xs font-semibold text-foreground uppercase">
                    Recent Updates
                  </p>
                  {club.updates.slice(0, 2).map((update) => (
                    <div key={update.id} className="p-3 rounded-lg bg-muted/50">
                      <p className="text-sm font-medium text-foreground">{update.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{update.date}</p>
                    </div>
                  ))}
                </div>
              )}

              {club.updates.length === 0 && (
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center py-2">
                    No recent updates
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
