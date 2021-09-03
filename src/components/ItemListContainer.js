import useFetchItems from "../hooks/useFetchItems";
import ItemList from "./ItemList";
import Loader from "./Loader";
import NotFound from "./NotFound";
import Sidebar from "./Sidebar";

export default function ItemListContainer() {
  const items = useFetchItems("products");

  return (
    <>
      {items === "loading" ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4 my-2">
            <Sidebar />
          </div>
          {items.length ? (
            <div className="flex flex-wrap lg:w-3/4">
              <ItemList items={items} />
            </div>
          ) : (
            <NotFound message="There are no items that matches this category" />
          )}
        </div>
      )}
    </>
  );
}
