import { useState, useMemo } from "react";
import { Search, Filter, ExternalLink, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import Seo from "@/components/Seo";

interface ColourData {
  id: string;
  productName: string;
  catalogueCode: string;
  type: "Solid" | "Metallic";
  edgeBandCode: string;
  photoshopCode: string;
  renderUrl: string;
  notes?: string;
}

// Sample dataset - replace with real 78 entries later
const sampleData: ColourData[] = [
  {
    id: "1",
    productName: "Ivory Mist",
    catalogueCode: "ACR-021",
    type: "Solid",
    edgeBandCode: "EB-021-0.8mm",
    photoshopCode: "R245 G240 B230",
    renderUrl: "https://example.com/render-ivory-mist.jpg",
    notes: "Ideal for wardrobes, wall panels, and modern kitchens. Clean, timeless aesthetic.",
  },
  {
    id: "2",
    productName: "Charcoal Slate",
    catalogueCode: "ACR-045",
    type: "Solid",
    edgeBandCode: "EB-045-0.8mm",
    photoshopCode: "R65 G65 B70",
    renderUrl: "https://example.com/render-charcoal.jpg",
    notes: "Perfect for contemporary interiors, feature walls, and minimalist designs.",
  },
  {
    id: "3",
    productName: "Bronze Shimmer",
    catalogueCode: "ACR-M12",
    type: "Metallic",
    edgeBandCode: "EB-M12-0.8mm",
    photoshopCode: "R180 G140 B95",
    renderUrl: "https://example.com/render-bronze.jpg",
    notes: "Luxurious metallic finish for accent panels, retail spaces, and hospitality projects.",
  },
  {
    id: "4",
    productName: "Pearl White",
    catalogueCode: "ACR-001",
    type: "Solid",
    edgeBandCode: "EB-001-0.8mm",
    photoshopCode: "R255 G252 B248",
    renderUrl: "https://example.com/render-pearl.jpg",
    notes: "Classic white finish for versatile applications across residential and commercial spaces.",
  },
  {
    id: "5",
    productName: "Copper Glow",
    catalogueCode: "ACR-M08",
    type: "Metallic",
    edgeBandCode: "EB-M08-0.8mm",
    photoshopCode: "R195 G110 B75",
    renderUrl: "https://example.com/render-copper.jpg",
    notes: "Warm metallic tone ideal for statement walls, furniture accents, and modern interiors.",
  },
  {
    id: "6",
    productName: "Ocean Blue",
    catalogueCode: "ACR-033",
    type: "Solid",
    edgeBandCode: "EB-033-0.8mm",
    photoshopCode: "R45 G95 B140",
    renderUrl: "https://example.com/render-ocean.jpg",
    notes: "Bold choice for contemporary kitchens, wardrobes, and feature applications.",
  },
  {
    id: "7",
    productName: "Silver Mist",
    catalogueCode: "ACR-M04",
    type: "Metallic",
    edgeBandCode: "EB-M04-0.8mm",
    photoshopCode: "R200 G200 B205",
    renderUrl: "https://example.com/render-silver.jpg",
    notes: "Sophisticated metallic finish for high-end residential and commercial applications.",
  },
  {
    id: "8",
    productName: "Sage Green",
    catalogueCode: "ACR-028",
    type: "Solid",
    edgeBandCode: "EB-028-0.8mm",
    photoshopCode: "R165 G185 B160",
    renderUrl: "https://example.com/render-sage.jpg",
    notes: "Natural, calming tone perfect for biophilic design and wellness spaces.",
  },
];

const Acrycore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [selectedColour, setSelectedColour] = useState<ColourData | null>(null);

  const filteredData = useMemo(() => {
    return sampleData.filter((item) => {
      const matchesSearch =
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.catalogueCode.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter =
        filterType === "all" ||
        (filterType === "solid" && item.type === "Solid") ||
        (filterType === "metallic" && item.type === "Metallic");

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterType]);

  return (
    <>
      <Seo
        title="Acrycore™ Digital Library | Metro Surfaces"
        description="Technical references and 3D tools for architects and interior designers. Browse our complete Acrycore™ colour catalogue."
        keywords="acrycore, digital library, architects, interior designers, technical specifications"
      />

      <div className="min-h-screen bg-[#FAF8F4]">
        {/* Header Section */}
        <header className="border-b border-[#4B2E14]/10 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h1 className="font-head text-4xl md:text-5xl lg:text-6xl text-[#4B2E14] mb-4">
              Acrycore™ Digital Library
            </h1>
            <p className="text-lg md:text-xl text-[#4B2E14]/80 mb-3 font-light">
              Technical references and 3D tools for architects and designers.
            </p>
            <p className="text-sm text-[#4B2E14]/60 max-w-2xl">
              Use the product names or numbers from your Acrycore™ folder to locate details below.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Search & Filter Bar */}
          <div className="bg-white rounded-lg shadow-sm border border-[#4B2E14]/10 p-4 md:p-6 mb-8 sticky top-[var(--header-h)] z-10 backdrop-blur-sm bg-white/95">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4B2E14]/40" />
                <Input
                  placeholder="Search by product name or catalogue code..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-[#4B2E14]/20 focus:border-[#4B2E14] focus:ring-[#4B2E14]"
                />
              </div>
              <div className="w-full md:w-48">
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="border-[#4B2E14]/20 focus:border-[#4B2E14] focus:ring-[#4B2E14]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Colours</SelectItem>
                    <SelectItem value="solid">Solid Colours</SelectItem>
                    <SelectItem value="metallic">Metallic Colours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <p className="text-sm text-[#4B2E14]/60 mt-4">
              Showing {filteredData.length} colour{filteredData.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Data Grid - Card Layout for Mobile, Table for Desktop */}
          
          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white rounded-lg shadow-sm border border-[#4B2E14]/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#4B2E14] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium">Product Name</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">Catalogue Code</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">Edge Band</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">Photoshop Code</th>
                    <th className="px-6 py-4 text-left text-sm font-medium">3D Render</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#4B2E14]/10">
                  {filteredData.map((colour) => (
                    <tr
                      key={colour.id}
                      className="hover:bg-[#FAF8F4]/50 transition-colors cursor-pointer"
                      onClick={() => setSelectedColour(colour)}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-[#4B2E14]">
                        {colour.productName}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#4B2E14]/70">
                        {colour.catalogueCode}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            colour.type === "Metallic"
                              ? "bg-[#4B2E14] text-white"
                              : "bg-[#4B2E14]/10 text-[#4B2E14]"
                          }`}
                        >
                          {colour.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#4B2E14]/70">
                        {colour.edgeBandCode}
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-[#4B2E14]/70">
                        {colour.photoshopCode}
                      </td>
                      <td className="px-6 py-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#4B2E14]/20 text-[#4B2E14] hover:bg-[#4B2E14] hover:text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(colour.renderUrl, "_blank");
                          }}
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile/Tablet Card View */}
          <div className="lg:hidden grid gap-4 md:grid-cols-2">
            {filteredData.map((colour) => (
              <div
                key={colour.id}
                className="bg-white rounded-lg shadow-sm border border-[#4B2E14]/10 p-5 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedColour(colour)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-head text-lg text-[#4B2E14] mb-1">
                      {colour.productName}
                    </h3>
                    <p className="text-sm text-[#4B2E14]/60">{colour.catalogueCode}</p>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      colour.type === "Metallic"
                        ? "bg-[#4B2E14] text-white"
                        : "bg-[#4B2E14]/10 text-[#4B2E14]"
                    }`}
                  >
                    {colour.type}
                  </span>
                </div>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-[#4B2E14]/60">Edge Band:</span>
                    <span className="text-[#4B2E14]">{colour.edgeBandCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4B2E14]/60">Photoshop:</span>
                    <span className="font-mono text-[#4B2E14] text-xs">
                      {colour.photoshopCode}
                    </span>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-[#4B2E14] hover:bg-[#4B2E14]/90 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(colour.renderUrl, "_blank");
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View 3D Render
                </Button>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredData.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#4B2E14]/60 text-lg">
                No colours found matching your search criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4 border-[#4B2E14]/20 text-[#4B2E14]"
                onClick={() => {
                  setSearchTerm("");
                  setFilterType("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="border-t border-[#4B2E14]/10 mt-16 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="font-head text-lg text-[#4B2E14] mb-2">
              Acrycore™ – Beautiful Surfaces. Engineered to Last.
            </p>
            <p className="text-sm text-[#4B2E14]/60">
              Digital tool for architects and interior designers.
            </p>
          </div>
        </footer>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedColour} onOpenChange={() => setSelectedColour(null)}>
        <DialogContent className="max-w-2xl bg-white border-[#4B2E14]/20">
          <DialogHeader>
            <DialogTitle className="font-head text-2xl text-[#4B2E14]">
              {selectedColour?.productName}
            </DialogTitle>
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          {selectedColour && (
            <div className="space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[#4B2E14]/60 mb-1">Catalogue Code</p>
                  <p className="text-[#4B2E14] font-medium">{selectedColour.catalogueCode}</p>
                </div>
                <div>
                  <p className="text-sm text-[#4B2E14]/60 mb-1">Type</p>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      selectedColour.type === "Metallic"
                        ? "bg-[#4B2E14] text-white"
                        : "bg-[#4B2E14]/10 text-[#4B2E14]"
                    }`}
                  >
                    {selectedColour.type}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-[#4B2E14]/60 mb-1">Edge Band Code</p>
                  <p className="text-[#4B2E14] font-medium">{selectedColour.edgeBandCode}</p>
                </div>
                <div>
                  <p className="text-sm text-[#4B2E14]/60 mb-1">Photoshop Colour Code</p>
                  <p className="text-[#4B2E14] font-mono text-sm">
                    {selectedColour.photoshopCode}
                  </p>
                </div>
              </div>

              {selectedColour.notes && (
                <div>
                  <p className="text-sm text-[#4B2E14]/60 mb-2">Recommended Applications</p>
                  <p className="text-[#4B2E14] leading-relaxed">{selectedColour.notes}</p>
                </div>
              )}

              <div className="pt-4 border-t border-[#4B2E14]/10">
                <Button
                  className="w-full bg-[#4B2E14] hover:bg-[#4B2E14]/90 text-white"
                  onClick={() => window.open(selectedColour.renderUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open 3D Render in New Tab
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Acrycore;
