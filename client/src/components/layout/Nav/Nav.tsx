import NavLink from "./NavLink";
import { FiShoppingCart } from "react-icons/fi";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b-noir bg-raven backdrop-blur-md">
      <div className="flex justify-between max-w-7xl my-0 mx-auto py-0 px-8 items-center h-16 text-white">
        <a
          href="#"
          className="font-fraunces text-[1.375rem] font-semibold no-underline tracking-tight text-milk"
        >
          GROOVEHAUS
        </a>
        <div className="flex gap-8 items-center">
          {["Shop", "Vinyl", "Hardware", "About"].map((label) => (
            <NavLink key={label} href={`/${label.toLowerCase()}`}>
              {label}
            </NavLink>
          ))}
        </div>
        <button className="relative flex items-center gap-2 py-2 px-4.5 bg-transparent border border-noir text-milk font-mono text-[0.7rem] tracking-widest transition-colors duration-200 hover:text-vibrant-amber hover:border-vibrant-amber cursor-pointer">
          <FiShoppingCart size={14} />
          CART
        </button>
      </div>
    </nav>
  );
}
