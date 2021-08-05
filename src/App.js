import Navbar from "./components/Navbar";
// import ItemListContainer from "./components/ItemListContainer";
import ItemList from "./components/ItemList";
import { items } from "./mocks/items";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto md:px-8">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4">
        {/* <ItemListContainer greeting="Este mensaje viene de ItemListContainer" /> */}
        <ItemList items={items} />
      </div>
    </div>
  );
}
