import { useCookies } from "@vueuse/integrations/useCookies";

const { get, getAll, set, remove } = useCookies(["cookies-sagrada"], {
  doNotParse: false,
  autoUpdateDependencies: false,
});

export const getItem = (key: string): unknown => {
  return JSON.parse(get(key) as string);
};

export const setItem = (key: string, value: unknown): void => {
  set(key, JSON.stringify(value));
};

export const removeItem = (key: string): void => {
  remove(key);
};

export const clearAllCookies = (): void => {
  const allCookies = getAll();
  console.log(allCookies);
  allCookies.forEach((key: string) => {
    removeItem(key);
  });
};

export default { getItem, setItem, removeItem, clearAllCookies };
