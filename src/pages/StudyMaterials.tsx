import { useState } from "react";
import { Search, Download, Star, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { studyMaterials } from "@/data/appData";
import { toast } from "sonner";

export default function StudyMaterials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredMaterials = studyMaterials.filter((material) => {
    const matchesSearch =
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment =
      departmentFilter === "all" || material.department === departmentFilter;
    const matchesType = typeFilter === "all" || material.type === typeFilter;
    return matchesSearch && matchesDepartment && matchesType;
  });

  const handleDownload = (title: string) => {
    toast.success(`Downloading: ${title}`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Study Materials</h2>
        <p className="text-muted-foreground mt-1">Access notes, papers, and learning resources</p>
      </div>

      {/* Search and Filters */}
      <Card className="border-border">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search by title, subject, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-11"
              />
            </div>
            <div className="flex gap-2">
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-[150px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="CSE">CSE</SelectItem>
                  <SelectItem value="ECE">ECE</SelectItem>
                  <SelectItem value="Mechanical">Mechanical</SelectItem>
                  <SelectItem value="Civil">Civil</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Notes">Notes</SelectItem>
                  <SelectItem value="Previous Year Papers">Papers</SelectItem>
                  <SelectItem value="Video Lectures">Videos</SelectItem>
                  <SelectItem value="Lab Manual">Lab Manuals</SelectItem>
                  <SelectItem value="E-books">E-books</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material) => (
          <Card key={material.id} className="card-hover border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">
                  {material.type === "Video Lectures" ? "🎥" : "📄"}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-foreground">{material.rating}</span>
                </div>
              </div>

              <h3 className="font-bold text-foreground mb-2 line-clamp-2">{material.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {material.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subject:</span>
                  <span className="font-medium text-foreground">{material.subject}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="badge-info">{material.type}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Size:</span>
                  <span className="font-medium text-foreground">{material.fileSize}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Downloads:</span>
                  <span className="font-medium text-foreground">{material.downloads}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => handleDownload(material.title)}
                  className="flex-1"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                Uploaded by {material.uploadedBy} • {material.uploadDate}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No materials found matching your filters.</p>
        </div>
      )}
    </div>
  );
}
