import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import Loader from "./Loader";

export default function ItemListContainer({ itemList }) {
  const { id } = useParams();
  if (id !== undefined && itemList !== "loading") {
    // Primero filtro para tener solo los items que tienen category
    itemList = itemList.filter((item) => item.category);
    // Con .every() itera el array y me devuelve otro array que incluye el id
    itemList = itemList.filter((item) =>
      item.category.every((category) => category.includes(id))
    );
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
            <ItemList items={itemList} />
          </div>
        </div>
      )}
    </div>
  );
}
