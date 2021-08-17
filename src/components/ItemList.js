import { Link } from "react-router-dom";
import Item from "./Item";

export default function ItemList({ items }) {
  const handleAdd = () => {};

  return (
    <>
      {items.map((item) => (
        <Link
          className="sm:w-1/2 lg:w-1/3 p-2"
          key={item.id}
          to={`/item/${item.id}`}
        >
          <Item
            title={item.title}
            description={item.description}
            price={item.price}
            pictureUrl={item.pictureUrl}
            onAdd={handleAdd}
          />
        </Link>
      ))}
    </>
  );
}
