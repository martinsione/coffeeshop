import { useLocation, useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";
import NotFound from "./NotFound";
import Sidebar from "./Sidebar";

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
      itemList = itemList.filter((item) => item.category?.includes(id));
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
          {itemList.length ? (
            <div className="flex flex-wrap lg:w-3/4">
              <ItemList items={itemList} />
            </div>
          ) : (
            <NotFound message="There are no items that matches this category" />
          )}
        </div>
      )}
    </div>
  );
}
