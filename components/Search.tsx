"use client";

import { useSearchStore } from "@/store/store";

function Search() {
  const { searchHousesValue, setSearchHousesValue } = useSearchStore();

  return (
    <input
      type="search"
      value={searchHousesValue}
      onChange={(e) => setSearchHousesValue(e.target.value)}
      placeholder={"Search Houses"}
      className={`h-[60px] w-[300px] border border-gray-300 ring-border-blue-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-600 text-md px-4 py-2 transition duration-200 ease-in-out`}
    />
  );
}

export default Search;
