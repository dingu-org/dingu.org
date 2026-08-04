import styles from "./BranchBadge.module.css";

type BranchBadgeProps = {
  variant?: "light" | "dark";
  href?: string;
};

export function BranchBadge({ variant = "light", href = "https://dingu.org" }: BranchBadgeProps) {
  const className =
    variant === "dark" ? `${styles.badge} ${styles.dark}` : styles.badge;
  return (
    <a href={href} className={className}>
      a branch of dingu
      <span className={styles.dot} />
      org
    </a>
  );
}
