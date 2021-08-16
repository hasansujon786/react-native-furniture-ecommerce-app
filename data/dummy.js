import Product from '../models/product'
import Cart from '../models/cart'

export const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Storage Drawer and Fixed Shelf',
    'Signature Design by Ashley Tyler Creek Rustic End Table with Storage Drawer and Fixed Shelf, Brown & Black',
    'https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg',
    29.99,
    20,
    10,
    true,
    [],
  ),
  new Product(
    'p2',
    'u1',
    'Storage Drawer and Fixed Shelf',
    'Signature Design by Ashley Tyler Creek Rustic End Table with Storage Drawer and Fixed Shelf, Brown & Black',
    'https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg',
    29.99,
    20,
    10,
    true,
    [],
  ),
  new Product(
    'p2',
    'u1',
    'Storage Drawer and Fixed Shelf',
    'Signature Design by Ashley Tyler Creek Rustic End Table with Storage Drawer and Fixed Shelf, Brown & Black',
    'https://m.media-amazon.com/images/I/71ICpn3ZyML._AC_UL320_.jpg',
    29.99,
    20,
    10,
    true,
    [],
  ),
]

export const CART_ITEMS = [
  new Cart(
    'p1',
    'Red Shirt',
    29.99,
    'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
    1
  ),
  new Cart(
    'p2',
    'Blue Carpet',
    29.99,
    'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    1
  ),
  new Cart(
    'p3',
    'Coffee Mug',
    29.99,
    'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
    1
  ),
  new Cart(
    'p4',
    'Coffee Mug',
    29.99,
    'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
    1
  ),
]
