export type BranchStatus = "alive" | "growing" | "dormant" | "pruned";

type StatusDotProps = {
  status?: BranchStatus;
  showLabel?: boolean;
};

const dotColor: Record<BranchStatus, string> = {
  alive: "bg-signal",
  growing: "bg-signal animate-pulse",
  dormant: "bg-stone-400",
  pruned: "bg-stone-200",
};

export function StatusDot({ status = "growing", showLabel = true }: StatusDotProps) {
  const dot = (
    <span className={`size-[7px] flex-none rounded-full ${dotColor[status]}`} />
  );
  if (!showLabel) {
    return <span className="inline-flex">{dot}</span>;
  }
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.04em] text-stone-600">
      {dot}
      {status}
    </span>
  );
}
