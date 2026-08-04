import type { CSSProperties, ReactNode } from "react";
import styles from "./Panel.module.css";

type PanelProps = {
  children: ReactNode;
  label?: string;
  padding?: number | string;
  style?: CSSProperties;
};

export function Panel({ children, label, padding = 24, style }: PanelProps) {
  return (
    <div className={styles.panel} style={{ padding, ...style }}>
      {label ? <div className={styles.label}>{label}</div> : null}
      {children}
    </div>
  );
}
