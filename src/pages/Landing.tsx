import { Link } from "react-router-dom";
import { MapPin, Users, Zap, Shield, Star, ArrowRight, Phone, Heart, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/community-hero.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-md bg-background/95 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              HelpHub
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/auth">
              <Button variant="hero">Join Community</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Help, anywhere.
                  </span>
                  <br />
                  <span className="text-foreground">Anytime.</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Crowdsourced help when you need it most. Not just tasks — trust and opportunity 
                  for your community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth" className="flex-1">
                  <Button variant="hero" size="lg" className="w-full text-lg py-6 hover-bounce">
                    I Need Help
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/auth" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full text-lg py-6 hover-bounce">
                    I Can Help
                    <Heart className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-muted-foreground italic">
                "When apps fail, people help. This is not another Dunzo."
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img 
                src={heroImage}
                alt="Community helping each other"
                className="relative rounded-3xl shadow-2xl card-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Not just tasks —
              </span>{" "}
              trust and opportunity
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for communities where traditional gig apps don't reach. 
              Highways, small towns, student areas — anywhere people need help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Emergency Mode",
                description: "🚨 SOS button for urgent help. When minutes matter, your community responds.",
                color: "emergency"
              },
              {
                icon: Users,
                title: "AI Matching",
                description: "⭐ Smart suggestions connect you with the best helpers nearby. Fair. Fast. Trusted.",
                color: "primary"
              },
              {
                icon: DollarSign,
                title: "Fair Earnings",
                description: "💰 Not surge pricing. Community-driven rates that work for everyone.",
                color: "accent"
              }
            ].map((feature, index) => (
              <Card key={index} className="card-hover border-0 glass-card">
                <CardContent className="p-8 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${
                    feature.color === 'emergency' ? 'from-emergency to-emergency/80' :
                    feature.color === 'primary' ? 'from-primary to-primary-glow' :
                    'from-accent to-accent-glow'
                  } flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Earn while empowering your community
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps, powerful impact
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Post or Browse", description: "Need help? Post a task. Want to earn? Browse nearby requests.", icon: MapPin },
              { step: "2", title: "AI Matches", description: "Our community engine suggests the best helpers based on trust and proximity.", icon: Users },
              { step: "3", title: "Help & Earn", description: "Complete tasks, upload proof, build your reputation in the community.", icon: Star },
              { step: "4", title: "Build Trust", description: "Ratings and verification create a safe, reliable network for everyone.", icon: Shield }
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <step.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to join the movement?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you need help or want to help others, your community is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Link to="/auth" className="flex-1">
              <Button variant="secondary" size="lg" className="w-full hover-bounce">
                <Phone className="w-5 h-5" />
                Get Started with OTP
              </Button>
            </Link>
          </div>
          <p className="text-sm mt-6 opacity-75">
            Verify your phone • Build your trust score • Start earning today
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                HelpHub
              </span>
            </div>
            <p className="text-muted-foreground italic font-medium">
              "This is not another Dunzo. This is community power."
            </p>
            <p className="text-sm text-muted-foreground">
              Built for tier-2 & tier-3 communities • Highways • Student areas • Anywhere people need help
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;