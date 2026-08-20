export default function Btn({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="py-3.5 px-8 bg-vibrant-amber font-sans font-semibold text-sm tracking-wider inline-block no-underline [transition:background-color_0.2s] hover:bg-yakitori"
    >
      {children}
    </a>
  );
}
