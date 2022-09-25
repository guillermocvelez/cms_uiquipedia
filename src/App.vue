<template>
  <div class="app-container">    
      <aside>
        <RouterLink to="/">Link</RouterLink>
      </aside>
      <main class="wrapper">
        <RouterView />
      </main>
    
  </div>

  
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  
  </script>
  

<style scoped>
.app-container {
  display: flex;
}
</style>
