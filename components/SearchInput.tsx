import { twMerge as tw } from "tailwind-merge";

const SearchInput = ({ search, setSearch }) => {
  return (
    <div className="mb-4">
      <label htmlFor="search" className="text-sm mb-2 block">
        Search
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder=""
        className={tw(
          "w-full px-2 py-4 rounded-md border border-border",
          "outline-none block"
        )}
      />
    </div>
  );
};

export default SearchInput;
