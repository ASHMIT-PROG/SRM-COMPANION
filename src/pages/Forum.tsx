import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Eye, ThumbsUp } from "lucide-react";
import { forumPosts } from "@/data/appData";
import { toast } from "sonner";

export default function Forum() {
  const handleReply = (postTitle: string) => {
    toast.success(`Opening reply form for: ${postTitle}`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Peer Help Forum</h2>
          <p className="text-muted-foreground mt-1">
            Ask questions and help fellow students
          </p>
        </div>
        <Button>
          <MessageCircle className="w-4 h-4 mr-2" />
          New Question
        </Button>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {["All", "Study Help", "Career Guidance", "Technical Help", "Campus Life"].map(
          (category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className="cursor-pointer"
            >
              {category}
            </Badge>
          )
        )}
      </div>

      {/* Forum Posts */}
      <div className="space-y-4">
        {forumPosts.map((post) => (
          <Card key={post.id} className="card-hover border-border">
            <CardContent className="p-6">
              <div className="flex gap-4">
                {/* User Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {post.author.charAt(0).toUpperCase()}
                  </div>
                </div>

                {/* Post Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">{post.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="font-medium">@{post.author}</span>
                        <span>•</span>
                        <span>{post.authorYear}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                      </div>
                    </div>
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">{post.preview}</p>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.replies} replies</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Eye className="w-4 h-4" />
                      <span>{post.views} views</span>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleReply(post.title)}
                      className="ml-auto"
                    >
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
