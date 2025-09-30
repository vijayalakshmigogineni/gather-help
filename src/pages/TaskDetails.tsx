import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Star, 
  Shield, 
  Camera, 
  Phone, 
  MessageCircle, 
  CheckCircle,
  AlertTriangle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

const TaskDetails = () => {
  const { id } = useParams();
  const [status, setStatus] = useState<'available' | 'accepted' | 'in_progress' | 'completed'>('available');
  const [proofText, setProofText] = useState('');

  // Mock task data based on ID
  const mockTask = {
    id: id,
    title: "Pick up medicines from Apollo Pharmacy",
    description: "Need urgent pickup of prescribed medicines. Patient is elderly and cannot travel. Store is located at MG Road branch. Please call before pickup to confirm availability.",
    urgency: "emergency",
    price: 150,
    location: "Apollo Pharmacy, MG Road",
    fullAddress: "Apollo Pharmacy, 123 MG Road, Near City Mall, Bangalore - 560001",
    distance: "2.3 km",
    timeAgo: "5 min ago",
    category: "Medicine",
    estimatedTime: "30 mins",
    poster: { 
      name: "Priya S.", 
      rating: 4.8, 
      verified: true,
      tasksPosted: 12,
      phone: "+91 98765 43210"
    },
    requirements: [
      "Call pharmacy before pickup",
      "Verify prescription details",
      "Handle medicines carefully",
      "Deliver to apartment directly"
    ],
    photos: []
  };

  const handleAcceptTask = () => {
    setStatus('accepted');
  };

  const handleStartTask = () => {
    setStatus('in_progress');
  };

  const handleCompleteTask = () => {
    if (proofText.trim()) {
      setStatus('completed');
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'accepted': return 'bg-accent text-accent-foreground';
      case 'in_progress': return 'bg-primary text-primary-foreground';
      case 'completed': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-emergency text-emergency-foreground badge-emergency';
      case 'urgent': return 'bg-accent text-accent-foreground badge-urgent';
      default: return 'bg-primary text-primary-foreground badge-normal';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-md bg-background/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/home">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <h1 className="text-xl font-bold">Task Details</h1>
            </div>
            <Badge className={getStatusColor()}>
              {status.replace('_', ' ').toUpperCase()}
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl space-y-6">
        {/* Task Header */}
        <Card className="card-hover border-0 glass-card">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge className={`${getUrgencyColor(mockTask.urgency)} text-xs`}>
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    {mockTask.urgency}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {mockTask.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{mockTask.timeAgo}</span>
                </div>
                <CardTitle className="text-xl">{mockTask.title}</CardTitle>
              </div>
              <div className="text-right space-y-1">
                <div className="text-2xl font-bold text-accent">₹{mockTask.price}</div>
                <div className="text-xs text-muted-foreground">Fair rate</div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{mockTask.description}</p>
            
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{mockTask.distance}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-accent" />
                <span>{mockTask.estimatedTime}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location Details */}
        <Card className="card-hover border-0 glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Location & Route
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="font-medium">{mockTask.location}</div>
              <div className="text-sm text-muted-foreground">{mockTask.fullAddress}</div>
            </div>
            
            {/* Mock Map Placeholder */}
            <div className="h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
              <p className="text-muted-foreground">🗺️ Interactive map will show route here</p>
            </div>
            
            <Button variant="outline" className="w-full">
              <MapPin className="w-4 h-4 mr-2" />
              Open in Maps
            </Button>
          </CardContent>
        </Card>

        {/* Poster Details */}
        <Card className="card-hover border-0 glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Task Poster
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                {mockTask.poster.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{mockTask.poster.name}</span>
                  {mockTask.poster.verified && (
                    <Badge variant="outline" className="text-xs">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-trust-gold text-trust-gold" />
                    {mockTask.poster.rating}
                  </div>
                  <span>{mockTask.poster.tasksPosted} tasks posted</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card className="card-hover border-0 glass-card">
          <CardHeader>
            <CardTitle>Task Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {mockTask.requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  {req}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-4">
          {status === 'available' && (
            <>
              <Button 
                onClick={handleAcceptTask}
                variant="hero" 
                size="lg" 
                className="w-full hover-bounce"
              >
                Accept Task - ₹{mockTask.price}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Our AI has pre-selected reliable helpers for you.
              </p>
            </>
          )}

          {status === 'accepted' && (
            <>
              <Button 
                onClick={handleStartTask}
                variant="accent" 
                size="lg" 
                className="w-full hover-bounce"
              >
                Start Task
              </Button>
              <Button variant="outline" className="w-full">
                Withdraw from Task
              </Button>
            </>
          )}

          {status === 'in_progress' && (
            <Card className="border-accent/30 bg-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Upload Proof of Completion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Describe what you completed and upload photos as proof..."
                  value={proofText}
                  onChange={(e) => setProofText(e.target.value)}
                  rows={3}
                />
                
                <div className="border-2 border-dashed border-border rounded-xl p-6 text-center">
                  <Camera className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Upload photos as proof of completion
                  </p>
                </div>

                <Button 
                  onClick={handleCompleteTask}
                  variant="success" 
                  size="lg" 
                  className="w-full"
                  disabled={!proofText.trim()}
                >
                  Complete Task & Get Paid
                </Button>
              </CardContent>
            </Card>
          )}

          {status === 'completed' && (
            <Card className="border-success/30 bg-success/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-success mb-2">Task Completed!</h3>
                <p className="text-muted-foreground mb-4">
                  Great job! Your payment of ₹{mockTask.price} is being processed.
                </p>
                <Button variant="outline" className="w-full">
                  Rate Your Experience
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Footer Message */}
        <Card className="border-0 bg-gradient-to-r from-muted/50 to-accent/10">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground italic">
              "Fair tasks. Clear proof. Zero disputes."
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TaskDetails;