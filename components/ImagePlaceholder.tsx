import Image from "next/image";

type Props = {
  label: string;
  aspect?: string;
  tone?: "cream" | "navy" | "stone";
  className?: string;
  /**
   * Optional path to a real photo (e.g. "/images/portrait-hero.jpg"),
   * relative to the /public folder. Once this is set, the elegant
   * placeholder box below is replaced by the actual photograph — no
   * other code changes are needed.
   */
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
        <Image
          src={src}
    