import Image from "next/image";
import type { BranchStatus } from "./components/brand/StatusDot";
import { RegisterRow } from "./components/core/RegisterRow";
import { SectionTitle } from "./components/core/SectionTitle";

type Branch = {
  sub: string;
  status: BranchStatus;
  href: string;
  domain?: string;
};

const branches: Branch[] = [
  {
    sub: "klaidi",
    status: "growing",
    href: "https://klaidi.dingu.org",
  },
  {
    sub: "medium",
    status: "growing",
    href: "https://medium.dingu.org",
  },
  {
    sub: "umbra",
    status: "growing",
    href: "https://umbra.dingu.org",
  },
  {
    sub: "breakandanga",
    status: "alive",
    href: "https://breakandanga.vercel.app",
    domain: ".vercel.app",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto w-full max-w-xl flex-1 px-6 py-24">
        <Image
          src="/brand/dingu-mark-tile.svg"
          alt=""
          width={24}
          height={24}
          className="mb-5 size-6"
          priority
        />
        <SectionTitle as="h1">dingu.org</SectionTitle>
        <p className="mt-4 max-w-[560px] pb-12 text-sm/relaxed text-pretty">
          One tree, many branches. Projects planted small under dingu.org. Some
          grow into tools.
        </p>
        <SectionTitle>Projects</SectionTitle>
        <ul className="mt-4 overflow-hidden rounded-xl border border-stone-200 bg-white">
          {branches.map((b, i) => (
            <li key={b.sub}>
              {i > 0 && <div className="mx-5 border-t border-stone-200" />}
              <RegisterRow
                sub={b.sub}
                status={b.status}
                href={b.href}
                domain={b.domain}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
