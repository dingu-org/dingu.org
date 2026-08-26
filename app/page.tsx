import Image from "next/image";
import { ProjectItem, type BranchStatus } from "./components/core/ProjectItem";
import { SectionTitle } from "./components/core/SectionTitle";

type Branch = {
  name: string;
  desc: string;
  href: string;
  status: BranchStatus;
};

const branches: Branch[] = [
  {
    name: "klaidi",
    desc: "personal site and portfolio",
    href: "https://klaidi.dingu.org",
    status: "growing",
  },
  {
    name: "medium",
    desc: "appointment assistant for WhatsApp",
    href: "https://medium.dingu.org",
    status: "growing",
  },
  {
    name: "umbra",
    desc: "mindfulness through museum art",
    href: "https://umbra.dingu.org",
    status: "growing",
  },
  {
    name: "in other words",
    desc: "editorial strategy and copy editing",
    href: "https://breakandanga.vercel.app",
    status: "alive",
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
          Every project here is cultivated by or with dingu.org. Each planted
          small. Some grow into tools.
        </p>
        <SectionTitle>Projects</SectionTitle>
        <ul className="mt-6 space-y-8">
          {branches.map((b) => (
            <li key={b.name}>
              <ProjectItem
                name={b.name}
                desc={b.desc}
                href={b.href}
                status={b.status}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
