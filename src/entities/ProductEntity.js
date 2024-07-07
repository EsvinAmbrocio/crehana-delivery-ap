export class ProductEntity {
  /** @property {Number} id */
  id
  /** @property {String} id */
  title
  /** @property {Number} id */
  price
  /** @property {String} id */
  description
  /** @property {String} id */
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
    this.description = description
    this.image = image
  }
}
