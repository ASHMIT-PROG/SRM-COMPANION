import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { lostFoundItems } from "@/data/appData";
import { MapPin, Calendar, User, Phone } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function LostFound() {
  const [newItem, setNewItem] = useState({
    title: "",
    category: "",
    location: "",
    date: "",
    contact: "",
  });

  const handleSubmit = (type: "lost" | "found") => {
    if (!newItem.title || !newItem.category || !newItem.location) {
      toast.error("Please fill all required fields");
      return;
    }
    toast.success(`${type === "lost" ? "Lost" : "Found"} item posted successfully!`);
    setNewItem({ title: "", category: "", location: "", date: "", contact: "" });
  };

  const ItemCard = ({ item }: { item: any }) => (
    <Card className="card-hover border-border">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">
            {item.category === "Electronics" ? "📱" : 
             item.category === "Books" ? "📚" : 
             item.category === "ID Cards" ? "🪪" : "🎒"}
          </div>
          <span
            className={item.status === "Active" ? "badge-success" : "badge-info"}
          >
            {item.status}
          </span>
        </div>

        <h3 className="font-bold text-foreground mb-2">{item.title}</h3>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{item.location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <User className="w-4 h-4" />
            <span>Posted by {item.postedBy}</span>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full mt-4" variant="outline">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact Information</DialogTitle>
              <DialogDescription>
                Get in touch with the person who posted this item.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Posted By</Label>
                <p className="text-foreground font-medium mt-1">{item.postedBy}</p>
              </div>
              <div>
                <Label>Contact Number</Label>
                <p className="text-foreground font-medium mt-1">{item.contact}</p>
              </div>
              <div>
                <Label>Item</Label>
                <p className="text-foreground font-medium mt-1">{item.title}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Lost & Found</h2>
        <p className="text-muted-foreground mt-1">Help recover lost items on campus</p>
      </div>

      <Tabs defaultValue="lost" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="lost">Lost Items</TabsTrigger>
          <TabsTrigger value="found">Found Items</TabsTrigger>
          <TabsTrigger value="post">Post Item</TabsTrigger>
        </TabsList>

        <TabsContent value="lost" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lostFoundItems.lost.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="found" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lostFoundItems.found.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="post" className="mt-6">
          <Card className="max-w-2xl mx-auto border-border">
            <CardHeader>
              <CardTitle>Post a Lost or Found Item</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Item Name/Description *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Blue JBL Headphones"
                    value={newItem.title}
                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={newItem.category}
                    onValueChange={(value) => setNewItem({ ...newItem, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Electronics">Electronics</SelectItem>
                      <SelectItem value="Books">Books</SelectItem>
                      <SelectItem value="ID Cards">ID Cards</SelectItem>
                      <SelectItem value="Clothing">Clothing</SelectItem>
                      <SelectItem value="Accessories">Accessories</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    placeholder="Where was it lost/found?"
                    value={newItem.location}
                    onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newItem.date}
                    onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Number *</Label>
                  <Input
                    id="contact"
                    placeholder="+91 98765 43210"
                    value={newItem.contact}
                    onChange={(e) => setNewItem({ ...newItem, contact: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => handleSubmit("lost")}
                  className="flex-1"
                  variant="destructive"
                >
                  Post as Lost Item
                </Button>
                <Button onClick={() => handleSubmit("found")} className="flex-1">
                  Post as Found Item
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
