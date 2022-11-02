import { getCookie, setCookie, removeCookie } from "../shared/cookie.service";
const ID_TOKEN_KEY = "id_token";

export const getToken = (): string => getCookie(ID_TOKEN_KEY) as string;

export const saveToken = (token: string): void => {
  console.log(token);
  setCookie(ID_TOKEN_KEY, token);
};

export const destroyToken = (): void => {
  removeCookie(ID_TOKEN_KEY);
};

export default { getToken, saveToken, destroyToken };
