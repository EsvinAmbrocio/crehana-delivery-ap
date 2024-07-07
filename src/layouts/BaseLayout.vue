<template>
  <header class="py-5">
    <nav class="level container">
      <h1 class="level-item is-size-1 is-uppercase">
        My Orden Now
      </h1>
      <p class="level-item has-text-right">
        <figure class="image is-96x96  is-clickable" @click="displayChange">
          <img class="is-rounded" src="https://i.pravatar.cc/300" >
        </figure>
      </p>
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
  </footer>
  <div class="modal" :class="{'is-active': isModalActive}">
    <div class="modal-background"></div>
    
    <div class="modal-content">
      
      <aside class="menu box">
        <p class="menu-label is-clickable">Mi perfil</p>
        <p class="menu-label is-clickable">Mis direcciones</p>
        <p class="menu-label is-clickable">Mis tarjetas</p>
        <p class="menu-label is-clickable has-text-danger-darck">Cerrar sesión</p>
      </aside>
    </div>
    
    <button class="modal-close is-large" aria-label="close" @click="displayChange"></button>
  </div>
</template>

<script setup>
import {  onMounted, onUnmounted, ref } from 'vue'
const isModalActive = ref(false)

onMounted(() => {
  document.addEventListener('keydown', closeModal)
  const bgElemnt = document.querySelector('.modal-background')
  if(bgElemnt instanceof HTMLElement){
    bgElemnt.addEventListener('click', closeModal)
  }
})
onUnmounted(() => {
  document.removeEventListener('keydown', closeModal)
  const bgElemnt = document.querySelector('.modal-background')
  if(bgElemnt instanceof HTMLElement){
    bgElemnt.removeEventListener('click', closeModal)
  }
})
function closeModal(e) {
  if(e.code === "Escape" || e.type === "click") {
    isModalActive.value = false
  }
}
function displayChange() {
  isModalActive.value = !isModalActive.value
}
</script>
