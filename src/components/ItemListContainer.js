import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";

export default function ItemListContainer({ itemList }) {
  const { id } = useParams();
  if (id !== undefined && itemList !== "loading") {
    itemList = itemList.filter((itemList) => id === itemList.category);
  }

  return (
    <div className="flex flex-wrap justify-center">
      {itemList === "loading" ? <Loader /> : <ItemList items={itemList} />}
    </div>
  );
}
