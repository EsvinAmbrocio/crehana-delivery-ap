<template>
  <div class="container">
    <div class="fixed-grid has-5-cols">
      <div class="grid">
        <product-card v-for="(product, index) in products" 
          class="cell"
          :key="index" 
          :product="product"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'
import { onMounted, ref } from 'vue'
import { FakeApiClient } from '../infrastructure/FakeApiClient.js'
import { ProductRepository } from '../repositories/ProductRepository.js'

const fakeApiClient = new FakeApiClient()
const productRepository = new ProductRepository(fakeApiClient)
const products = ref([])

onMounted( async () => {
  await getProducts()
})

async function getProducts() {
  products.value = await productRepository.getProducts()
}
</script>
