import { useParams, useLocation, Link } from "react-router-dom";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import Loader from "./Loader";

export default function ItemListContainer({ itemList }) {
  const { id } = useParams();

  const pathName = useLocation().pathname;
  if (id !== undefined && itemList !== "loading") {
    if (pathName === `/search/${id}`) {
      itemList = itemList.filter((item) =>
        item.title.toLowerCase().includes(id.toLowerCase())
      );
    }
    if (pathName === `/category/${id}`) {
      // Primero filtro para tener solo los items que tienen category
      itemList = itemList.filter((item) => item.category);
      // Con .every() itera el array y me devuelve otro array que incluye el id
      itemList = itemList.filter((item) =>
        item.category.every((category) => category.includes(id))
      );
    }
  }

  return (
    <div className="">
      {itemList === "loading" ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4 p-2">
            <Sidebar />
          </div>
          <div className="flex flex-wrap flex-grow lg:w-3/4">
            {itemList.length === 0 ? (
              <div className="flex flex-col items-center mx-auto mt-8">
                <h2 className="font-medium tracking-tight text-2xl md:text-4xl p-2 mb-4">
                  No items found
                </h2>
                <Link
                  className="font-medium rounded text-lg md:text-xl  bg-gray-100 dark:bg-gray-900 p-2"
                  to="/"
                >
                  Go back home
                </Link>
              </div>
            ) : (
              <ItemList items={itemList} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
