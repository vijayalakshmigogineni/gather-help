import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Plus, 
  Search, 
  Filter, 
  Bell, 
  User, 
  Zap, 
  Clock, 
  Star, 
  DollarSign,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  const [activeTab, setActiveTab] = useState<'map' | 'list'>('list');
  const [filter, setFilter] = useState('all');

  // Mock data for demonstration
  const mockTasks = [
    {
      id: 1,
      title: "Pick up medicines from Apollo Pharmacy",
      description: "Need urgent pickup of prescribed medicines. Store is 2km away.",
      urgency: "emergency",
      price: 150,
      location: "Apollo Pharmacy, MG Road",
      distance: "2.3 km",
      timeAgo: "5 min ago",
      category: "Medicine",
      poster: { name: "Priya S.", rating: 4.8, verified: true }
    },
    {
      id: 2,
      title: "Grocery delivery from Big Bazaar",
      description: "Weekly groceries shopping list attached. Prefer morning delivery.",
      urgency: "normal",
      price: 200,
      location: "Big Bazaar, City Mall",
      distance: "1.8 km",
      timeAgo: "12 min ago",
      category: "Groceries",
      poster: { name: "Raj K.", rating: 4.9, verified: true }
    },
    {
      id: 3,
      title: "Car breakdown - need jumper cables",
      description: "Car battery died on highway. Need someone with jumper cables urgently.",
      urgency: "emergency",
      price: 300,
      location: "NH-48, Near Toll Plaza",
      distance: "5.2 km",
      timeAgo: "2 min ago",
      category: "Emergency",
      poster: { name: "Amit P.", rating: 4.7, verified: true }
    },
    {
      id: 4,
      title: "Submit documents at bank",
      description: "Need to submit loan documents at SBI branch before 4 PM today.",
      urgency: "urgent",
      price: 100,
      location: "SBI Main Branch",
      distance: "3.1 km",
      timeAgo: "8 min ago",
      category: "Documents",
      poster: { name: "Sarah M.", rating: 4.6, verified: false }
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-emergency text-emergency-foreground badge-emergency';
      case 'urgent': return 'bg-accent text-accent-foreground badge-urgent';
      default: return 'bg-primary text-primary-foreground badge-normal';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return <AlertTriangle className="w-3 h-3" />;
      case 'urgent': return <Zap className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-md bg-background/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-bold">Task Feed</h1>
              <Badge variant="outline" className="text-xs">
                <MapPin className="w-3 h-3 mr-1" />
                Bangalore
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Search tasks or locations..." className="pl-10" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['all', 'Emergency', 'Medicine', 'Groceries', 'Documents', 'Delivery'].map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className="whitespace-nowrap"
              >
                {category === 'all' ? 'All Tasks' : category}
              </Button>
            ))}
          </div>
        </div>

        {/* AI Suggestions Banner */}
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">AI suggests the best tasks for you</h3>
                <p className="text-sm text-muted-foreground">
                  Based on your location, skills, and trust score. Fair. Fast. Trusted.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency SOS Button */}
        <Card className="border-emergency/30 bg-emergency/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-emergency">Emergency Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Need urgent help? Alert nearby helpers instantly.
                </p>
              </div>
              <Link to="/emergency">
                <Button variant="emergency" size="lg" className="pulse-emergency">
                  🚨 SOS
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Task List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Available Tasks</h2>
            <p className="text-sm text-muted-foreground">
              {mockTasks.length} tasks nearby
            </p>
          </div>

          <div className="grid gap-4">
            {mockTasks.map((task) => (
              <Card key={task.id} className="card-hover border-0 glass-card">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge className={`${getUrgencyColor(task.urgency)} text-xs`}>
                          {getUrgencyIcon(task.urgency)}
                          {task.urgency}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {task.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{task.timeAgo}</span>
                      </div>
                      <h3 className="font-semibold text-lg leading-tight">{task.title}</h3>
                      <p className="text-muted-foreground text-sm">{task.description}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-xl font-bold text-accent">₹{task.price}</div>
                      <div className="text-xs text-muted-foreground">Suggested</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="flex-1">{task.location}</span>
                      <span className="font-medium">{task.distance}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {task.poster.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="text-sm font-medium">{task.poster.name}</span>
                            {task.poster.verified && (
                              <Badge variant="outline" className="text-xs px-1 py-0">
                                <Star className="w-3 h-3 fill-trust-gold text-trust-gold mr-1" />
                                {task.poster.rating}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <Link to={`/task/${task.id}`}>
                        <Button variant="accent" size="sm" className="hover-bounce">
                          Accept Task
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <Card className="border-0 bg-gradient-to-r from-muted/50 to-accent/10">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground italic">
              "Not surge pricing. Fair community pricing that works for everyone."
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Floating Action Button */}
      <Link to="/post-task">
        <Button 
          variant="hero" 
          size="lg" 
          className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl hover:shadow-glow z-50"
        >
          <Plus className="w-8 h-8" />
        </Button>
      </Link>
    </div>
  );
};

export default Home;