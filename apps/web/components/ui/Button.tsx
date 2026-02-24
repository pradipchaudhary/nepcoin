import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className,
}: Props) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2",
        variant === "primary" &&
        "bg-white text-neutral-950 hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98]",
        variant === "secondary" &&
        "border border-neutral-800 text-neutral-300 hover:bg-neutral-900",
        className
      )}
    >
      {children}
    </button>
  );
}