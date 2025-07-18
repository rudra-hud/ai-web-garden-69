import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Sparkles, Save, Eye, Settings, Palette, Type, Layout } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export default function Builder() {
  const [searchParams] = useSearchParams();
  const templateId = searchParams.get('template');
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Website customization state
  const [websiteName, setWebsiteName] = useState('My Website');
  const [description, setDescription] = useState('A beautiful website built with AI');
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [fontFamily, setFontFamily] = useState('Inter');
  const [layoutStyle, setLayoutStyle] = useState('modern');
  const [headerStyle, setHeaderStyle] = useState('minimal');
  const [showAnimation, setShowAnimation] = useState(true);
  const [borderRadius, setBorderRadius] = useState([8]);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  const handleSave = () => {
    toast({
      title: "Website Saved!",
      description: "Your website customizations have been saved.",
    });
  };

  const handlePreview = () => {
    toast({
      title: "Opening Preview",
      description: "Your website preview will open in a new tab.",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Website Builder
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={handlePreview}>
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button variant="hero" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Customization Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Basic Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Basic Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="website-name">Website Name</Label>
                  <Input
                    id="website-name"
                    value={websiteName}
                    onChange={(e) => setWebsiteName(e.target.value)}
                    placeholder="Enter website name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter website description"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Design Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Primary Color</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="primary-color"
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-16 h-10 p-1"
                    />
                    <Input
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      placeholder="#3b82f6"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Border Radius</Label>
                  <Slider
                    value={borderRadius}
                    onValueChange={setBorderRadius}
                    max={20}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-sm text-muted-foreground">{borderRadius[0]}px</div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="animations">Animations</Label>
                  <Switch
                    id="animations"
                    checked={showAnimation}
                    onCheckedChange={setShowAnimation}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Typography */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="w-5 h-5" />
                  Typography
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Font Family</Label>
                  <Select value={fontFamily} onValueChange={setFontFamily}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Inter">Inter</SelectItem>
                      <SelectItem value="Roboto">Roboto</SelectItem>
                      <SelectItem value="Open Sans">Open Sans</SelectItem>
                      <SelectItem value="Poppins">Poppins</SelectItem>
                      <SelectItem value="Montserrat">Montserrat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Layout */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layout className="w-5 h-5" />
                  Layout
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Layout Style</Label>
                  <Select value={layoutStyle} onValueChange={setLayoutStyle}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="modern">Modern</SelectItem>
                      <SelectItem value="classic">Classic</SelectItem>
                      <SelectItem value="minimal">Minimal</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Header Style</Label>
                  <Select value={headerStyle} onValueChange={setHeaderStyle}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minimal">Minimal</SelectItem>
                      <SelectItem value="centered">Centered</SelectItem>
                      <SelectItem value="sidebar">Sidebar</SelectItem>
                      <SelectItem value="overlay">Overlay</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="bg-background border border-border rounded-lg p-6 min-h-[600px]"
                  style={{ 
                    borderRadius: `${borderRadius[0]}px`,
                    fontFamily: fontFamily 
                  }}
                >
                  {/* Preview content */}
                  <div className="space-y-6">
                    {/* Header Preview */}
                    <div className="flex items-center justify-between pb-4 border-b border-border">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: primaryColor }}
                        >
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-lg font-bold" style={{ color: primaryColor }}>
                          {websiteName}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span>Home</span>
                        <span>About</span>
                        <span>Services</span>
                        <span>Contact</span>
                      </div>
                    </div>

                    {/* Hero Section Preview */}
                    <div className="text-center space-y-4 py-12">
                      <h1 className="text-4xl font-bold">{websiteName}</h1>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {description}
                      </p>
                      <div className="flex items-center justify-center gap-4">
                        <Button 
                          style={{ backgroundColor: primaryColor }}
                          className="text-white"
                        >
                          Get Started
                        </Button>
                        <Button variant="outline">Learn More</Button>
                      </div>
                    </div>

                    {/* Content Preview */}
                    <div className="grid md:grid-cols-3 gap-6">
                      {[1, 2, 3].map((i) => (
                        <div 
                          key={i} 
                          className="p-4 border border-border rounded-lg"
                          style={{ borderRadius: `${borderRadius[0]}px` }}
                        >
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                            style={{ backgroundColor: `${primaryColor}20` }}
                          >
                            <div 
                              className="w-6 h-6 rounded-full"
                              style={{ backgroundColor: primaryColor }}
                            />
                          </div>
                          <h3 className="font-semibold mb-2">Feature {i}</h3>
                          <p className="text-sm text-muted-foreground">
                            This is a preview of how your content will look.
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}