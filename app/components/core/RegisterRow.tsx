import { StatusDot, type BranchStatus } from "../brand/StatusDot";
import styles from "./RegisterRow.module.css";

type RegisterRowProps = {
  sub: string;
  desc: string;
  status?: BranchStatus;
  href?: string;
  domain?: string;
};

export function RegisterRow({
  sub,
  desc,
  status = "growing",
  href,
  domain = ".dingu.org",
}: RegisterRowProps) {
  return (
    <a href={href ?? `https://${sub}${domain}`} className={styles.row}>
      <span className={styles.sub}>
        {sub}
        <span className={styles.domain}>{domain}</span>
      </span>
      <span className={styles.desc}>{desc}</span>
      <span className={styles.status}>
        <StatusDot status={status} />
      </span>
      <span className={styles.chev}>›</span>
    </a>
  );
}
