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
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Wordmark href="https://dingu.org" />
          <span className={styles.trunk}>TRUNK</span>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.statement}>
          <h1 className={styles.title}>As little design as possible.</h1>
          <p className={styles.subtitle}>what grows under dingu.org</p>
        </div>
        <div className={styles.group}>
          {branches.map((b, i) => (
            <Fragment key={b.sub}>
              {i > 0 && <div className={styles.sep} />}
              <RegisterRow sub={b.sub} desc={b.desc} status={b.status} href={b.href} />
            </Fragment>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.copyright}>
            © {year} <a href="https://dingu.org">dingu.org</a>
          </span>
          <span>one tree, many branches</span>
        </div>
      </footer>
    </div>
  );
}
