import { StatusDot, type BranchStatus } from "../brand/StatusDot";

type RegisterRowProps = {
  sub: string;
  status?: BranchStatus;
  href?: string;
  domain?: string;
};

export function RegisterRow({
  sub,
  status = "growing",
  href,
  domain = ".dingu.org",
}: RegisterRowProps) {
  return (
    <a
      href={href ?? `https://${sub}${domain}`}
      className="grid grid-cols-[1fr_84px_12px] items-baseline gap-4 px-5 py-4 text-black transition-colors duration-100 ease-linear hover:bg-stone-100 max-sm:grid-cols-[1fr_auto] max-sm:gap-y-1"
    >
      <span className="font-mono text-sm font-normal max-sm:col-start-1 max-sm:row-start-1">
        {sub}
        <span>{domain}</span>
      </span>
      <span className="flex items-center justify-end max-sm:col-start-1 max-sm:row-start-2 max-sm:justify-start">
        <StatusDot status={status} />
      </span>
      <span className="self-center text-right text-xs leading-none max-sm:col-start-2 max-sm:row-start-1">
        ›
      </span>
    </a>
  );
}
