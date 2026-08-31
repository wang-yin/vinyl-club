import Link from "next/link";

export default function OutlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="py-3.5 px-8 border border-[#f0ece4]/25 text-milk font-sans font-medium text-[0.875rem] inline-block tracking-[0.04em] no-underline transition-colors duration-200 hover:border-milk"
    >
      {children}
    </Link>
  );
}
