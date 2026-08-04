import type { CSSProperties } from "react";
import styles from "./Wordmark.module.css";

type WordmarkProps = {
  size?: number;
  color?: string;
  href?: string;
};

export function Wordmark({ size = 18, color = "var(--ink)", href }: WordmarkProps) {
  const style: CSSProperties = { fontSize: size, color };
  const children = (
    <>
      dingu
      <span className={styles.dot} />
      org
    </>
  );
  return href ? (
    <a href={href} className={styles.wordmark} style={style}>
      {children}
    </a>
  ) : (
    <span className={styles.wordmark} style={style}>
      {children}
    </span>
  );
}
