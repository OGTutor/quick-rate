export const API_URL = `${process.env.APP_URL}/api`;
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`;

export const getTopPageMenuUrl = (string: string) => `/top-page${string}`;
export const getTopPageUrl = (string: string) => `/top-page/by-alias${string}`;
export const getFindProductUrl = (string: string) => `/product/find${string}`;
