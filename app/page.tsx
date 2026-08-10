import { Fragment } from "react";
import { Wordmark } from "./components/brand/Wordmark";
import type { BranchStatus } from "./components/brand/StatusDot";
import { RegisterRow } from "./components/core/RegisterRow";
import styles from "./page.module.css";

type Branch = {
  sub: string;
  desc: string;
  status: BranchStatus;
  href: string;
  domain?: string;
};

const branches: Branch[] = [
  {
    sub: "klaidi",
    desc: "learning by making",
    status: "growing",
    href: "https://klaidi.dingu.org",
  },
  {
    sub: "medium",
    desc: "quieting the inbox",
    status: "growing",
    href: "https://medium.dingu.org",
  },
  {
    sub: "umbra",
    desc: "feeding a calm mind",
    status: "growing",
    href: "https://umbra.dingu.org",
  },
  {
    sub: "breakandanga",
    desc: "in other words",
    status: "alive",
    href: "https://breakandanga.vercel.app",
    domain: ".vercel.app",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.statement}>
          <div className={styles.logo}>
            <Wordmark href="https://dingu.org" size="clamp(32px, 5vw, var(--display-size))" />
          </div>
          <h1 className={styles.title}>As little design as possible.</h1>
          <p className={styles.subtitle}>
            One tree, many branches. What grows under dingu.org: projects, each
            in its own space, planted small, growing at its own pace, and kept
            deliberately simple.
          </p>
        </div>
        <div className={styles.group}>
          {branches.map((b, i) => (
            <Fragment key={b.sub}>
              {i > 0 && <div className={styles.sep} />}
              <RegisterRow
                sub={b.sub}
                desc={b.desc}
                status={b.status}
                href={b.href}
                domain={b.domain}
              />
            </Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}
