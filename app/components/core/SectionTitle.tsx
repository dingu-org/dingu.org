import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  as?: "h1" | "h2";
};

export function SectionTitle({ children, as: Tag = "h2" }: SectionTitleProps) {
  return <Tag className="text-sm font-medium text-black">{children}</Tag>;
}
