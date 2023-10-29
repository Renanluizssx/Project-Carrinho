export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
export const setLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));