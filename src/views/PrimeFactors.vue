<template>
  <div class="prime-factors">
    <PrimeFactorsTable :abstract_symbol="'diamond'" />
  </div>
</template>

<script>
import PrimeFactorsTable from '../components/PrimeFactorsTable.vue';

export default {
  components: { PrimeFactorsTable }
}
</script>

<style scoped>
</style>
