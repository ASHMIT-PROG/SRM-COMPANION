import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { importantLinks } from "@/data/appData";

export default function ImportantLinks() {
  const categories = ["Academic", "Tools"];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Important Links</h2>
        <p className="text-muted-foreground mt-1">Quick access to essential resources</p>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-xl font-bold text-foreground mb-4">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantLinks
              .filter((link) => link.category === category)
              .map((link) => (
                <Card key={link.id} className="card-hover border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground mb-1">{link.title}</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          {link.description}
                        </p>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
