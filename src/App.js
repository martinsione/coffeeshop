import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function App() {
  return (
    <div className="max-w-6xl mx-auto md:px-8">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4">
        <ItemListContainer greeting="Este mensaje viene de ItemListContainer" />
        <ItemCount
          initialValue={1}
          stock={5}
          title="Title"
          onAdd={(count) => console.log(`${count} items added`)}
        />
      </div>
      <span className="p-4 md:px-20 w-full max-w-6xl fixed bottom-0 flex justify-end">
        <ThemeSwitcher />
      </span>
    </div>
  );
}
