import ItemList from "./ItemList";
import Loader from "./Loader";

export default function ItemListContainer({ itemList }) {
  return (
    <div className="flex flex-wrap justify-center">
      {itemList === "loading" ? <Loader /> : <ItemList items={itemList} />}
    </div>
  );
}
