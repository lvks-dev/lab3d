import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "soft" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

// Hierarquia de CTAs (lab3d-brand.md § Botões e CTAs). Só tokens; opacidade via /xx ou color-mix.
const VARIANT: Record<Variant, string> = {
  // Único botão preenchido do site (hero, contato, menu mobile). Gradiente a 86%: o pior ponto
  // (topo, accent-light) dá 4.8:1 com text-primary — a 90% cairia para 4.49. Sem brightness no hover.
  primary:
    "bg-linear-to-b from-accent-light/86 via-accent/86 to-accent-dark/86 text-text-primary " +
    "shadow-[0_10px_28px_color-mix(in_oklab,var(--color-accent)_18%,transparent),inset_0_1px_0_color-mix(in_oklab,var(--color-text-primary)_16%,transparent)] " +
    "hover:shadow-[0_12px_32px_color-mix(in_oklab,var(--color-accent)_28%,transparent),inset_0_1px_0_color-mix(in_oklab,var(--color-text-primary)_16%,transparent)]",
  // Header: outline discreto, sem glow.
  soft: "border border-accent-light/30 bg-accent/8 text-text-primary hover:border-accent-light/45 hover:bg-accent/14",
  // Secundário: ghost — "branco" via text-primary (2%) e border (branco a 7%).
  ghost: "border border-border bg-text-primary/2 text-text-primary hover:bg-text-primary/5",
  // Ação neutra fora da hierarquia de CTAs (ex.: envio do formulário por e-mail).
  outline:
    "border border-border text-text-primary hover:border-accent-light/60 hover:bg-accent-dim/40",
};

// lg/md com o mesmo raio dos cards (rounded-2xl); lg é 4px mais baixo que antes (48 → 44).
const SIZE: Record<Size, string> = {
  sm: "h-9 rounded-xl px-4 text-sm",
  md: "h-11 rounded-2xl px-5 text-sm",
  lg: "h-11 rounded-2xl px-6 text-base",
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
    "inline-flex items-center justify-center gap-2 font-display font-medium tracking-wide",
    "transition-[background-color,border-color,box-shadow,color] duration-200",
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
