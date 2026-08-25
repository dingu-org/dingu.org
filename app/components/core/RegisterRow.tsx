import { StatusDot, type BranchStatus } from "../brand/StatusDot";

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
    <a
      href={href ?? `https://${sub}${domain}`}
      className="grid grid-cols-[200px_1fr_150px_12px] items-baseline gap-4 px-5 py-[22px] text-stone-800 transition-colors duration-100 ease-linear hover:bg-stone-100 max-sm:grid-cols-[1fr_auto] max-sm:gap-y-2 max-sm:py-[18px]"
    >
      <span className="font-mono text-sm font-medium text-signal max-sm:col-start-1 max-sm:row-start-1">
        {sub}
        <span className="text-stone-400">{domain}</span>
      </span>
      <span className="text-[15px] text-stone-600 max-sm:col-start-1 max-sm:row-start-2">
        {desc}
      </span>
      <span className="flex items-center justify-end max-sm:col-start-2 max-sm:row-start-2">
        <StatusDot status={status} />
      </span>
      <span className="self-center text-right text-[15px] leading-none text-stone-400 max-sm:col-start-2 max-sm:row-start-1">
        ›
      </span>
    </a>
  );
}
