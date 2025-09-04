import * as React from "react";
import clsx from "clsx";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base = "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold";
    const variants: Record<string, string> = {
      default: "bg-accent text-accent-foreground",
      outline: "border border-border text-foreground",
    };
    return <span ref={ref} className={clsx(base, variants[variant], className)} {...props} />;
  }
);
Badge.displayName = "Badge";

export default Badge;
