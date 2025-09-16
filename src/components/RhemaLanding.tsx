import { Button } from "@/components/ui/button";
import { Card as UICard } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, BookOpen, Target, Star, Download, Smartphone } from "lucide-react";
import heroImage from "@/assets/rhema-hero.jpg";
import appScreenshot from "@/assets/rhema-app-screenshot.png";
import rhemaLogo from "@/assets/rhema_logo_light.svg";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

// Scroll Animation Components
const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <AnimatedCard rotate={rotate} translate={translate} scale={scale}>
          {children}
        </AnimatedCard>
      </div>
    </div>
  );
};

const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

const AnimatedCard = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-sm -mt-12 mx-auto h-[35rem] md:h-[45rem] w-[18rem] md:w-[22rem] border-4 border-[#1C1C1E] p-1 md:p-2 bg-[#000000] rounded-[3rem] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-zinc-900 md:p-2">
        {children}
      </div>
    </motion.div>
  );
};

const RhemaLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-peaceful">
      {/* Logo */}
      <div className="absolute top-6 left-6 z-50">
        <img 
          src={rhemaLogo} 
          alt="Rhema Logo" 
          className="h-8 w-auto"
        />
      </div>

      {/* Hero Section with Scroll Animation */}
      <section className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-teal-text dark:text-white mb-4">
                Hide God's Word <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-spiritual bg-clip-text text-transparent">
                  in Your Heart
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Rhema helps you memorize and meditate upon Scripture with beautiful, 
                engaging tools designed for deep spiritual growth.
              </p>
            </>
          }
        >
          <img
            src={appScreenshot}
            alt="Rhema app interface"
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        
        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center -mt-64 mb-32 relative z-10">
          <Button size="lg" className="flex items-center gap-3 text-lg px-8 py-6 shadow-divine hover:shadow-glow transition-all duration-500 group">
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <div className="flex flex-col text-left">
              <span className="text-xs opacity-80">Download on the</span>
              <span className="text-lg font-semibold">App Store</span>
            </div>
          </Button>
          
          <Button variant="outline" size="lg" className="flex items-center gap-3 text-lg px-8 py-6 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-500">
            <Smartphone className="w-5 h-5" />
            <div className="flex flex-col text-left">
              <span className="text-xs opacity-80">Get it on</span>
              <span className="text-lg font-semibold">Google Play</span>
            </div>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-teal-text mb-4">
              Transform Your Scripture Study
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the power of God's Word through thoughtfully designed features 
              that make memorization engaging and meditation meaningful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <UICard className="p-8 text-center shadow-peaceful hover:shadow-divine transition-all duration-500 group animate-scale-in hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-teal-glow">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-text mb-4">Scripture Memory</h3>
              <p className="text-muted-foreground">
                Progressive learning system that helps you memorize verses naturally 
                through spaced repetition and interactive exercises.
              </p>
            </UICard>

            <UICard className="p-8 text-center shadow-peaceful hover:shadow-divine transition-all duration-500 group animate-scale-in hover:-translate-y-2" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-teal-glow">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-text mb-4">Guided Meditation</h3>
              <p className="text-muted-foreground">
                Peaceful meditation sessions with Scripture that help you reflect 
                deeply on God's Word and find spiritual renewal.
              </p>
            </UICard>

            <UICard className="p-8 text-center shadow-peaceful hover:shadow-divine transition-all duration-500 group animate-scale-in hover:-translate-y-2" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-spiritual rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-teal-glow">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-text mb-4">Daily Goals</h3>
              <p className="text-muted-foreground">
                Set personalized goals and track your progress as you build 
                a consistent habit of engaging with God's Word daily.
              </p>
            </UICard>
          </div>
        </div>
      </section>

      

      {/* Final CTA Section */}
      <section className="py-20 bg-brand-surface text-center">
        <div className="container mx-auto px-4 max-w-4xl animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-teal-text mb-6">
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