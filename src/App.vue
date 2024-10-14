<!-- src/App.vue -->
<template>
  <DefaultLayout>
    <router-view />
    <!-- 페이지가 여기에 동적으로 렌더링됨 -->
  </DefaultLayout>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout.vue'

export default {
  components: {
    DefaultLayout,
  },
}
</script>

<style>
/* 간단한 스타일 추가 */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}
</style>
