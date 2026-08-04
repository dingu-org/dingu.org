import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  mono?: boolean;
};

export function Input({ label, mono = false, className, ...rest }: InputProps) {
  const inputClassName = [styles.input, mono ? styles.mono : "", className ?? ""]
    .filter(Boolean)
    .join(" ");
  return (
    <label className={styles.field}>
      {label ? <span className={styles.label}>{label}</span> : null}
      <input {...rest} className={inputClassName} />
    </label>
  );
}
