import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    icon: Sparkles,
    price: "0",
    period: "Forever",
    description: "Perfect for getting started with AI website building",
    features: [
      "1 AI-generated website",
      "Basic templates",
      "Mobile responsive design",
      "AI content suggestions",
      "Community support",
      "Basic SEO tools"
    ],
    popular: false,
    cta: "Start for Free"
  },
  {
    name: "Pro",
    icon: Crown,
    price: "19",
    period: "per month",
    description: "For professionals who need advanced AI features",
    features: [
      "Unlimited AI websites",
      "Premium templates",
      "Custom branding",
      "Advanced AI customization",
      "E-commerce functionality",
      "Priority support",
      "Advanced SEO tools",
      "Custom domain",
      "Analytics dashboard"
    ],
    popular: true,
    cta: "Start Pro Trial"
  },
  {
    name: "Enterprise",
    icon: Zap,
    price: "99",
    period: "per month",
    description: "For agencies and large businesses",
    features: [
      "Everything in Pro",
      "White-label solution",
      "Team collaboration",
      "API access",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced analytics",
      "24/7 phone support",
      "SLA guarantee"
    ],
    popular: false,
    cta: "Contact Sales"
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple, Transparent
            <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Start free and upgrade as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative p-8 bg-gradient-card border-border/50 hover:shadow-card-custom transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                plan.popular 
                  ? 'border-primary shadow-glow scale-105' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-button-custom">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.popular ? "ai" : "outline"} 
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Questions? <a href="#" className="text-primary hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};