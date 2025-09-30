import { Link } from "react-router-dom";
import { ArrowLeft, Star, Shield, User, MapPin, DollarSign, CheckCircle, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  const mockUser = {
    name: "Ravi Kumar",
    phone: "+91 98765 43210",
    city: "Bangalore",
    joinedDate: "March 2024",
    trustScore: 87,
    totalEarnings: 12450,
    tasksCompleted: 48,
    rating: 4.8,
    isVerified: true,
    badges: ['Top Helper', 'Fast Responder', 'Emergency Hero']
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
            <h1 className="text-xl font-bold">Profile</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl space-y-6">
        {/* Profile Header */}
        <Card className="card-hover border-0 glass-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {mockUser.name.split(' ').map(n => n[0]).join('')}
                </div>
                {mockUser.isVerified && (
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-success rounded-full flex items-center justify-center border-2 border-white">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-bold">{mockUser.name}</h2>
                  {mockUser.isVerified && (
                    <Badge variant="outline" className="text-xs">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {mockUser.city}
                  </span>
                  <span>Member since {mockUser.joinedDate}</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Camera className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Trust Score */}
        <Card className="card-hover border-0 glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-trust-gold" />
              Trust Score
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">{mockUser.trustScore}/100</div>
              <p className="text-sm text-muted-foreground">
                Trust Score is your reputation. Higher score = more earnings.
              </p>
            </div>
            
            <div className="space-y-2">
              <Progress value={mockUser.trustScore} className="h-3 trust-meter" />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-accent">{mockUser.tasksCompleted}</div>
                <div className="text-xs text-muted-foreground">Tasks Done</div>
              </div>
              <div>
                <div className="text-lg font-bold text-trust-gold flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  {mockUser.rating}
                </div>
                <div className="text-xs text-muted-foreground">Rating</div>
              </div>
              <div>
                <div className="text-lg font-bold text-success">₹{mockUser.totalEarnings.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Earned</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card className="card-hover border-0 glass-card">
          <CardHeader>
            <CardTitle>Achievement Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {mockUser.badges.map((badge, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30"
                >
                  <Star className="w-3 h-3 mr-1 fill-trust-gold text-trust-gold" />
                  {badge}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Verification Status */}
        <Card className="card-hover border-0 glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Verification Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Phone Number</span>
                </div>
                <Badge variant="outline" className="border-success text-success">Verified</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Government ID</span>
                </div>
                <Badge variant="outline" className="border-success text-success">Verified</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Selfie Verification</span>
                </div>
                <Badge variant="outline" className="border-success text-success">Verified</Badge>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground text-center">
              All verifications complete! You can access premium tasks.
            </p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link to="/home">
            <Button variant="outline" className="w-full">
              <User className="w-4 h-4 mr-2" />
              My Tasks
            </Button>
          </Link>
          <Button variant="outline" className="w-full">
            <DollarSign className="w-4 h-4 mr-2" />
            Earnings
          </Button>
        </div>

        {/* Your Side Hustle Banner */}
        <Card className="border-0 bg-gradient-to-r from-primary/10 to-accent/10">
          <CardContent className="p-4 text-center">
            <h3 className="font-semibold mb-2">Your side hustle, your schedule.</h3>
            <p className="text-sm text-muted-foreground italic">
              "Keep building trust, keep earning more in your community."
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;