<template>
  <div class="container">
    <form class="field has-addons my-4" @submit.prevent="searchProducts">
      <div class="control is-expanded">
        <input class="input" 
          v-model="search"
          type="text" 
          placeholder="Find a Product">
      </div>
      <div class="control">
        <button class="button is-info">
          Search
        </button>
      </div>
    </form>
    <div class="fixed-grid has-2-cols-mobile has-4-cols-tablet has-5-cols-desktop">
      <div class="grid">
        <product-card v-for="(product, index) in filteredProducts"
          class="cell"
          :key="index"
          :product="product"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'
import { computed, onMounted, ref } from 'vue'
import { FakeApiClient } from '../infrastructure/FakeApiClient.js'
import { ProductRepository } from '../repositories/ProductRepository.js'

const fakeApiClient = new FakeApiClient()
const productRepository = new ProductRepository(fakeApiClient)
const products = ref([])
const search = ref('')

onMounted( async () => {
  await getProducts()
})

async function getProducts() {
  products.value = await productRepository.getProducts()
}
const filteredProducts = computed(() => {
  return products.value.filter(product => {
    return String(product.title).includes(search.value)
  })
})
</script>
