import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/hooks/useAuthStore";

export default function UserDropdown({ user, setIsDropdownOpen }) {
  const router = useRouter();
  const { checkAuth } = useAuthStore();

  const menuItems = [
    { label: "My Orders", action: () => setIsDropdownOpen(false) },
    { label: "Wishlist", action: () => setIsDropdownOpen(false) },
    { label: "Settings", action: () => setIsDropdownOpen(false) },
  ];

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      setIsDropdownOpen(false);

      useAuthStore.setState({
        isLoggedIn: false,
        user: null,
        isLoading: false,
      });

      router.refresh();
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <>
      <div className="absolute top-[calc(100%+8px)] right-0 bg-king-kong border border-noir min-w-50 z-50">
        <div className="px-5 py-4 border-b-noir border-b">
          <p className="font-fraunces text-[0.9375rem] font-medium">
            {user!.name}
          </p>
          <p className="font-mono text-[0.65rem] text-hurricane mt-0.5 tracking-wider">
            {user!.email}
          </p>
        </div>
        {menuItems.map(({ label, action }) => (
          <button
            className="block w-full px-5 py-4 border-none bg-none text-hurricane font-sans text-[0.875rem] text-left cursor-pointer transition-colors duration-200 hover:text-milk hover:bg-wood-bark"
            key={label}
            onClick={action}
          >
            {label}
          </button>
        ))}
        <div className="border-t border-t-noir">
          <button
            className="block w-full px-5 py-4 border-none bg-none text-hurricane font-sans text-[0.875rem] text-left cursor-pointer transition-colors duration-200 hover:text-[#e05c5c] hover:bg-wood-bark"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}
