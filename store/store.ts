import { create } from "zustand";

const useStore = create((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));

export default useStore;
