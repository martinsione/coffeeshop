import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <ItemListContainer greeting="Este mensaje viene de ItemListContainer" />
    </div>
  );
}
