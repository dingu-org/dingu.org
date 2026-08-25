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
      className="grid grid-cols-[minmax(0,1fr)_84px_12px] items-baseline gap-4 px-5 py-4 text-black transition-colors duration-100 ease-linear hover:bg-wash max-sm:grid-cols-[minmax(0,1fr)_auto] max-sm:gap-y-1"
    >
      <span className="truncate font-mono text-sm font-normal max-sm:col-start-1 max-sm:row-start-1">
        {sub}
        <span>{domain}</span>
      </span>
      <span className="flex items-center justify-end max-sm:col-start-1 max-sm:row-start-2 max-sm:justify-start">
        <StatusDot status={status} />
      </span>
      <span
        aria-hidden="true"
        className="self-center text-right text-xs leading-none max-sm:col-start-2 max-sm:row-start-1"
      >
        ›
      </span>
    </a>
  );
}
