import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Shield, Users, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Auth = () => {
  const [step, setStep] = useState<'phone' | 'otp' | 'profile'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [userType, setUserType] = useState<'helper' | 'poster'>('helper');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const handleSendOTP = () => {
    if (phoneNumber.length >= 10) {
      setStep('otp');
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      setStep('profile');
    }
  };

  const handleComplete = () => {
    // In real app, this would create the user account
    window.location.href = '/home';
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Join HelpHub</h1>
            <p className="text-muted-foreground">
              {step === 'phone' && "Verified helpers earn more — trust matters here"}
              {step === 'otp' && "Enter the 6-digit code sent to your phone"}
              {step === 'profile' && "Complete your community profile"}
            </p>
          </div>
        </div>

        <Card className="card-hover border-0 glass-card shadow-card">
          <CardHeader className="text-center pb-4">
            <CardTitle className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                {step === 'phone' && <Phone className="w-4 h-4 text-white" />}
                {step === 'otp' && <Shield className="w-4 h-4 text-white" />}
                {step === 'profile' && <Users className="w-4 h-4 text-white" />}
              </div>
              {step === 'phone' && "Phone Verification"}
              {step === 'otp' && "Verify OTP"}
              {step === 'profile' && "Profile Setup"}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {step === 'phone' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="text-center text-lg"
                  />
                </div>
                
                <div className="space-y-4">
                  <Label>I want to:</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setUserType('helper')}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        userType === 'helper' 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="text-2xl">🤝</div>
                        <div className="font-semibold">Help Others</div>
                        <div className="text-xs text-muted-foreground">Earn by helping</div>
                      </div>
                    </button>
                    <button
                      onClick={() => setUserType('poster')}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        userType === 'poster' 
                          ? 'border-accent bg-accent/10 text-accent' 
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="text-2xl">🆘</div>
                        <div className="font-semibold">Get Help</div>
                        <div className="text-xs text-muted-foreground">Post tasks</div>
                      </div>
                    </button>
                  </div>
                </div>

                <Button 
                  onClick={handleSendOTP}
                  variant="hero" 
                  size="lg" 
                  className="w-full hover-bounce"
                  disabled={phoneNumber.length < 10}
                >
                  Send OTP
                </Button>

                <div className="text-center">
                  <Button variant="ghost" size="sm">
                    Continue as Guest (Demo Mode)
                  </Button>
                </div>
              </>
            )}

            {step === 'otp' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="otp">Enter OTP</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.slice(0, 6))}
                    className="text-center text-2xl tracking-widest"
                    maxLength={6}
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    Sent to {phoneNumber}
                  </p>
                </div>

                <Button 
                  onClick={handleVerifyOTP}
                  variant="hero" 
                  size="lg" 
                  className="w-full hover-bounce"
                  disabled={otp.length !== 6}
                >
                  Verify & Continue
                </Button>

                <div className="text-center">
                  <Button variant="ghost" size="sm">
                    Resend OTP
                  </Button>
                </div>
              </>
            )}

            {step === 'profile' && (
              <>
                <div className="flex items-center justify-center text-success mb-4">
                  <CheckCircle className="w-8 h-8" />
                  <span className="ml-2 font-semibold">Phone Verified!</span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      type="text"
                      placeholder="Your city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">Next: Verification (Optional)</h4>
                  <p className="text-sm text-muted-foreground">
                    Upload ID & selfie to boost your Trust Score and unlock premium tasks.
                  </p>
                </div>

                <Button 
                  onClick={handleComplete}
                  variant="hero" 
                  size="lg" 
                  className="w-full hover-bounce"
                  disabled={!name || !city}
                >
                  Complete Registration
                </Button>
              </>
            )}
          </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>Verification boosts your Trust Score and unlocks premium tasks</p>
          <p className="text-xs">
            By continuing, you agree to our terms. We protect your privacy and data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;