type BadgeColor = 'blue' | 'pink' | 'green' | 'yellow' | 'neutral'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  label: string
  color?: BadgeColor
  size?: BadgeSize
}

const colorMap: Record<BadgeColor, string> = {
  blue:    'bg-lm-bg-blue    text-lm-blue    border border-lm-blue/20    dark:bg-dm-bg-blue    dark:text-dm-blue    dark:border-dm-blue/20',
  pink:    'bg-lm-bg-pink    text-lm-pink    border border-lm-pink/20    dark:bg-dm-bg-pink    dark:text-dm-pink    dark:border-dm-pink/20',
  green:   'bg-lm-bg-green   text-lm-green   border border-lm-green/20   dark:bg-dm-bg-green   dark:text-dm-green   dark:border-dm-green/20',
  yellow:  'bg-lm-bg-yellow  text-lm-yellow  border border-lm-yellow/20  dark:bg-dm-bg-yellow  dark:text-dm-yellow  dark:border-dm-yellow/20',
  neutral: 'bg-lm-bg-secondary text-lm-text-secondary border border-lm-text-secondary/10 dark:bg-dm-bg-secondary dark:text-dm-text-secondary'
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