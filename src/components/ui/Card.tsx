import type { ReactNode } from 'react'

type CardColor = 'blue' | 'pink' | 'green' | 'yellow' | 'neutral'

interface CardProps {
  color?: CardColor
  title?: string
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'li'
}

const borderMap: Record<CardColor, string> = {
  blue:    'border-l-4 border-l-lm-blue dark:border-l-dm-blue',
  pink:    'border-l-4 border-l-lm-pink dark:border-l-dm-pink',
  green:   'border-l-4 border-l-lm-green dark:border-l-dm-green',
  yellow:  'border-l-4 border-l-lm-yellow dark:border-l-dm-yellow',
  neutral: 'border border-lm-bg-secondary dark:border-dm-bg-secondary',
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
        p-6
        ${borderMap[color]}
        ${className}
      `}
    >
      {title && (
        <h3 className={`font-semibold mb-3 ${titleMap[color]}`}>
          {title}
        </h3>
      )}
      <div className="text-lm-text-secondary dark:text-dm-text-secondary text-sm leading-relaxed">
        {children}
      </div>
    </Tag>
  )
}