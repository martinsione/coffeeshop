import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import NotFound from "./NotFound";

export default function ItemDetailContainer({ item }) {
  const { id } = useParams();

  if (item !== "loading") {
    item = item.find((item) => item.id === id);
  }

  return (
    <>
      {item === "loading" ? (
        <Loader />
      ) : item ? (
        <ItemDetail item={item} />
      ) : (
        <NotFound message={`Item "${id}" was not found.`} />
      )}
    </>
  );
}
