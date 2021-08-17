import { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="wfull flex justify-between items-center border rounded bg-gray-100 dark:bg-gray-900 mx-4"
    >
      <input
        className="w-full bg-gray-100 dark:bg-gray-900 focus:outline-none p-2"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Link
        className="font-bold text-xl p-2"
        disabled={true}
        to={`/search/${searchValue}`}
      >
        <IoSearch />
      </Link>
    </form>
  );
}
