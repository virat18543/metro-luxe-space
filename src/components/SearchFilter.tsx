import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterType: string;
  onFilterChange: (value: string) => void;
  resultCount: number;
}

const SearchFilter = ({
  searchTerm,
  onSearchChange,
  filterType,
  onFilterChange,
  resultCount,
}: SearchFilterProps) => {
  return (
    <div className="sticky top-0 z-10 bg-background border-b border-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search by product name or catalogue code..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-card"
            />
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Select value={filterType} onValueChange={onFilterChange}>
              <SelectTrigger className="w-full md:w-[180px] bg-card">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent className="bg-popover">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="solid">Solid Colours</SelectItem>
                <SelectItem value="metallic">Metallic Colours</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              Showing {resultCount} {resultCount === 1 ? 'colour' : 'colours'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
