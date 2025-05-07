"use client";
import { twMerge as tw } from "tailwind-merge";
import useStore from "@/store/store";

const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearInput = () => {
    setSearchQuery("");
  };

  return (
    <div>
      <label htmlFor="search" className="text-sm mb-2 block">
        Search
      </label>
      <div
        className={tw(
          "focus:border-foreground",
          "flex justify-between w-full rounded-md border border-border py-2"
        )}
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by code, name or category."
          value={searchQuery}
          onChange={handleChange}
          className="outline-none block pl-2 w-full"
        />
        <button
          type="reset"
          className="cursor-pointer w-10 h-10 flex items-center justify-center"
          onClick={clearInput}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
