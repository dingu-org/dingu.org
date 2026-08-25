type WordmarkProps = {
  href?: string;
  className?: string;
};

export function Wordmark({ href, className }: WordmarkProps) {
  const classes = `inline-flex items-baseline font-sans font-medium ${
    className ?? "text-base"
  }`;
  const children = (
    <>
      dingu
      <span className="mx-[0.03em] inline-block size-[0.14em] rounded-full bg-signal" />
      org
    </>
  );
  return href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <span className={classes}>{children}</span>
  );
}
