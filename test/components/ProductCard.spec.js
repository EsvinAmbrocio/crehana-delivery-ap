import { render, screen, cleanup, fireEvent } from '@testing-library/vue'
import {describe, it} from 'vitest'
import ProductCard from '../../src/components/ProductCard.vue'
import {ProductEntity} from '../../src/entities/ProductEntity'

describe('<ProductCard />', () => {
  it('render componet', () => {
    let product = new ProductEntity({
      id: 1,
      title: 'Random #1',
      description: 'Random Description',
      price: 90,
      image: '/vite.svg'
    })
    render(ProductCard, {
      props: {
        product
      }
    })
    screen.getByText(product.title)
    screen.getByText(product.description)
    screen.getByText(`Precio Q. ${product.price}`)
  })
})
