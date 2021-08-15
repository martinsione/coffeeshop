import { Link, useLocation } from "react-router-dom";

export default function NotFound({ message }) {
  const currentPath = useLocation().pathname;
  return (
    <div className="flex flex-col justify-center items-center mt-36">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 md:mb-8">
        404 - Page not found
      </h1>
      <h4 className="text-lg md:text-xl mb-12 md:mb-20">
        {message || `The url: "${currentPath}" was not found.`}
      </h4>
      <Link
        className="px-20 py-4 md:text-lg rounded font-bold bg-gray-100 dark:bg-gray-900"
        to="/"
      >
        Return Home
      </Link>
    </div>
  );
}
