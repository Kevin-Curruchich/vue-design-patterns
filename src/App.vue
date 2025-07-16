<template>
  <div>
    <nav class="nav">
      <router-link class="nav-link" to="/strategy-pattern">Strategy Pattern</router-link>
      <router-link class="nav-link" to="/builder-pattern">Builder Pattern</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  background-color: #a1c6e9;
  padding: 1rem;
}

</style>
