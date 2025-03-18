import type { User } from "@/types/user";
import { create } from "zustand";

export type AuthStoreState = {
    user: User | null;
    setUser: (user: User | null) => void;
};

export const useAuthStore = create<AuthStoreState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
}));
