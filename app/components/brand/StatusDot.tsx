import styles from "./StatusDot.module.css";

export type BranchStatus = "alive" | "growing" | "dormant" | "pruned";

type StatusDotProps = {
  status?: BranchStatus;
  showLabel?: boolean;
};

export function StatusDot({ status = "growing", showLabel = true }: StatusDotProps) {
  const dot = <span className={`${styles.dot} ${styles[status]}`} />;
  if (!showLabel) {
    return <span className={styles.bare}>{dot}</span>;
  }
  return (
    <span className={styles.status}>
      {dot}
      {status}
    </span>
  );
}
