type BadgeColor = 'blue' | 'pink' | 'green' | 'yellow' | 'neutral'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  label: string
  color?: BadgeColor
  size?: BadgeSize
}

const colorMap: Record<BadgeColor, string> = {
  blue:    'bg-lm-bg-blue text-lm-blue dark:bg-dm-bg-blue dark:text-dm-blue',
  pink:    'bg-lm-bg-pink text-lm-pink dark:bg-dm-bg-pink dark:text-dm-pink',
  green:   'bg-lm-bg-green text-lm-green dark:bg-dm-bg-green dark:text-dm-green',
  yellow:  'bg-lm-bg-yellow text-lm-yellow dark:bg-dm-bg-yellow dark:text-dm-yellow',
  neutral: 'bg-lm-bg-secondary text-lm-text-secondary dark:bg-dm-bg-secondary dark:text-dm-text-secondary',
}

const sizeMap: Record<BadgeSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
}

export default function Badge({ label, color = 'neutral', size = 'sm' }: BadgeProps) {
  return (
    <span
      className={`
        inline-block font-semibold uppercase tracking-wide
        rounded-lg
        ${colorMap[color]}
        ${sizeMap[size]}
      `}
    >
      {label}
    </span>
  )
}