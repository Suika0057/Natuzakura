<script setup>
import AppBar from '@/layouts/MainLayOut/MainLayOutAppBar.vue'
</script>

<template>
  <div>
    <AppBar class="app-bar" />
    <main class="content">
      <router-view />
    </main>

    <footer class="footer">ALL RIGHTS RESERVED 2025©NATSUZAKURA</footer>
  </div>
</template>

<style scoped>
.app-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  /* Ensure the app bar is above other content */
}

.content {
  background-image: url('../../assets/imgs/home_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex: 1;
  padding-top: 80px; /* Adjust based on the height of the app bar */
  overflow: auto;
  text-align: center;
  height: 100vh;
  width: 100%;
}

.footer {
  background-color: #ccc;
  text-align: center;
}
</style>
