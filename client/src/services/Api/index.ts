export type Method = "POST" | "PUT" | "GET" | "DELETE";

export interface ApiProperties {
  method?: Method;
  body?: string;
}

class Api {
  url: string;

  constructor({ url }: any) {
    this.url = url;
  }

  request(url: any, params?: ApiProperties) {
    localStorage.setItem(url, JSON.stringify(params));

    return Promise.resolve();
  }

  post(url: any, params?: ApiProperties) {
    return this.request(url, params);
  }

  get(url: any, params?: ApiProperties) {
    return this.request(url, params);
  }
}

export default Api;
