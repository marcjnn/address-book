<template>
  <footer class="page__footer">
    <p>
      made by
      <a
        href="https://github.com/marcjnn"
        class="footer__link"
        title="check out my github"
        >marcjnn</a
      >
      with lots of ☕️☕️☕️
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TheFooter",
});
</script>

<style scoped>
.footer__link {
  color: var(--colorTextTitle);
}
</style>
