import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getItemById, getItems } from "../lib/firebase";
import { sortArray } from "../lib/sortArray";

export default function useFetchItems(collection) {
  const [items, setItems] = useState("loading");
  const { id: query } = useParams();
  const pathName = useLocation().pathname;

  const fetchData = async () => {
    try {
      let res;
      switch (pathName) {
        case `/category/${query}`:
          res = await getItems(collection, "category", "array-contains", query);
          break;
        case `/search/${query}`:
          res = await getItems(collection);
          res = res.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          );
          break;
        case `/item/${query}`:
          res = await getItemById(collection, query);
          return setItems(res);
        default:
          res = await getItems(collection);
      }
      return setItems(sortArray(res, "price"));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return items;
}
