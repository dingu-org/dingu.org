import type { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  href?: string;
};

export function Button({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  href,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;
  if (href) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        aria-disabled={disabled || undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
