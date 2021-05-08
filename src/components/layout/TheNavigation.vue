<template>
  <header class="page__header">
    <router-link :to="{ name: 'ContactList' }" class="header__link"
      ><h1>My Address Book</h1></router-link
    >
    <nav>
      <ul class="header__nav">
        <li>
          <router-link :to="{ name: 'ContactList' }" class="header__link"
            >see list
          </router-link>
        </li>
        <li>
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
</style>
