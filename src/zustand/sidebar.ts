import { create } from "zustand";

type States = {
  status: boolean;
  mobileStatus: boolean;
};

type Actions = {
  setStatus: (status: boolean) => void;
  setMobileStatus: (status: boolean) => void;
};

export const useSidebarStore = create<States & Actions>((set) => ({
  status: true,
  mobileStatus: false,
  setStatus: (status: boolean) => set({ status }),
  setMobileStatus: (status: boolean) => set({ mobileStatus: status }),
}));
