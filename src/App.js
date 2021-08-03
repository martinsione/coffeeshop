import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto md:px-8">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4">
        <ItemListContainer greeting="Este mensaje viene de ItemListContainer" />
        <ItemCount initial={1} stock={5} title="Title" />
      </div>
    </div>
  );
}
