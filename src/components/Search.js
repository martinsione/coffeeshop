import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useHistory } from "react-router-dom";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.length > 0) {
      history.push(`/search/${searchValue}`);
    }
  };

  return (
    <form
      onKeyDown={handleKeyDown}
      onSubmit={handleSubmit}
      className="w-full max-w-xl flex justify-between items-center border rounded bg-gray-100 dark:bg-gray-900 mx-4"
    >
      <input
        className="w-full bg-gray-100 dark:bg-gray-900 focus:outline-none p-2"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="font-bold text-xl p-2">
        <IoSearch />
      </button>
    </form>
  );
}
