import type { ReactNode } from "react";
import Button from "./Button";
import Badge from "./Badge";

type HeroColor = "blue" | "pink" | "green" | "yellow";

interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface HeroProps {
  title: string;
  subtitle?: string;
  accentColor?: HeroColor;
  actions?: HeroAction[];
  children?: ReactNode;
  badge?: string;
  image?: string;
}

export default function Hero({
  title,
  subtitle,
  accentColor = "blue",
  actions = [],
  children,
  badge,
  image,
}: HeroProps) {

  return (
    <section
      aria-labelledby="hero-title"
      className={`relative overflow-hidden ${image ? "dark:bg-dm-bg-primary" : ""} md:min-h-150`}
    >
      {image && (
        <>
          {/* Mobile */}
          <div
            aria-hidden="true"
            className="md:hidden absolute inset-0 pointer-events-none"
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover object-right scale-105 dark:invert
  dark:hue-rotate-180
  dark:brightness-90
  dark:contrast-90
  dark:saturate-75"
            />
            <div
              className="absolute inset-0 
  bg-linear-to-r 
  from-lm-bg-primary dark:from-dm-bg-primary 
  via-lm-bg-primary/70 dark:via-dm-bg-primary/70 
  to-transparent"
            />
            <div
              className="absolute inset-x-0 top-0 h-1/4 
  bg-linear-to-b 
  from-lm-bg-primary dark:from-dm-bg-primary 
  to-transparent"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-[8%] 
  bg-linear-to-t 
  from-lm-bg-primary dark:from-dm-bg-primary 
  to-transparent"
            />
          </div>

          {/* Desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute inset-y-0 right-0 w-[60%] pointer-events-none"
          >
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover dark:invert
  dark:hue-rotate-180
  dark:brightness-90
  dark:contrast-90
  dark:saturate-75"
            />
            <div
              className="absolute inset-y-0 left-0 w-1/4 
  bg-linear-to-r 
  from-lm-bg-primary dark:from-dm-bg-primary 
  to-transparent"
            />
            <div
              className="absolute inset-y-0 right-0 w-[8%] 
  bg-linear-to-l 
  from-lm-bg-primary dark:from-dm-bg-primary 
  to-transparent"
            />
            <div
              className="absolute inset-x-0 top-0 h-[12%] 
  bg-linear-to-b 
  from-lm-bg-primary dark:from-dm-bg-primary 
  to-transparent"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-[8%] 
  bg-linear-to-t 
  from-lm-bg-primary dark:from-dm-bg-primary 
  to-transparent"
            />
          </div>
        </>
      )}

      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
        <div className="max-w-xl">
          {badge && (
            <div className="mb-4">
    <Badge 
      label={badge} 
      color={accentColor} 
      size="sm" 
    />
  </div>
          )}

          <h1
            id="hero-title"
            className="mb-6 tracking-wide text-lm-text-primary dark:text-dm-text-primary dark:[text-shadow:-2px_2px_1px_black]"
          >
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg tracking-wide md:text-xl mb-8 leading-relaxed text-lm-text-primary dark:text-dm-text-primary dark:[text-shadow:-1px_1px_1px_black]">
              {subtitle}
            </p>
          )}

          {actions.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {actions.map((action) => (
                <a key={action.href} href={action.href}>
                  <Button
                    variant={action.variant ?? "primary"}
                    color={accentColor}
                    forceLight={!!image}
                  >
                    {action.label}
                  </Button>
                </a>
              ))}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
