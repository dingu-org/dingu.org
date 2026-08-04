import styles from "./Mark.module.css";

type MarkProps = {
  size?: number;
  variant?: "plain" | "tile";
};

export function Mark({ size = 32, variant = "plain" }: MarkProps) {
  if (variant === "tile") {
    return (
      <span className={styles.tile} style={{ width: size, height: size }}>
        <span
          className={`${styles.glyph} ${styles.glyphTile}`}
          style={{ fontSize: size * 0.5 }}
        >
          d<span className={styles.dot} />
        </span>
      </span>
    );
  }
  return (
    <span className={styles.glyph} style={{ fontSize: size }}>
      d<span className={styles.dot} />
    </span>
  );
}
