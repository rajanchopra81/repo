import Image from "next/image";

type Props = {
  label: string;
  aspect?: string;
  tone?: "cream" | "navy" | "stone";
  className?: string;
  src?: string;
  sizes?: string;
};

const tones: Record<string, string> = {
  cream: "bg-cream text-ink-600",
  stone: "bg-stone text-ink-600",
  navy: "bg-navy-deep text-navy-mist",
};

export default function ImagePlaceholder({
  label,
  aspect = "aspect-[4/5]",
  tone = "cream",
  className = "",
  src,
  sizes = "(min-width: 1024px) 33vw, 100vw",
}: Props) {
  if (src) {
    return (
      <div className={`${aspect} relative w-full overflow-hidden ${className}`}>
        <Image src={src} alt={label} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`${aspect} ${tones[tone]} flex w-full items-end justify-start border border-ink-200/60 p-6 ${className}`}
      style={{
        backgroundImage:
          tone === "navy"
            ? undefined
            : "repeating-linear-gradient(135deg, rgba(11,23,48,0.04) 0px, rgba(11,23,48,0.04) 1px, transparent 1px, transparent 14px)",
      }}
    >
      <span className="text-[0.7rem] uppercase tracking-wide2">{label}</span>
    </div>
  );
}
