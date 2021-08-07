import { useState, useEffect } from "react";

function fetchData(data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 2000);
  });
}

export default function useFetchItems(data) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetchData(data)
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, [data]);

  return {
    items,
  };
}
