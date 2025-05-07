import { create } from "zustand";

const useStore = create((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  categoryFilter: "",
  setCategoryFilter: (category: string) => set({ categoryFilter: category }),
}));

export default useStore;
