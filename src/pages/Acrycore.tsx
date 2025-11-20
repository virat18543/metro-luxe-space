import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchFilter from "@/components/SearchFilter";
import ColorCard from "@/components/ColorCard";
import ColorDetail from "@/components/ColorDetail";
import Footer from "@/components/Footer";
import { colorsData, ColorData } from "@/data/colors";

const Acrycore = () => {  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedColor, setSelectedColor] = useState<ColorData | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const filteredColors = useMemo(() => {
    return colorsData.filter((color) => {
      const matchesSearch =
        color.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        color.catalogueCode.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter =
        filterType === "all" ||
        (filterType === "solid" && color.type === "Solid") ||
        (filterType === "metallic" && color.type === "Metallic");

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterType]);

  const handleViewDetails = (color: ColorData) => {
    setSelectedColor(color);
    setDetailOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filterType={filterType}
        onFilterChange={setFilterType}
        resultCount={filteredColors.length}
      />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredColors.map((color) => (
            <ColorCard
              key={color.id}
              color={color}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {filteredColors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No colours match your search criteria.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </main>

      <ColorDetail
        color={selectedColor}
        open={detailOpen}
        onOpenChange={setDetailOpen}
      />

      <Footer />
    </div>
  );
};

export default Acrycore;
