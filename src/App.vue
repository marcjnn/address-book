<template>
  <TheNavigation />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<script>
import "@/assets/style/main.css";
import TheNavigation from "@/components/layout/TheNavigation.vue";
export default {
  name: "App",
  components: { TheNavigation },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page__header {
  background-color: #f1f1f1;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page__main {
  flex-grow: 1;
  padding: 24px;
}

.buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* gap: 12px; */
}
</style>
