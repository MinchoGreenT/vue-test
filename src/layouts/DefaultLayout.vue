<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div>
    <Header />
    <main>
      <slot />
      <!-- 페이지가 여기에 삽입됨 -->
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style scoped>
main {
  padding: 20px;
}
</style>
