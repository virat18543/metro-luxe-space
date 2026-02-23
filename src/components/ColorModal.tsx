import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ColorData } from "@/data/sampleColors";

interface ColorModalProps {
  color: ColorData | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ColorModal = ({ color, open, onOpenChange }: ColorModalProps) => {
  if (!color) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card">
        <DialogHeader>
          <div className="flex items-start justify-between mb-2">
            <div>
              <DialogTitle className="font-heading text-2xl text-foreground">
                {color.productName}
              </DialogTitle>
              <DialogDescription className="text-base font-medium text-muted-foreground mt-1">
                {color.catalogueCode}
              </DialogDescription>
            </div>
            <Badge variant={color.type === "Metallic" ? "default" : "secondary"}>
              {color.type}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="border border-border rounded-lg p-4 bg-background/50">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                  Edge Band Code
                </h4>
                <p className="text-base font-medium text-foreground">
                  {color.edgeBandCode}
                </p>
              </div>

              <div className="border border-border rounded-lg p-4 bg-background/50">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                  Photoshop Colour Code
                </h4>
                <p className="text-base font-mono text-foreground">
                  {color.photoshopCode}
                </p>
              </div>
            </div>

            <div className="border border-border rounded-lg p-4 bg-background/50">
              <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                3D Design Scene
              </h4>
              <Button
                className="w-full"
                onClick={() => window.open(color.renderUrl, "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View 3D Render
              </Button>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Opens in new tab
              </p>
            </div>
          </div>

          {color.notes && (
            <div className="border border-border rounded-lg p-4 bg-background/50">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                Application Notes
              </h4>
              <p className="text-sm text-foreground leading-relaxed">
                {color.notes}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
