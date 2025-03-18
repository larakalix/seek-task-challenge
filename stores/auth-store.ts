import type { User } from "@/types/user";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type AuthStoreState = {
    user: User | null;
    setUser: (user: User | null) => void;
    logout: VoidFunction;
};

export const useAuthStore = create<AuthStoreState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            logout: () => set({ user: null }),
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
