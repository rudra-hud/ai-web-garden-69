import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Smartphone, 
  Search, 
  ShoppingCart, 
  Palette, 
  Code, 
  Zap, 
  Globe,
  ArrowRight 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Design",
    description: "Our advanced AI analyzes your content and creates stunning, professional designs tailored to your brand."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Responsive",
    description: "Every website is automatically optimized for all devices - mobile, tablet, and desktop."
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built-in SEO tools ensure your website ranks high on search engines from day one."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Ready",
    description: "Add online store functionality with payment processing and inventory management."
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Upload your logo and brand colors - AI will create a cohesive design across your entire site."
  },
  {
    icon: Code,
    title: "No Coding Required",
    description: "Build professional websites without any technical knowledge. Our visual editor makes it simple."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures your website loads quickly and provides great user experience."
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Your website is delivered fast worldwide through our global content delivery network."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">
              Modern Websites
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, manage, and grow your online presence with the power of artificial intelligence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 h-full bg-gradient-card border-border/50 hover:shadow-card-custom transition-all duration-300 hover:-translate-y-1 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-3xl p-8 md:p-12 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience the Future of Web Design?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of users who are already building amazing websites with our AI-powered platform.
          </p>
          <Button variant="ai" size="lg" className="text-lg px-8 py-6">
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};