import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Orders from "./components/Orders";

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <main className="mt-2 lg:mt-8">
          <Switch>
            <Route exact path="/" component={ItemListContainer} />

            <Route exact path="/category/:id" component={ItemListContainer} />

            <Route exact path="/search/:id" component={ItemListContainer} />

            <Route exact path="/item/:id" component={ItemDetailContainer} />

            <Route exact path="/cart" component={Cart} />

            <Route exact path="/checkout" component={Checkout} />

            <Route exact path="/orders" component={Orders} />

            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
