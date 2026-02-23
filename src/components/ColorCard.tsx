import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ColorData } from "@/data/sampleColors";

interface ColorCardProps {
  color: ColorData;
  onViewDetails: () => void;
}

export const ColorCard = ({ color, onViewDetails }: ColorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border bg-card">
      <CardHeader className="pb-3 space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-heading font-semibold text-lg text-foreground">
              {color.productName}
            </h3>
            <p className="text-sm text-muted-foreground font-medium mt-1">
              {color.catalogueCode}
            </p>
          </div>
          <Badge 
            variant={color.type === "Metallic" ? "default" : "secondary"}
            className="text-xs"
          >
            {color.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 pb-4">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between py-1 border-b border-border/50">
            <span className="text-muted-foreground">Edge Band</span>
            <span className="font-medium text-foreground">{color.edgeBandCode}</span>
          </div>
          <div className="flex justify-between py-1 border-b border-border/50">
            <span className="text-muted-foreground">RGB Code</span>
            <span className="font-mono text-xs font-medium text-foreground">
              {color.photoshopCode}
            </span>
          </div>
        </div>
        <div className="pt-2 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-xs"
            onClick={onViewDetails}
          >
            View Details
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs"
            onClick={() => window.open(color.renderUrl, "_blank")}
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
