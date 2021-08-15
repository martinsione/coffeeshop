export default function fetchData(data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 2000);
  });
}
