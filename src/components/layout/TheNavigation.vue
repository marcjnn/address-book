<template>
  <header class="page__header">
    <router-link :to="{ name: 'ContactList' }" class="header__link"
      ><h1>My Address Book</h1></router-link
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

<script>
export default {
  name: "TheNavigation",
};
</script>

<style scoped>
.header__nav {
  display: flex;
  gap: 24px;
}

.header__link {
  text-decoration: none;
  color: darkblue;
}

.nav__item {
  padding: 6px;
  border: 1px solid darkblue;
}

.nav__item:hover {
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.35);
}
</style>
