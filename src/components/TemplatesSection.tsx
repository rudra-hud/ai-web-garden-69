import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Heart } from "lucide-react";
import { TemplatePreviewModal } from './TemplatePreviewModal';
import { useNavigate } from 'react-router-dom';

const templates = [
  {
    id: 1,
    title: "Modern Business",
    category: "Business",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    preview: "Perfect for agencies, consultancies, and professional services",
    likes: 2400,
    views: 12500
  },
  {
    id: 2,
    title: "E-commerce Store",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    preview: "Beautiful online store with shopping cart and payment integration",
    likes: 1800,
    views: 9200
  },
  {
    id: 3,
    title: "Creative Portfolio",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    preview: "Showcase your work with stunning visual layouts",
    likes: 3100,
    views: 15600
  },
  {
    id: 4,
    title: "Restaurant Menu",
    category: "Food & Dining",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    preview: "Elegant menu display with online ordering capabilities",
    likes: 1950,
    views: 8900
  },
  {
    id: 5,
    title: "Tech Startup",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    preview: "Clean, modern design for SaaS and tech companies",
    likes: 2700,
    views: 14200
  },
  {
    id: 6,
    title: "Health & Wellness",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    preview: "Calming design for medical practices and wellness centers",
    likes: 1600,
    views: 7800
  }
];

const categories = ["All", "Business", "E-commerce", "Portfolio", "Food & Dining", "Technology", "Healthcare"];

export const TemplatesSection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<typeof templates[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePreview = (template: typeof templates[0]) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const handleUseTemplate = (template: typeof templates[0]) => {
    navigate(`/builder?template=${template.id}`);
  };
  return (
    <section id="templates" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Choose from
            <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">
              Beautiful Templates
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start with professionally designed templates that AI can customize to match your brand and content perfectly.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {templates.map((template, index) => (
            <Card 
              key={template.id} 
              className="group overflow-hidden bg-gradient-card border-border/50 hover:shadow-card-custom transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Template Image */}
              <div className="relative overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="rounded-full" onClick={() => handlePreview(template)}>
                    <Eye className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" variant="ai" className="rounded-full" onClick={() => handleUseTemplate(template)}>
                    Use Template
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-background/90 px-3 py-1 rounded-full text-xs font-medium">
                  {template.category}
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {template.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {template.preview}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span>{template.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{template.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center animate-fade-in">
          <Button variant="outline" size="lg">
            View All Templates
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Template Preview Modal */}
      <TemplatePreviewModal
        template={selectedTemplate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};