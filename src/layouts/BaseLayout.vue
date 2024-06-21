<template>
    <header>
      <nav class="navbar has-shadow" role="navigation" aria-label="man navigation">
        <div class="navbar-menu container p-4 is-fixed-top">
          <div class="navbar-start">
            <div class="navbar-item">
              <h1 class="title">
                My Order Now
              </h1>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
    </footer>
</template>

<script>
export default {
  setup() {
  },
}
</script>
