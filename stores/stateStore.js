import { create } from "zustand";

const useStateStore = create((set) => ({
  introDone: false,
  flashOn: true,
  toggleFlash: () => set((state) => ({ flashOn: !state.flashOn })),
  setIntroDone: () => set({ introDone: true }),
}));
export default useStateStore;
