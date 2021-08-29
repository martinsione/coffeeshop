export const sortArray = (array, property, order) => {
  if (order === "desc" || order === "descending") {
    return array.sort((a, b) => (a[property] > b[property] ? -1 : 1));
  } else {
    return array.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  }
};
