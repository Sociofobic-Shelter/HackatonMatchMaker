import {create} from "zustand/react";

interface AuthState {
    auth: boolean;
    onLogin: (auth: boolean) => void;
}

export const useAuth = create<AuthState>((set) => ({
    auth: false,
    onLogin: (auth: boolean) => set(() => ({auth: auth})),
}))