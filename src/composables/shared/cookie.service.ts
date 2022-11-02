import { useCookies } from "@vueuse/integrations/useCookies";

const { get, getAll, set, remove } = useCookies(["cookies-sagrada"], {
  doNotParse: false,
  autoUpdateDependencies: false,
});

export const getCookie = (key: string): unknown => get(key);

export const setCookie = (key: string, value: unknown): void => {
  set(key, value);
};

export const removeCookie = (key: string): void => {
  remove(key);
};

export const clearAllCookies = (): void => {
  const allCookies = getAll();
  console.log(allCookies);
  allCookies.forEach((key: string) => {
    removeCookie(key);
  });
};

export default { getCookie, setCookie, removeCookie, clearAllCookies };
