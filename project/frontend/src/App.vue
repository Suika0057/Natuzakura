<script setup>
</script>

<template>
  <router-view class="router-view" />
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>

<style scoped>
.router-view {
  display: block;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
}
</style>
