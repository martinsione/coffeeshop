import Item from "./Item";

export default function ItemList({ items }) {
  return (
    <div className="flex flex-wrap justify-center">
      {items.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          pictureUrl={item.pictureUrl}
        />
      ))}
    </div>
  );
}
