import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useHistory } from "react-router-dom";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.length > 0) {
      history.push(`/search/${searchValue}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex justify-between items-center border rounded bg-gray-100 dark:bg-gray-900 mx-4"
    >
      <input
        className="w-full bg-gray-100 dark:bg-gray-900 focus:outline-none p-2"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        aria-label="Search"
        className="font-bold text-xl p-2"
        type="submit"
      >
        <IoSearch />
      </button>
    </form>
  );
}
