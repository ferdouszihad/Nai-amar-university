const getItemFromLocalStorage = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
};

const removeItemFromLocalStorage = (key, id) => {
  let arr = getItemFromLocalStorage(key);
  arr = arr.filter((data) => data.id !== id);

  localStorage.setItem(key, JSON.stringify(arr));
  return true;
};
const clearData = (key) => {
  localStorage.removeItem(key);
};
