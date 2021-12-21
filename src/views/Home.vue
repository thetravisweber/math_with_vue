<template>
  <div class="home">
    <router-link class="link" to="/prime-factors">Prime Factors</router-link>
    <router-link class="link" to="/game-theory-jesus">Game Theory Jesus</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>
.home {
  margin: 30px;
}

.link {
  padding: 10px;
  display: block;
}
</style>