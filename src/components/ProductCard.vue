<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">
        {{ props.product.title}}
      </div>
    </div>
    <div class="card-image">
      <figure class="image is-3by4">
        <img :src="props.product.image"/>
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
      {{ props.product.description}}
      </div>
    </div>
    <div class="card-footer">
      <p class="card-footer-item">
        Precio Q. {{ props.product.price }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ProductEntity } from "../entities/ProductEntity";


const props = defineProps({
  product: ProductEntity
})
</script>
