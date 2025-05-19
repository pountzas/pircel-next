import { create } from "zustand";

type SearchStore = {
  searchHousesValue: string;
  setSearchHousesValue: (searchHousesValue: string) => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  searchHousesValue: "",
  setSearchHousesValue: (searchHousesValue) => set({ searchHousesValue })
}));
