import { useParams } from "react-router-dom";
import Loader from "./Loader";
import ItemDetail from "./ItemDetail";
import NotFound from "./NotFound";

export default function ItemDetailContainer({ item }) {
  const { id } = useParams();
  let newItem;

  if (item !== "loading") {
    newItem = item.find((item) => item.id === id);
  }

  return (
    <>
      {item === "loading" ? (
        <Loader />
      ) : newItem ? (
        <ItemDetail item={newItem} />
      ) : (
        <NotFound message={`Item "${id}" was not found.`} />
      )}
    </>
  );
}
