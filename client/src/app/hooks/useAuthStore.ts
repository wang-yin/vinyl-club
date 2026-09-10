import { create } from "zustand";
import api from "@/lib/api";

interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: any | null;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  isLoading: true,
  user: null,
  checkAuth: async () => {
    set({ isLoading: true });
    try {
      const res = await api.get("/auth/profile", { timeout: 5000 });

      if (res.data?.user) {
        set({
          isLoggedIn: true,
          user: res.data.user,
          isLoading: false,
        });
      } else {
        set({ isLoggedIn: false, user: null, isLoading: false });
      }
    } catch (err) {
      console.log("驗證失敗、連線逾時或未登入：", err);
      set({ isLoggedIn: false, user: null, isLoading: false });
    }
  },
}));
