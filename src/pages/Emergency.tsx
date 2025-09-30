import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, MapPin, Phone, Users, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Emergency = () => {
  const [step, setStep] = useState<'form' | 'confirming' | 'active'>('form');
  const [emergencyType, setEmergencyType] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [helpersNotified, setHelpersNotified] = useState(0);

  const emergencyTypes = [
    { id: 'roadside', name: 'Roadside Assistance', icon: '🚗', priority: 'critical' },
    { id: 'medical', name: 'Medical Emergency', icon: '🏥', priority: 'critical' },
    { id: 'urgent-delivery', name: 'Urgent Delivery', icon: '🚚', priority: 'high' },
    { id: 'stranded', name: 'Stranded/Lost', icon: '📍', priority: 'critical' },
    { id: 'immediate-help', name: 'Immediate Help', icon: '🆘', priority: 'critical' },
    { id: 'other', name: 'Other Emergency', icon: '❗', priority: 'high' }
  ];

  const handleEmergencySubmit = () => {
    setStep('confirming');
    // Simulate API call and helper notification
    setTimeout(() => {
      setStep('active');
      setHelpersNotified(12);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-emergency/30 backdrop-blur-md bg-emergency/5 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/home">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-emergency" />
              <h1 className="text-xl font-bold text-emergency">Emergency Mode</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-2xl space-y-6">
        {step === 'form' && (
          <>
            {/* Emergency Banner */}
            <Card className="border-emergency/30 bg-emergency/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-emergency rounded-full flex items-center justify-center mx-auto mb-4 pulse-emergency">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-emergency mb-2">
                  This is our promise: urgent help when you need it most
                </h2>
                <p className="text-muted-foreground">
                  Your emergency alert will be sent to all verified helpers within 5km immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-emergency" />
                  Emergency Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Emergency Type */}
                <div className="space-y-3">
                  <Label>Type of Emergency</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {emergencyTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setEmergencyType(type.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          emergencyType === type.id 
                            ? 'border-emergency bg-emergency/10 text-emergency' 
                            : 'border-border hover:border-emergency/50'
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="text-2xl">{type.icon}</div>
                          <div className="font-medium text-sm">{type.name}</div>
                          {type.priority === 'critical' && (
                            <div className="text-xs text-emergency font-medium">CRITICAL</div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">What happened? (Brief description)</Label>
                  <Textarea
                    id="description"
                    placeholder="e.g., Car broke down on highway, battery dead, need jumper cables"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Auto Location */}
                <div className="bg-muted/50 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">Current Location</div>
                      <div className="text-sm text-muted-foreground">
                        NH-48, Near Toll Plaza, Bangalore
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Update</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Emergency */}
            <Button 
              onClick={handleEmergencySubmit}
              variant="emergency" 
              size="lg" 
              className="w-full text-lg py-6 pulse-emergency"
              disabled={!emergencyType || !description || !phone}
            >
              🚨 SEND EMERGENCY ALERT
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              This will immediately notify all helpers within 5km of your location
            </p>
          </>
        )}

        {step === 'confirming' && (
          <Card className="card-hover border-0 glass-card">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto animate-pulse">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Notifying Helpers...</h2>
                <p className="text-muted-foreground">
                  Sending your emergency alert to verified helpers nearby
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </CardContent>
          </Card>
        )}

        {step === 'active' && (
          <>
            <Card className="border-success/30 bg-success/10">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-success mb-2">
                  Emergency Alert Sent!
                </h2>
                <p className="text-muted-foreground">
                  {helpersNotified} verified helpers have been notified in your area
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Live Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                    <span>Helpers notified</span>
                    <span className="font-bold text-success">{helpersNotified}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                    <span>Responses received</span>
                    <span className="font-bold text-accent">3</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                    <span>Helpers en route</span>
                    <span className="font-bold text-primary">1</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-3">Incoming Responses:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                        R
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">Raj K.</div>
                        <div className="text-sm text-muted-foreground">⭐ 4.9 • 2.1 km away • ETA: 8 mins</div>
                      </div>
                      <Button variant="success" size="sm">Accept</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-r from-muted/50 to-accent/10">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground italic">
                  "Help is on the way. Stay calm and keep your phone accessible."
                </p>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Emergency;