export class ProductEntity {
  /** @property {Number} id */
  id
  /** @property {String} title */
  title
  /** @property {Number} price */
  price
  /** @property {String} description */
  description
  /** @property {String} image */
  image
  /**
   * @param {{
   *  id: Number,
   *  title: String,
   *  price: Number,
   *  description: String,
   *  image: String
   * }}
   */
  constructor({id, title, price, description, image}) {
    this.id = id
    this.title = title
    this.price = price
    this.description = String(description ?? '')
    this.image = image
  }

  get shortDescription() {
    let shortDescription = this.description.slice(0, 50)
    shortDescription += '...'
    return shortDescription
  }
}
