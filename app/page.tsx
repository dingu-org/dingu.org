import { Fragment } from "react";
import styles from "./page.module.css";

type Status = "alive" | "growing" | "dormant" | "pruned";

type Project = {
  sub: string;
  desc: string;
  status: Status;
  url: string;
};

const projects: Project[] = [
  {
    sub: "klaidi",
    desc: "learning by making",
    status: "growing",
    url: "https://klaidi.dingu.org",
  },
  {
    sub: "medium",
    desc: "quieting the inbox",
    status: "growing",
    url: "https://medium.dingu.org",
  },
  {
    sub: "umbra",
    desc: "feeding a calm mind",
    status: "growing",
    url: "https://umbra.dingu.org",
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#" className={styles.logo}>
            dingu
            <span className={styles.logoDot} />
            org
          </a>
          <span className={styles.trunk}>TRUNK</span>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>As little design as possible.</h1>
          <p className={styles.subtitle}>what grows under dingu.org</p>
        </div>
        <div className={styles.tableHead}>
          <span>BRANCH</span>
          <span />
          <span className={styles.tableHeadStatus}>STATUS</span>
        </div>
        {projects.map((p, i) => (
          <Fragment key={p.sub}>
            {i > 0 && <div className={styles.divider} />}
            <a href={p.url} className={styles.row}>
              <span className={styles.branch}>
                {p.sub}
                <span className={styles.branchDomain}>.dingu.org</span>
              </span>
              <span className={styles.desc}>{p.desc}</span>
              <span className={styles.status}>
                <span className={`${styles.dot} ${styles[p.status]}`} />
                {p.status}
              </span>
            </a>
          </Fragment>
        ))}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© {year} dingu.org</span>
          <span>one tree, many branches</span>
        </div>
      </footer>
    </div>
  );
}
