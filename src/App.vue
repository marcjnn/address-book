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
  font-family: var(--fontMain);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--colorTextMain);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page__header {
  background-color: var(--colorBackground);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.page__main {
  flex-grow: 1;
  padding: 24px;
}

.page__footer {
  font-size: 14px;
  padding: 12px 24px;
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.form__field {
  padding: 6px;
  border: 1px solid var(--colorBorder);
  display: block;
  width: 100%;
}

.field__label {
  display: block;
}

@media all and (min-width: 768px) {
  .page__header {
    flex-direction: row;
  }
  .page__footer {
    font-size: 16px;
    text-align: right;
  }

  .form__field {
    width: 80%;
  }
}
</style>
