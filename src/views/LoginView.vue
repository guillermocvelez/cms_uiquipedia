<template>
  <div class="login-container">
    <div class="login-card">
      <div class="input-container">
        <label for="">Usuario</label>
          <input type="email">
      </div>

      <div class="input-container">
        <label for="">Password</label>
        <input type="password">
      </div>

      <div class="btn-container">
        <button>Entrar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  padding: 16px;
  background-color: white;
  width: 40%;
  border-radius: 16px;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
}
input {
  padding: 8px;
  border-radius: 8px;
  border: 1px solid grey;
}

.btn-container {
  display: flex;
  justify-content: center;
}

button {
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: rgb(52, 133, 43);
  color: white;
}



</style>