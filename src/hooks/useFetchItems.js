import { useEffect, useState } from "react";
import { getItems } from "../lib/firebase";
import { sortArray } from "../lib/sortArray";

export default function useFetchItems(collectionName) {
  const [items, setItems] = useState("loading");

  useEffect(() => {
    getItems(collectionName)
      .then((data) => setItems(sortArray(data, "price")))
      .catch((e) => console.error(e));
  }, [collectionName]);

  return items;
}
