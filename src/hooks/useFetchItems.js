import { useState, useEffect } from "react";
import fetchData from "../mocks/fetchData";

export default function useFetchItems(data) {
  const [items, setItems] = useState("loading");

  useEffect(() => {
    fetchData(data)
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, [data]);

  return items;
}
