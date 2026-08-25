export type BranchStatus = "alive" | "growing" | "dormant" | "pruned";

type ProjectItemProps = {
  name: string;
  desc: string;
  status: BranchStatus;
  href: string;
};

export function ProjectItem({ name, desc, status, href }: ProjectItemProps) {
  return (
    <div className="flex flex-col items-start gap-3 text-sm/relaxed text-black sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <p>
          <span className="font-medium">{name}</span>
          <span aria-hidden="true" className="mx-2 text-stone-400">
            ·
          </span>
          <span className="text-stone-500">{status}</span>
        </p>
        <p className="mt-0.5 text-pretty">{desc}</p>
      </div>
      <a
        href={href}
        aria-label={`visit ${name}`}
        className="w-full flex-none rounded-md border border-stone-300 px-3 py-1.5 text-center transition-colors duration-100 ease-linear hover:bg-wash sm:w-auto"
      >
        visit
      </a>
    </div>
  );
}
