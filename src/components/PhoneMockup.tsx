import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  src: string;
  alt: string;
  /**
   * When true, wrap the image in a CSS iPhone device frame (dark bezel + Dynamic Island).
   * Set to false if `src` is already a pre-composited polished device render with the frame baked in.
   */
  framed?: boolean;
  float?: boolean;
  className?: string;
  imageClassName?: string;
}

const PhoneMockup = ({
  src,
  alt,
  framed = true,
  float = false,
  className,
  imageClassName,
}: PhoneMockupProps) => {
  const floatClass = float ? "animate-float" : "";

  if (!framed) {
    return (
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-auto drop-shadow-2xl", floatClass, className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-full rounded-[2.75rem] border-[6px] border-[#0f0f11] bg-[#0f0f11] p-[4px] shadow-divine",
        floatClass,
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-white">
        <img
          src={src}
          alt={alt}
          className={cn("h-full w-full object-cover object-top", imageClassName)}
        />
        <div className="pointer-events-none absolute left-1/2 top-2 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-[#0f0f11]" />
      </div>
    </div>
  );
};

export default PhoneMockup;
