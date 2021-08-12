import Navbar from "./components/Navbar";
// import ItemListContainer from "./components/ItemListContainer";
// import ItemList from "./components/ItemList";
import useFetchItems from "./hooks/useFetchItems";
import coffeeList from "./mocks/itemList.json";

import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {
  const coffeItems = useFetchItems(coffeeList);
  console.log(coffeItems);

  return (
    <>
      <div className="max-w-7xl mx-auto md:px-8">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4">
          {/* <ItemListContainer>
            {coffeItems === "loading" ? (
              <div className="loading-spinner"></div>
            ) : (
              <ItemList items={coffeItems} />
            )}
          </ItemListContainer> */}

          {coffeItems === "loading" ? (
            <div className="loading-spinner"></div>
          ) : (
            <ItemDetailContainer item={coffeItems[0]} />
          )}
        </main>
      </div>
    </>
  );
}
