import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

// Hover do primário não troca para accent-light: texto sobre accent-light cai para 3.8:1.
const VARIANT: Record<Variant, string> = {
  primary:
    "bg-accent text-text-primary shadow-[0_8px_24px_-8px_var(--color-accent-dim)] hover:shadow-glow hover:brightness-110",
  outline:
    "border border-border text-text-primary hover:border-accent-light/60 hover:bg-accent-dim/40",
  ghost: "text-text-secondary hover:text-text-primary",
};

const SIZE: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
}

type AsAnchor = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type AsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonProps = AsAnchor | AsButton;

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-display font-medium tracking-wide",
    "transition-[background-color,border-color,box-shadow,filter,color] duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-light",
    "disabled:pointer-events-none disabled:opacity-40 select-none",
    VARIANT[variant],
    SIZE[size],
    className,
  );

  if (props.href !== undefined) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return <a className={classes} {...anchorProps} />;
  }

  const { type = "button", ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button type={type} className={classes} {...buttonProps} />;
}
