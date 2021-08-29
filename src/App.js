import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={ItemListContainer} />

            <Route exact path="/category/:id" component={ItemListContainer} />

            <Route exact path="/search/:id" component={ItemListContainer} />

            <Route exact path="/item/:id" component={ItemDetailContainer} />

            <Route exact path="/cart" component={Cart} />

            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
