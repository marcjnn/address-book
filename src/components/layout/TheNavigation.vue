<template>
  <header class="page__header">
    <router-link :to="{ name: 'ContactList' }" class="header__link"
      ><h1 class="page__title">My Address Book</h1></router-link
    >
    <nav>
      <ul class="header__nav">
        <li class="nav__item">
          <router-link :to="{ name: 'ContactList' }" class="header__link"
            >see list
          </router-link>
        </li>
        <li class="nav__item">
          <router-link :to="{ name: 'ContactNew' }" class="header__link"
            >add new
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TheNavigation",
});
</script>

<style scoped>
.page__title {
  font-size: 22px;
}

.header__nav {
  display: flex;
  gap: 24px;
}

.header__link {
  text-decoration: none;
  color: var(--colorTextTitle);
}

.nav__item {
  padding: 6px;
  font-size: 14px;
  border: 1px solid var(--colorTextTitle);
}

.nav__item:hover {
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.35);
}

@media all and (min-width: 768px) {
  .page__title {
    font-size: 32px;
  }

  .nav__item {
    font-size: 18px;
  }
}

@media all and (min-width: 1200px) {
}
</style>
