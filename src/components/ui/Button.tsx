import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonVariant = "primary" | "secondary";
type ButtonColor = "blue" | "pink" | "green" | "yellow";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  children: ReactNode;
  forceLight?: boolean;
  className?: string;
};

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type RouterLinkButtonProps = BaseButtonProps &
  Omit<LinkProps, "className" | "children"> & {
    as: "link";
  };

type AnchorButtonProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    as: "a";
    href: string;
  };

type ButtonProps =
  | NativeButtonProps
  | RouterLinkButtonProps
  | AnchorButtonProps;

const colorMap: Record<
  ButtonColor,
  {
    filled: string;
    outlined: string;
    filledLight: string;
    outlinedLight: string;
  }
> = {
  blue: {
    filled:
      "bg-lm-blue text-white dark:bg-dm-blue dark:text-dm-bg-primary hover:opacity-90",
    outlined:
      "border-2 border-lm-blue text-lm-blue dark:border-dm-blue dark:text-dm-blue hover:bg-lm-bg-blue dark:hover:bg-dm-bg-blue",
    filledLight: "bg-lm-blue text-white hover:opacity-90",
    outlinedLight: "border-2 border-lm-blue text-lm-blue hover:bg-lm-bg-blue",
  },
  pink: {
    filled:
      "bg-lm-pink text-white dark:bg-dm-pink dark:text-dm-bg-primary hover:opacity-90",
    outlined:
      "border-2 border-lm-pink text-lm-pink dark:border-dm-pink dark:text-dm-pink hover:bg-lm-bg-pink dark:hover:bg-dm-bg-pink",
    filledLight: "bg-lm-pink text-white hover:opacity-90",
    outlinedLight: "border-2 border-lm-pink text-lm-pink hover:bg-lm-bg-pink",
  },
  green: {
    filled:
      "bg-lm-green text-white dark:bg-dm-green dark:text-dm-bg-primary hover:opacity-90",
    outlined:
      "border-2 border-lm-green text-lm-green dark:border-dm-green dark:text-dm-green hover:bg-lm-bg-green dark:hover:bg-dm-bg-green",
    filledLight: "bg-lm-green text-white hover:opacity-90",
    outlinedLight:
      "border-2 border-lm-green text-lm-green hover:bg-lm-bg-green",
  },
  yellow: {
    filled:
      "bg-lm-yellow text-white dark:bg-dm-yellow dark:text-dm-bg-primary hover:opacity-90",
    outlined:
      "border-2 border-lm-yellow text-lm-yellow dark:border-dm-yellow dark:text-dm-yellow hover:bg-lm-bg-yellow dark:hover:bg-dm-bg-yellow",
    filledLight: "bg-lm-yellow text-white hover:opacity-90",
    outlinedLight:
      "border-2 border-lm-yellow text-lm-yellow hover:bg-lm-bg-yellow",
  },
};

const sizeMap: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

export default function Button({
  variant = "primary",
  color = "blue",
  size = "md",
  forceLight = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const map = colorMap[color];

  const colorClasses = forceLight
    ? variant === "primary"
      ? map.filledLight
      : map.outlinedLight
    : variant === "primary"
      ? map.filled
      : map.outlined;

  const classes = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-lg
    shadow-sm hover:shadow-md
    transition-all duration-200
    focus-visible:outline-2 focus-visible:outline-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer no-underline
    ${colorClasses}
    ${sizeMap[size]}
    ${className}
  `;

  if (props.as === "link") {
    const { as, ...linkProps } = props;

    return (
      <Link className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  if (props.as === "a") {
    const { as, ...anchorProps } = props;

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as, ...buttonProps } = props;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}