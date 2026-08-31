import Link from "next/link";

export default function GoldLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="py-3.5 px-8 bg-vibrant-amber text-bg font-sans font-semibold text-[0.875rem] inline-block tracking-[0.04em] no-underline transition-colors duration-200 hover:bg-yakitori"
    >
      {children}
    </Link>
  );
}
