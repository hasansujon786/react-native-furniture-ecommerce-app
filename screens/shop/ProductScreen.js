import React from 'react'
import { Box } from 'native-base'
import { PRODUCTS } from '../../data/dummy'

const ProductScreen = ({ navigation, route }) => {
  const foundProduct = PRODUCTS.find(pod => pod.id == route.params.productId)

  return (
    <Box>
      {foundProduct.title}
    </Box>
  )
}

export default ProductScreen
