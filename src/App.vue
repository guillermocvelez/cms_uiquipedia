<template>
  <div v-if="route.fullPath == '/login'">
    <div>
      <RouterView />
    </div>
  </div>
  <div v-else class="app-container">
    <aside>
      <AsideNabvarLayout/>
    </aside>
    <main class="wrapper">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView,useRoute } from 'vue-router';
import AsideNabvarLayout from './layout/AsideNabvarLayout.vue';

const route = useRoute();


</script>
  

<style scoped>

.app-container {
  display: flex;
  max-height: 100vh;
  gap: 16px;
}
aside {
  width: 250px;
  height: 100vh;
  background-color: #f7f7f7;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}

main {
  width: 100%;
  height: 100vh;
}
</style>
