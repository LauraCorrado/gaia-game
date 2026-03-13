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

const bandMap: Record<CardColor, string> = {
  blue:    'bg-gradient-to-b from-lm-bg-blue to-transparent dark:from-dm-bg-blue',
  pink:    'bg-gradient-to-b from-lm-bg-pink to-transparent dark:from-dm-bg-pink',
  green:   'bg-gradient-to-b from-lm-bg-green to-transparent dark:from-dm-bg-green',
  yellow:  'bg-gradient-to-b from-lm-bg-yellow to-transparent dark:from-dm-bg-yellow',
  neutral: 'bg-gradient-to-b from-lm-bg-secondary to-transparent dark:from-dm-bg-secondary',
}

const iconColorMap: Record<CardColor, string> = {
  blue:    'bg-lm-blue dark:bg-dm-blue text-white dark:text-dm-bg-primary',
  pink:    'bg-lm-pink dark:bg-dm-pink text-white dark:text-dm-bg-primary',
  green:   'bg-lm-green dark:bg-dm-green text-white dark:text-dm-bg-primary',
  yellow:  'bg-lm-yellow dark:bg-dm-yellow text-white dark:text-dm-bg-primary',
  neutral: 'bg-lm-text-secondary dark:bg-dm-text-secondary text-white',
}

const titleMap: Record<CardColor, string> = {
  blue:    'text-lm-blue dark:text-dm-blue',
  pink:    'text-lm-pink dark:text-dm-pink',
  green:   'text-lm-green dark:text-dm-green',
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
        bg-lm-bg-primary dark:bg-dm-bg-secondary
        rounded-lg shadow-sm hover:shadow-md
        transition-shadow duration-200
        border border-lm-bg-secondary dark:border-dm-bg-secondary
        overflow-hidden flex flex-col
        ${className}
      `}
    >
      <div className={`relative h-14 shrink-0 ${bandMap[color]}`}>
  
        {Icon && (
          <div
            className={`
              absolute -bottom-5 left-6
              w-10 h-10 rounded-lg shadow-sm
              flex items-center justify-center
              ${iconColorMap[color]}
            `}
          >
            <Icon size={20} aria-hidden="true" />
          </div>
        )}
      </div>

      <div className={`flex flex-col gap-3 p-6 ${Icon ? 'pt-8' : 'pt-6'}`}>
        {title && (
          <h3 className={`font-semibold text-base ${titleMap[color]}`}>
            {title}
          </h3>
        )}
        <div className="text-lm-text-secondary dark:text-dm-text-secondary text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </Tag>
  )
}