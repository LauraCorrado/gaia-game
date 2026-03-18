import type { ReactNode, ElementType } from 'react'
import type { LucideIcon } from 'lucide-react'

type CardColor = 'blue' | 'pink' | 'green' | 'yellow' | 'neutral'

interface CardProps {
  color?: CardColor
  title?: string
  icon?: LucideIcon
  children: ReactNode
  className?: string
  as?: ElementType
}

const bgTintMap: Record<CardColor, string> = {
  blue:    'bg-lm-bg-blue    dark:bg-dm-bg-blue',
  pink:    'bg-lm-bg-pink    dark:bg-dm-bg-pink',
  green:   'bg-lm-bg-green   dark:bg-dm-bg-green',
  yellow:  'bg-lm-bg-yellow  dark:bg-dm-bg-yellow',
  neutral: 'bg-lm-bg-secondary dark:bg-dm-bg-secondary',
}

const borderMap: Record<CardColor, string> = {
  blue:    'border-lm-blue/30   dark:border-dm-blue/30',
  pink:    'border-lm-pink/30   dark:border-dm-pink/30',
  green:   'border-lm-green/30  dark:border-dm-green/30',
  yellow:  'border-lm-yellow/30 dark:border-dm-yellow/30',
  neutral: 'border-lm-text-secondary/20 dark:border-dm-text-secondary/20',
}

const iconBgMap: Record<CardColor, string> = {
  blue:    'bg-lm-blue   dark:bg-dm-blue',
  pink:    'bg-lm-pink   dark:bg-dm-pink',
  green:   'bg-lm-green  dark:bg-dm-green',
  yellow:  'bg-lm-yellow dark:bg-dm-yellow',
  neutral: 'bg-lm-text-secondary dark:bg-dm-text-secondary',
}

const titleMap: Record<CardColor, string> = {
  blue:    'text-lm-blue   dark:text-dm-blue',
  pink:    'text-lm-pink   dark:text-dm-pink',
  green:   'text-lm-green  dark:text-dm-green',
  yellow:  'text-lm-yellow dark:text-dm-yellow',
  neutral: 'text-lm-text-primary dark:text-dm-text-primary',
}

export default function Card({
  color = 'neutral',
  title,
  icon: Icon,
  children,
  className = '',
  as: Tag = 'div',
}: CardProps) {
  return (
    <Tag
      className={`
        group relative overflow-hidden
        rounded-2xl border
        ${bgTintMap[color]}
        ${borderMap[color]}
        p-6
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-md
        ${className}
      `}
    >
      {Icon && (
        <Icon
          size={96}
          aria-hidden="true"
          className={`
            absolute -bottom-4 -right-4
            opacity-[0.07] dark:opacity-[0.1]
            ${titleMap[color]}
            transition-transform duration-300
            group-hover:scale-110 group-hover:opacity-[0.11]
          `}
        />
      )}

      <div className="relative flex flex-col gap-4">

        {(Icon || title) && (
          <div className="flex items-center gap-3">
            {Icon && (
              <div
                className={`
                  w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                  ${iconBgMap[color]} text-white dark:text-dm-bg-primary
                  transition-transform duration-300
                  group-hover:scale-110
                `}
              >
                <Icon size={20} aria-hidden="true" />
              </div>
            )}

            {title && (
              <h3 className={`font-semibold text-base ${titleMap[color]}`}>
                {title}
              </h3>
            )}
          </div>
        )}

        <div className="text-lm-text-secondary dark:text-dm-text-secondary text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </Tag>
  )
}