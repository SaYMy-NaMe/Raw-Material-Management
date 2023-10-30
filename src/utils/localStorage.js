export const getStoredData = (key = "key") =>
  JSON.parse(localStorage.getItem(`${key}`));

export const setStoredData = (key = "", data = {}) =>
  localStorage.setItem(`${key}`, JSON.stringify(data));

export const removeStorageData = (key = "key") =>
  localStorage.removeItem(`${key}`);
