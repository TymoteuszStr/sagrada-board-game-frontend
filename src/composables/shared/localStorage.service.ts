export const getItem = (key: string): unknown => {
  return JSON.parse(window.localStorage.getItem(key) as string);
};

export const setItem = (key: string, value: unknown): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key: string): void => {
  window.localStorage.removeItem(key);
};

export const clearLocalStorage = (): void => {
  localStorage.clear();
};

export default { getItem, setItem, removeItem, clearLocalStorage };
