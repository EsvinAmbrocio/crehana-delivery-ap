export class FakeApiClient {
  /** @property {String} url */
  url

  constructor() {
    this.url = 'https://fakestoreapi.com/'
  }

  /**
   *
   * @param {{path:String, query:Object, headers:Object}}
   * @return {Promise}
   */
  async get({path, query={}, headers={}}) {
    if(!URL.canParse(path, this.url)) {
      throw new Error("Error: Ruta no valida.")
    }
    const url = new URL(path, this.url)
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.set(key, value)
    })
    const response = await fetch(url.toString(), {
      headers
    })
    if(response.status < 200 ||  response.status >=300) {
      throw new Error("Error: Ups")
    }
    return response.json()
  }
}
