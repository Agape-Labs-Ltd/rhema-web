import { Card as UICard } from "@/components/ui/card";
import PhoneMockup from "@/components/PhoneMockup";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  screenshotSrc: string;
  screenshotAlt: string;
  screenshotFramed?: boolean;
  index?: number;
  /**
   * Optional hex color (e.g. "#EC4899") for the icon and its chip background.
   * If omitted, the card uses the brand-primary teal.
   */
  accentHex?: string;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  screenshotSrc,
  screenshotAlt,
  screenshotFramed = true,
  index = 0,
  accentHex,
}: FeatureCardProps) => {
  const chipStyle = accentHex
    ? { backgroundColor: `${accentHex}26` } // 0x26 ≈ 15% alpha
    : undefined;
  const iconStyle = accentHex ? { color: accentHex } : undefined;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
    >
      <UICard className="group h-full rounded-3xl border-border/60 bg-white/70 p-8 shadow-peaceful backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-divine">
        <div className="mx-auto mb-6 flex w-full max-w-[220px] items-center justify-center">
          <PhoneMockup
            src={screenshotSrc}
            alt={screenshotAlt}
            framed={screenshotFramed}
            className="w-full"
          />
        </div>
        <div
          className={
            accentHex
              ? "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
              : "mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/15"
          }
          style={chipStyle}
        >
          <Icon
            className={accentHex ? "h-6 w-6" : "h-6 w-6 text-brand-primary"}
            style={iconStyle}
          />
        </div>
        <h3 className="mb-3 font-serif text-2xl font-semibold text-teal-dark">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </UICard>
    </motion.div>
  );
};

export default FeatureCard;
