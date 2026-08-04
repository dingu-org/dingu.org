import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  index?: string;
  children: ReactNode;
};

export function SectionHeading({ index, children }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      {index ? `${index} — ` : ""}
      {children}
    </div>
  );
}
