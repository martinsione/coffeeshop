import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemList from "./components/ItemList";
import useFetchItems from "./hooks/useFetchItems";
import coffeeList from "./mocks/itemList.json";

export default function App() {
  const { items } = useFetchItems(coffeeList);

  return (
    <div className="max-w-7xl mx-auto md:px-8">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4">
        <ItemListContainer>
          {items === "loading" ? (
            <div className="loading-spinner"></div>
          ) : (
            <ItemList items={items} />
          )}
        </ItemListContainer>
      </div>
    </div>
  );
}
