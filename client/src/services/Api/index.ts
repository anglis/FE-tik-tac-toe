class Api {
  url: string;

  constructor({ url }: any) {
    this.url = url;
  }

  private request(url: any, params: any) {
    localStorage.setItem(url, params);

    return Promise.resolve();
  }

  post(url: any, params?: any) {
    return this.request(url, params);
  }

  get(url: any, params?: any) {
    return this.request(url, params);
  }
}

export default Api;
