import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, BookOpen, Target, Star, Download, Smartphone } from "lucide-react";
import heroImage from "@/assets/rhema-hero.jpg";
import appMockup from "@/assets/app-mockup.jpg";

const RhemaLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-peaceful">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-divine">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-spiritual-light/20 to-spiritual-gold/10" />
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="secondary" className="w-fit text-brand-primary border-brand-primary/20">
                ✨ Scripture Memorization Made Beautiful
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-spiritual-text leading-tight">
                  Hide God's Word
                  <span className="bg-gradient-spiritual bg-clip-text text-transparent animate-spiritual-glow">
                    {" "}in Your Heart
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Rhema helps you memorize and meditate upon Scripture with beautiful, 
                  engaging tools designed for deep spiritual growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 py-6 shadow-divine hover:shadow-glow transition-all duration-500 group">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download for iOS
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-500">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Get on Android
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative group">
                <img 
                  src={heroImage} 
                  alt="Bible with divine light" 
                  className="w-full h-auto rounded-2xl shadow-divine group-hover:shadow-glow transition-all duration-700 animate-float"
                />
                <div className="absolute inset-0 bg-gradient-spiritual opacity-20 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-spiritual-text mb-4">
              Transform Your Scripture Study
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of God's Word through thoughtfully designed features 
              that make memorization engaging and meditation meaningful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-peaceful hover:shadow-divine transition-all duration-500 group animate-scale-in hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-spiritual-glow">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-spiritual-text mb-4">Scripture Memory</h3>
              <p className="text-muted-foreground">
                Progressive learning system that helps you memorize verses naturally 
                through spaced repetition and interactive exercises.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-peaceful hover:shadow-divine transition-all duration-500 group animate-scale-in hover:-translate-y-2" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-spiritual-glow">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-spiritual-text mb-4">Guided Meditation</h3>
              <p className="text-muted-foreground">
                Peaceful meditation sessions with Scripture that help you reflect 
                deeply on God's Word and find spiritual renewal.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-peaceful hover:shadow-divine transition-all duration-500 group animate-scale-in hover:-translate-y-2" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-spiritual-glow">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-spiritual-text mb-4">Daily Goals</h3>
              <p className="text-muted-foreground">
                Set personalized goals and track your progress as you build 
                a consistent habit of engaging with God's Word daily.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-gradient-divine overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-spiritual-text">
                Beautiful Design
                <span className="block text-brand-primary">Spiritual Purpose</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-spiritual-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-spiritual-text mb-2">Distraction-Free Experience</h4>
                    <p className="text-muted-foreground">Clean, peaceful interface designed to help you focus on what matters most.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-spiritual-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-spiritual-text mb-2">Progress Tracking</h4>
                    <p className="text-muted-foreground">See your spiritual growth with meaningful metrics and milestones.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-spiritual-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-spiritual-text mb-2">Offline Access</h4>
                    <p className="text-muted-foreground">Take God's Word with you anywhere, no internet connection required.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <img 
                src={appMockup} 
                alt="Rhema app interface" 
                className="w-full max-w-md mx-auto h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-brand-surface text-center">
        <div className="container mx-auto px-4 max-w-4xl animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-spiritual-text mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of believers who are deepening their relationship with God 
            through meaningful Scripture memorization and meditation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-10 py-6 shadow-divine hover:shadow-glow transition-all duration-500 group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download for iPhone
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-6 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-500">
              <Smartphone className="w-5 h-5 mr-2" />
              Download for Android
            </Button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              "Your word I have hidden in my heart, that I might not sin against You." - Psalm 119:11
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RhemaLanding;