import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Star, MessageCircle } from "lucide-react";
import { marketplaceItems } from "@/data/appData";
import { toast } from "sonner";

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = marketplaceItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContact = (seller: string, item: string) => {
    toast.success(`Opening chat with ${seller} about ${item}`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Student Marketplace</h2>
        <p className="text-muted-foreground mt-1">
          Buy and sell items within campus community
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-2xl">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <Input
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-11"
        />
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="card-hover border-border">
            <CardContent className="p-6">
              <div className="w-full h-40 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl mb-4">
                {item.image}
              </div>

              <h3 className="font-bold text-foreground mb-2 line-clamp-2">{item.title}</h3>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                {item.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{item.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary">{item.condition}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-foreground">
                    {item.sellerRating}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-medium text-foreground">{item.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Seller:</span>
                  <span className="font-medium text-foreground">{item.seller}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Posted:</span>
                  <span className="font-medium text-foreground">{item.postedDate}</span>
                </div>
              </div>

              <Button
                onClick={() => handleContact(item.seller, item.title)}
                className="w-full"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact Seller
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
