<template>
  <TheNavigation />
  <main class="page__main">
    <router-view />
  </main>
  <TheFooter />
</template>
<script>
import "@/assets/style/main.css";
import TheNavigation from "@/components/layout/TheNavigation.vue";
import TheFooter from "@/components/layout/TheFooter.vue";
export default {
  name: "App",
  components: { TheNavigation, TheFooter },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

.page__footer {
  padding: 12px 24px;
  text-align: right;
}

.buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* gap: 12px; */
}

.form__field {
  padding: 6px;
  border: 1px solid grey;
  display: block;
  width: 80%;
}

.field__label {
  display: block;
}
</style>
