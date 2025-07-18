import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, ExternalLink, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Template {
  id: number;
  title: string;
  category: string;
  image: string;
  preview: string;
  likes: number;
  views: number;
}

interface TemplatePreviewModalProps {
  template: Template | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TemplatePreviewModal = ({ template, isOpen, onClose }: TemplatePreviewModalProps) => {
  const navigate = useNavigate();

  if (!template) return null;

  const handleUseTemplate = () => {
    navigate(`/builder?template=${template.id}`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            {template.title}
            <Badge variant="secondary">{template.category}</Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Template Image */}
          <div className="relative group">
            <img
              src={template.image}
              alt={template.title}
              className="w-full h-64 object-cover rounded-lg border border-border"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          </div>

          {/* Template Details */}
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">About this template</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {template.preview}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Heart className="w-4 h-4" />
                    <span>{template.likes.toLocaleString()} likes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    <span>{template.views.toLocaleString()} views</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Features included:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Responsive design</li>
                    <li>• SEO optimized</li>
                    <li>• Fast loading</li>
                    <li>• Mobile friendly</li>
                    <li>• Easy customization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Preview Frames */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Live Preview</h3>
              <div className="bg-muted/30 rounded-lg p-6 text-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border">
                    <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{template.title} Preview</span>
                  </div>
                  
                  <div className="bg-background rounded-lg border border-border p-8 space-y-4">
                    <div className="h-4 bg-gradient-primary rounded w-48 mx-auto"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded w-full"></div>
                      <div className="h-2 bg-muted rounded w-3/4 mx-auto"></div>
                      <div className="h-2 bg-muted rounded w-1/2 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-muted/50 rounded h-20"></div>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    This is a simplified preview. The actual template includes full functionality and styling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => window.open(template.image, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Image
            </Button>
            <Button
              variant="hero"
              className="flex-1"
              onClick={handleUseTemplate}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Use This Template
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};