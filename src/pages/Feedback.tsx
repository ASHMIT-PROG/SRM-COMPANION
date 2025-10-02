import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";
import { toast } from "sonner";

export default function Feedback() {
  const [formData, setFormData] = useState({
    category: "",
    subject: "",
    feedback: "",
    rating: 0,
    anonymous: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.category || !formData.subject || !formData.feedback) {
      toast.error("Please fill all required fields");
      return;
    }
    toast.success("Feedback submitted successfully!");
    setFormData({
      category: "",
      subject: "",
      feedback: "",
      rating: 0,
      anonymous: false,
    });
  };

  const previousFeedback = [
    {
      id: "1",
      subject: "Mess food quality has improved",
      rating: 4,
      date: "Oct 28",
      status: "Resolved",
    },
    {
      id: "2",
      subject: "Need more books in library",
      rating: 3,
      date: "Oct 27",
      status: "Under Review",
    },
    {
      id: "3",
      subject: "AC not working in Classroom 405",
      rating: 2,
      date: "Oct 26",
      status: "In Progress",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Feedback System</h2>
        <p className="text-muted-foreground mt-1">
          Share your thoughts and help us improve
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feedback Form */}
        <Card className="lg:col-span-2 border-border">
          <CardHeader>
            <CardTitle>Submit Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mess">Mess Food Quality</SelectItem>
                    <SelectItem value="classroom">Classroom Facilities</SelectItem>
                    <SelectItem value="hostel">Hostel Services</SelectItem>
                    <SelectItem value="library">Library Services</SelectItem>
                    <SelectItem value="sports">Sports Facilities</SelectItem>
                    <SelectItem value="transport">Transport Services</SelectItem>
                    <SelectItem value="academic">Academic Support</SelectItem>
                    <SelectItem value="infrastructure">Campus Infrastructure</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject/Title *</Label>
                <Input
                  id="subject"
                  placeholder="Brief title for your feedback"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback">Detailed Feedback *</Label>
                <Textarea
                  id="feedback"
                  placeholder="Share your thoughts in detail..."
                  rows={6}
                  value={formData.feedback}
                  onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Rating</Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= formData.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="anonymous"
                  checked={formData.anonymous}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, anonymous: checked as boolean })
                  }
                />
                <Label htmlFor="anonymous" className="cursor-pointer">
                  Submit anonymously
                </Label>
              </div>

              <Button type="submit" className="w-full">
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Previous Feedback */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Your Previous Feedback</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {previousFeedback.map((feedback) => (
              <div key={feedback.id} className="p-4 rounded-lg border border-border">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold text-sm text-foreground">{feedback.subject}</p>
                  <span
                    className={
                      feedback.status === "Resolved"
                        ? "badge-success"
                        : feedback.status === "In Progress"
                        ? "badge-info"
                        : "badge-warning"
                    }
                  >
                    {feedback.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex gap-1">
                    {[...Array(feedback.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span>{feedback.date}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
