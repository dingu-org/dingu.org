import { Fragment } from "react";
import { Wordmark } from "./components/brand/Wordmark";
import type { BranchStatus } from "./components/brand/StatusDot";
import { RegisterRow } from "./components/core/RegisterRow";

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
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-screen-sm flex-1 px-6 py-24">
        <div className="pb-12">
          <div className="mb-4">
            <Wordmark href="https://dingu.org" />
          </div>
          <h1 className="max-w-[700px] text-sm font-medium text-pretty">
            As little design as possible.
          </h1>
          <p className="mt-1 max-w-[560px] text-sm/relaxed text-pretty text-stone-600">
            One tree, many branches. What grows under dingu.org: projects, each
            in its own space, planted small, growing at its own pace, and kept
            deliberately simple.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white">
          {branches.map((b, i) => (
            <Fragment key={b.sub}>
              {i > 0 && <div className="mx-5 border-t border-stone-200" />}
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
