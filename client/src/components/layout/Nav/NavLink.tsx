export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="font-sans text-[0.875rem] no-underline tracking-[0.02em] transition-colors duration-200 text-hurricane hover:text-milk"
    >
      {children}
    </a>
  );
}
