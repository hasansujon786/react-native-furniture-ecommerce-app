class Product {
  constructor(id, sid, title, longTitle, imgPreview, price, discount, quantity, isAvalable, descriptions) {
    this.id = id
    this.sid = sid
    this.title = title
    this.imgPreview = imgPreview
    this.longTitle = longTitle
    this.price = price
    this.discount = discount
    this.quantity = quantity
    this.isAvalable = isAvalable
    this.descriptions = descriptions
  }
}

export default Product
