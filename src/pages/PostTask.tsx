import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera, MapPin, DollarSign, Clock, Zap, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const PostTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [urgency, setUrgency] = useState<'normal' | 'urgent' | 'emergency'>('normal');
  const [location, setLocation] = useState('');
  const [suggestedPrice, setSuggestedPrice] = useState(150);

  const categories = [
    { id: 'groceries', name: 'Groceries', icon: '🛒' },
    { id: 'medicine', name: 'Medicine', icon: '💊' },
    { id: 'documents', name: 'Documents', icon: '📄' },
    { id: 'delivery', name: 'Delivery', icon: '📦' },
    { id: 'emergency', name: 'Emergency', icon: '🚨' },
    { id: 'other', name: 'Other', icon: '🤝' }
  ];

  const urgencyLevels = [
    { 
      id: 'normal', 
      name: 'Normal', 
      description: 'Can wait a few hours',
      icon: <Clock className="w-4 h-4" />,
      color: 'bg-primary'
    },
    { 
      id: 'urgent', 
      name: 'Urgent', 
      description: 'Need within 1 hour',
      icon: <Zap className="w-4 h-4" />,
      color: 'bg-accent'
    },
    { 
      id: 'emergency', 
      name: 'Emergency', 
      description: 'Need immediate help',
      icon: <AlertTriangle className="w-4 h-4" />,
      color: 'bg-emergency pulse-emergency'
    }
  ];

  const handleSubmit = () => {
    // In real app, this would create the task
    alert('Task posted successfully! Nearby helpers will be notified.');
    window.location.href = '/home';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-md bg-background/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/home">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold">Post a Task</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl space-y-6">
        {/* Helper Banner */}
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Fair Community Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Not surge pricing. Our AI suggests fair rates based on distance, time, and community standards.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover border-0 glass-card">
          <CardHeader>
            <CardTitle>Task Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Task Title</Label>
              <Input
                id="title"
                placeholder="e.g., Pick up medicines from Apollo Pharmacy"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Provide more details about what needs to be done..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>

            {/* Category */}
            <div className="space-y-3">
              <Label>Category</Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                      category === cat.id 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="text-xl">{cat.icon}</div>
                      <div className="text-sm font-medium">{cat.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div className="space-y-3">
              <Label>Urgency Level</Label>
              <div className="grid gap-3">
                {urgencyLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setUrgency(level.id as any)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      urgency === level.id 
                        ? `border-${level.id === 'emergency' ? 'emergency' : level.id === 'urgent' ? 'accent' : 'primary'} bg-${level.id === 'emergency' ? 'emergency' : level.id === 'urgent' ? 'accent' : 'primary'}/10` 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${level.color} rounded-full flex items-center justify-center text-white`}>
                        {level.icon}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium">{level.name}</div>
                        <div className="text-sm text-muted-foreground">{level.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Pickup/Drop Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  id="location"
                  placeholder="Enter address or landmark"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Photo Upload */}
            <div className="space-y-2">
              <Label>Add Photos (Optional)</Label>
              <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
                <Camera className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">
                  Click to upload photos that help explain your task
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Price Section */}
        <Card className="card-hover border-0 glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Suggested Price
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-xl">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-accent">₹{suggestedPrice}</div>
                <p className="text-sm text-muted-foreground">
                  Based on distance, urgency, and community rates
                </p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Base rate:</span>
                <span>₹80</span>
              </div>
              <div className="flex justify-between">
                <span>Distance (2.3 km):</span>
                <span>₹40</span>
              </div>
              <div className="flex justify-between">
                <span>Urgency bonus:</span>
                <span>₹30</span>
              </div>
              <hr className="border-border" />
              <div className="flex justify-between font-semibold">
                <span>Total suggested:</span>
                <span>₹{suggestedPrice}</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center italic">
              "Fair pricing that works for everyone in the community"
            </p>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button 
          onClick={handleSubmit}
          variant="hero" 
          size="lg" 
          className="w-full hover-bounce"
          disabled={!title || !description || !category || !location}
        >
          Post Task & Notify Helpers
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Your task will be shared with verified helpers in your area
        </p>
      </div>
    </div>
  );
};

export default PostTask;