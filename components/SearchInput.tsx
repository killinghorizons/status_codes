"use client";

import { twMerge as tw } from "tailwind-merge";
import useStore from "@/store/store";

const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="search" className="text-sm mb-2 block">
        Search
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
        className={tw(
          "w-full px-2 py-4 rounded-md border border-border",
          "outline-none block"
        )}
      />
    </div>
  );
};

export default SearchInput;
