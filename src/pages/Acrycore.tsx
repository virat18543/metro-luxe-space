import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { sampleColors, ColorData } from "@/data/sampleColors";
import { ColorCard } from "@/components/ColorCard";
import { ColorModal } from "@/components/ColorModal";
const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<ColorData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const filteredColors = useMemo(() => {
    return sampleColors.filter(color => {
      const matchesSearch = color.productName.toLowerCase().includes(searchQuery.toLowerCase()) || color.catalogueCode.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filterType === "all" || filterType === "solid" && color.type === "Solid" || filterType === "metallic" && color.type === "Metallic";
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filterType]);
  const handleViewDetails = (color: ColorData) => {
    setSelectedColor(color);
    setModalOpen(true);
  };
  return <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary tracking-tight whitespace-nowrap">              Acrycore™ Digital Library
            </h1>
        <p className="text-sm md:text-lg text-muted-foreground font-medium">              Technical references and 3D tools for architects and designers
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto pt-2">
              Use the product names or numbers from your Acrycore™ folder to locate details below
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
        {/* Product Overview Section */}
        <section className="max-w-6xl mx-auto mb-12 mt-8 order-2 md:order-1">
          <h2 className="text-2xl font-heading font-semibold text-primary mb-6 text-center">
            Why Acrycore™
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Engineered as a true performance surface – not a PVC compromise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Feature Cards */}
            <div className="bg-card/70 border border-border rounded-xl p-5 space-y-3 hover:border-primary/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7" />
                  <path d="M15 7h6v6" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground">Premium Korean Material</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Consistent quality and long-term performance.</p>
            </div>

            <div className="bg-card/70 border border-border rounded-xl p-5 space-y-3 hover:border-primary/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground">Unmatched Technology</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Superior Quality vs. typical PVC panels.</p>
            </div>

            <div className="bg-card/70 border border-border rounded-xl p-5 space-y-3 hover:border-primary/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground">Balanced Structure</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Easier to fabricate, align, and maintain.</p>
            </div>

            <div className="bg-card/70 border border-border rounded-xl p-5 space-y-3 hover:border-primary/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 2v20" />
                  <path d="M2 12h20" />
                  <path d="m19 19-4-4" />
                  <path d="m5 5 4 4" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-foreground">Curated Palette</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Calm, modern finishes for design professionals.</p>
            </div>
          </div>

          {/* Matching Systems Banner */}
          <div className="bg-card/70 border border-border rounded-xl p-6 flex items-center gap-6">
            <div className="hidden md:flex w-12 h-12 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" y1="22" x2="12" y2="12" />
              </svg>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Matching Systems</p>
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-medium">Coordinated louvers & rafters</span> available in matching colour families. 
                Every catalogue shade includes edge band codes, Photoshop RGB values, and 3D renders.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4 order-1 md:order-2">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input type="text" placeholder="Search by product name or catalogue code..." className="pl-10 bg-card border-border" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-[200px] bg-card border-border">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="all">All Colours</SelectItem>
                <SelectItem value="solid">Solid Colours</SelectItem>
                <SelectItem value="metallic">Metallic Colours</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between text-sm">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredColors.length}</span>{" "}
              {filteredColors.length === 1 ? "colour" : "colours"}
            </p>
          </div>
        </div>

        {/* Color Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12 order-3 md:order-3">          {filteredColors.map(color => <ColorCard key={color.id} color={color} onViewDetails={() => handleViewDetails(color)} />)}
        </div>

        {filteredColors.length === 0 && <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No colours found matching your search criteria
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Try adjusting your search or filter settings
            </p>
          </div>}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-2">
            <p className="text-base font-heading font-semibold text-foreground">
              Acrycore™ – Beautiful Surfaces. Engineered to Last.
            </p>
            <p className="text-sm text-muted-foreground">
              Digital tool for architects and interior designers
            </p>
          </div>
        </div>
      </footer>

      {/* Detail Modal */}
      <ColorModal color={selectedColor} open={modalOpen} onOpenChange={setModalOpen} />
    </div>;
};
export default Index;
