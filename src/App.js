import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";

import useFetchItems from "./hooks/useFetchItems";
import coffeeList from "./mocks/itemList.json";

export default function App() {
  const fetchedItems = useFetchItems(coffeeList);

  return (
    <BrowserRouter>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/">
              <ItemListContainer itemList={fetchedItems} />
            </Route>

            <Route exact path="/category/:id">
              <ItemListContainer itemList={fetchedItems} />
            </Route>

            <Route exact path="/search/:id">
              <ItemListContainer itemList={fetchedItems} />
            </Route>

            <Route exact path="/item/:id">
              <ItemDetailContainer item={fetchedItems} />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}
