import {ProductEntity} from '../entities/ProductEntity.js'

export class ProductRepository {
  /** 
   * @property {import('../infrastructure/FakeApiClient.js').FakeApiClient} client 
   */
  client
  /** @param {import('../infrastructure/FakeApiClient.js').FakeApiClient} client */
  constructor(client) {
    this.client = client
  }
  
  /**
   * @return {Promise<import('../entities/ProductEntity.js').ProductEntity[]>}
   */
  async getProducts() {
    const response = await this.client.get({
      path: '/products'
    })
    if(!Array.isArray(response)) {
      throw new Error('Error: No se pudiron obtener los productos')
    }
    const products = response.map(product => {
      return new ProductEntity(product)
    })
    return products
  }
}
