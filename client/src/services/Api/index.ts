import axios from "axios";
export type Method = "POST" | "PUT" | "GET" | "DELETE";

export interface ApiProperties {
  method?: Method;
  body?: any;
}

interface ApiConstructor {
  url: string;
}

class Api {
  url: string;

  constructor({ url }: ApiConstructor) {
    this.url = url;
  }

  request(url: any, params?: ApiProperties) {
    return axios
      .request({
        url: this.url + url,
        method: params?.method || "GET",
        data: params?.body,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.data);
  }

  post(url: any, params?: ApiProperties) {
    return this.request(url, params);
  }

  get(url: any, params?: ApiProperties) {
    return this.request(url, params);
  }
}

export default Api;
