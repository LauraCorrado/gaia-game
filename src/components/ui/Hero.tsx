import type { ReactNode } from 'react'
import Button from './Button'

type HeroColor = 'blue' | 'pink' | 'green' | 'yellow'

interface HeroAction {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

interface HeroProps {
  title: string
  subtitle?: string
  accentColor?: HeroColor
  actions?: HeroAction[]
  children?: ReactNode
  badge?: string
}

const accentMap: Record<HeroColor, string> = {
  blue:   'text-lm-blue dark:text-dm-blue',
  pink:   'text-lm-pink dark:text-dm-pink',
  green:  'text-lm-green dark:text-dm-green',
  yellow: 'text-lm-yellow dark:text-dm-yellow',
}

const decorMap: Record<HeroColor, string> = {
  blue:   'bg-lm-bg-blue dark:bg-dm-bg-blue',
  pink:   'bg-lm-bg-pink dark:bg-dm-bg-pink',
  green:  'bg-lm-bg-green dark:bg-dm-bg-green',
  yellow: 'bg-lm-bg-yellow dark:bg-dm-bg-yellow',
}

export default function Hero({
  title,
  subtitle,
  accentColor = 'blue',
  actions = [],
  children,
  badge,
}: HeroProps) {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >

      <div
        aria-hidden="true"
        className={`
          absolute -top-24 -right-24
          w-96 h-96 rounded-full opacity-40 blur-3xl
          ${decorMap[accentColor]}
        `}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
        {badge && (
          <span
            className={`
              inline-block text-xs font-semibold uppercase tracking-widest
              mb-4 ${accentMap[accentColor]}
            `}
          >
            {badge}
          </span>
        )}

        <h1
          id="hero-title"
          className="text-lm-text-primary dark:text-dm-text-primary max-w-3xl mb-6"
        >
          {title}
        </h1>

        {subtitle && (
          <p className="text-lm-text-secondary dark:text-dm-text-secondary text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}

        {actions.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {actions.map((action) => (
              <a key={action.href} href={action.href}>
                <Button
                  variant={action.variant ?? 'primary'}
                  color={accentColor}
                >
                  {action.label}
                </Button>
              </a>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}