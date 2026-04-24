import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Flame, Instagram, Star, User } from "lucide-react";
import rhemaLogo from "@/assets/rhema_logo_light.svg";
import heroPhone from "@/assets/rhema_web_hero.png";
import memorisePhone from "@/assets/rhema_web_memorise.png";
import meditatePhone from "@/assets/rhema_web_meditate.png";
import streaksPhone from "@/assets/rhema_web_streaks.png";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";
import PhoneMockup from "@/components/PhoneMockup";
import FeatureCard from "@/components/FeatureCard";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/rhema-memorise-and-meditate/id6750488143";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.agape.rhema&pcampaignid=web_share";

const StoreButtons = ({ size = "lg" }: { size?: "default" | "lg" }) => (
  <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-stretch sm:justify-start sm:gap-4">
    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
      <Button
        size={size}
        className="flex w-full items-center gap-3 rounded-full border border-white/20 bg-black px-8 py-6 text-lg text-white transition-transform hover:-translate-y-0.5 hover:bg-black/90 sm:w-auto"
      >
        <img src="/apple_logo.svg" alt="" className="h-5 w-auto invert" />
        <span className="font-medium">Download for iOS</span>
      </Button>
    </a>
    <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
      <Button
        size={size}
        className="flex w-full items-center gap-3 rounded-full border border-gray-300 bg-white px-8 py-6 text-lg text-black transition-transform hover:-translate-y-0.5 hover:bg-gray-100 sm:w-auto"
      >
        <img src="/google_play_icon.svg.png" alt="" className="h-5 w-auto" />
        <span className="font-medium">Download for Android</span>
      </Button>
    </a>
  </div>
);

const TopNav = () => (
  <header className="sticky top-0 z-40 w-full backdrop-blur-md">
    <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
      <Link to="/" aria-label="Rhema home">
        <img src={rhemaLogo} alt="Rhema" className="h-8 w-auto" />
      </Link>
      <nav className="flex items-center gap-2 sm:gap-3">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the App Store"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-peaceful transition-transform hover:-translate-y-0.5"
        >
          <img src="/apple_logo.svg" alt="" className="h-4 w-auto invert" />
        </a>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get it on Google Play"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-black shadow-peaceful transition-transform hover:-translate-y-0.5"
        >
          <img src="/google_play_icon.svg.png" alt="" className="h-4 w-auto" />
        </a>
      </nav>
    </div>
  </header>
);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden pb-16 pt-8 md:pb-24 md:pt-12"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-8">
        <motion.div
          style={{ y: copyY }}
          className="relative z-10 text-center md:text-left"
        >
          <h1 className="font-serif text-5xl font-semibold leading-[1.1] text-teal-dark sm:text-6xl md:text-7xl">
            Hide God's Word
            <span className="mt-2 block bg-gradient-spiritual bg-clip-text pb-2 font-bold tracking-tight text-transparent">
              in your heart.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:mx-0 md:text-xl">
            Rhema is the beautifully calm way to memorise and meditate on
            Scripture — spaced repetition, guided reflection, and gentle
            streaks that grow with you.
          </p>

          <div className="mt-10 flex justify-center md:justify-start">
            <StoreButtons />
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
            <span className="inline-flex h-2 w-2 animate-teal-glow rounded-full bg-teal-accent" />
            <span>Available on iOS and Android — built by Agape Labs.</span>
          </div>
        </motion.div>

        <motion.div
          style={{ y: phoneY }}
          className="relative mx-auto w-full max-w-[400px] md:max-w-[500px]"
        >
          <PhoneMockup
            src={heroPhone}
            alt="Rhema app showing a verse being memorised"
            framed={false}
            float
          />
        </motion.div>
      </div>
    </section>
  );
};

const ScriptureAnchor = () => (
  <section className="relative pb-8 pt-6 md:pb-12 md:pt-10">
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="container mx-auto max-w-3xl px-4 text-center"
    >
      <p className="font-serif text-2xl italic leading-relaxed text-teal-dark md:text-3xl">
        &ldquo;Your word I have hidden in my heart, that I might not sin
        against You.&rdquo;
      </p>
      <footer className="mt-4 font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
        — Psalm 119:11
      </footer>
    </motion.blockquote>
  </section>
);

const Features = () => (
  <section className="relative py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto mb-16 max-w-2xl text-center"
      >
        <h2 className="font-serif text-4xl font-bold text-teal-dark md:text-5xl">
          A rhythm you can keep.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Three simple practices, woven into one gentle daily flow. Memorise,
          meditate, and watch the habit grow.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <FeatureCard
          index={0}
          icon={BookOpen}
          title="Memorise"
          description="Spaced repetition that actually makes verses stick. Short daily reviews, long-term retention."
          screenshotSrc={memorisePhone}
          screenshotAlt="Rhema memory session screen showing a verse being filled in"
          screenshotFramed={false}
        />
        <FeatureCard
          index={1}
          icon={Heart}
          title="Meditate"
          description="Slow down and sit with Scripture. Guided reflections turn memorised verses into prayed ones."
          screenshotSrc={meditatePhone}
          screenshotAlt="Rhema guided meditation screen with a pastoral background"
          screenshotFramed={false}
          accentHex="#EC4899"
        />
        <FeatureCard
          index={2}
          icon={Flame}
          title="Streaks & Progress"
          description="A gentle streak and a growing library of verses. Track consistency without the guilt-trip."
          screenshotSrc={streaksPhone}
          screenshotAlt="Rhema 7-day streak screen"
          screenshotFramed={false}
          accentHex="#F59E0B"
        />
      </div>
    </div>
  </section>
);

interface Review {
  username: string;
  rating: number;
  title: string;
  quote: string;
}

// Official App Store reviews.
const REVIEWS: Review[] = [
  {
    username: "Aaron Larbi",
    rating: 5,
    title: "The perfect partner for memorising scripture!",
    quote:
      "Memorising scripture can be daunting when it feels like there's no clear place to start, but Rhema has made it simple. This app helps me mediate on the Word by using music and amazing app design to help me focus on a specific scripture. It has not only held me accountable but also encourages me each morning to hide God's word in my heart. I highly recommend this app!",
  },
  {
    username: "Tiyana Mia",
    rating: 5,
    title: "Love love LOVE.",
    quote:
      "I have recommended this app over and over again because I genuinely believe in studying the word of God. Not only is it interactive, the amount of detail put into the memorisation section and the daily meditation practice. I've never used a Christian app like this before. 10/10!!!!",
  },
  {
    username: "Seyi Olofintila",
    rating: 5,
    title: "Never forget a scripture again",
    quote:
      "Rhema allows you to embed the word into your heart, I've been able to not only study the word but really meditate on it through this app, it allows me to rest in Gods love wherever I am and would highly recommend 🙌",
  },
  {
    username: "876flygirl",
    rating: 5,
    title: "Just what I needed",
    quote:
      "Love this app! It's really helped me grow in my daily habits. I'm a big fan of the meditation feature. Life can get so hectic at times but it's helped remove me from the noise and reconnect with my Father. All the best to the team — keep up the good work :)",
  },
  {
    username: "Juno 0301",
    rating: 5,
    title: "Great app!",
    quote:
      "I like the way the app has consistent but gentle reminders to connect with Scripture throughout your day. I found it a lot easier to recall verses through using this app, and I'm definitely recommending this to my friends!",
  },
  {
    username: "TtemzZz",
    rating: 5,
    title: "There's nothing else like this!",
    quote:
      "An amazing app. Exactly what I've needed to help me meditate on God's word. Can't even put into words how much it's helped me on my journey with Christ.",
  },
  {
    username: "Sharon Ukpere",
    rating: 5,
    title: "Soo helpful, I love it",
    quote:
      "I have been waiting for an app like this. So easy to navigate and has helped me with actually memorising key scriptures. I love it!!",
  },
];

const ReviewCard = ({ review }: { review: Review }) => (
  <article className="flex min-h-[320px] w-[360px] shrink-0 flex-col rounded-3xl border border-border/60 bg-white/80 p-7 shadow-peaceful backdrop-blur-sm sm:min-h-[340px] sm:w-[420px]">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-400">
        <User className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <span className="font-sans text-sm font-semibold text-teal-dark">
          {review.username}
        </span>
        <div
          className="flex items-center gap-0.5"
          aria-label={`${review.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={
                i < review.rating
                  ? "h-4 w-4 fill-amber-400 text-amber-400"
                  : "h-4 w-4 text-muted-foreground/40"
              }
            />
          ))}
        </div>
      </div>
    </div>
    <h3 className="mb-2 font-sans text-base font-semibold text-teal-dark">
      {review.title}
    </h3>
    <p className="font-serif text-sm italic leading-relaxed text-muted-foreground">
      &ldquo;{review.quote}&rdquo;
    </p>
  </article>
);

const SocialProof = () => {
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section className="relative py-4 md:py-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max gap-6 px-6 animate-marquee-scroll group-hover:[animation-play-state:paused]">
          {loop.map((review, i) => (
            <ReviewCard key={`${review.username}-${i}`} review={review} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="relative py-24 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container mx-auto max-w-3xl px-4"
    >
      <h2 className="font-serif text-4xl font-bold text-teal-dark md:text-5xl">
        Start your daily rhythm.
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
        Download Rhema and begin hiding God&apos;s Word in your heart today.
      </p>
      <div className="mt-10 flex justify-center">
        <StoreButtons />
      </div>
    </motion.div>
  </section>
);

const SiteFooter = () => (
  <footer className="relative border-t border-border/60 bg-white/60 py-8 backdrop-blur-sm">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://agapelabs.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-teal-accent"
          >
            Agape Labs Ltd
          </a>
          . All rights reserved.
        </div>
        <nav className="flex items-center gap-6">
          <Link
            to="/quiz"
            className="text-sm text-muted-foreground transition-colors hover:text-teal-accent"
          >
            Bible Quiz
          </Link>
          <Link
            to="/privacy"
            className="text-sm text-muted-foreground transition-colors hover:text-teal-accent"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-sm text-muted-foreground transition-colors hover:text-teal-accent"
          >
            Terms
          </Link>
          <a
            href="mailto:team@agapelabs.co.uk"
            className="text-sm text-muted-foreground transition-colors hover:text-teal-accent"
          >
            Contact
          </a>
          <a
            href="https://www.instagram.com/rhema_app_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Rhema on Instagram"
            className="text-muted-foreground transition-colors hover:text-teal-accent"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </div>
  </footer>
);

const RhemaLanding = () => {
  return (
    <div className="relative min-h-screen">
      <TopNav />
      <main>
        <Hero />
        <ScriptureAnchor />
        <SocialProof />
        <Features />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
};

export default RhemaLanding;
