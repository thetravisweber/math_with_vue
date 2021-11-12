<template>
  <div class="prime-factors">
    <h2>{{ primeFactors }}</h2>

    <table id="prime-factor-table">
      <tr>
        <th></th>
        <th class="titler" v-for="(prime, i) in primes" :key="i" :class="headerClass">
          {{ prime }}
        </th>
      </tr>
      <tr
        class="titler"
        v-for="(factors, factored_num) in factoredTableData"
        :key="factored_num"
      >
        <td>{{ factored_num + 2 }}</td>
        <td v-for="(num_of_factor, j) in factors" :key="j">
          {{ ifNotZero(num_of_factor) }}
        </td>
      </tr>
    </table>

    <div class="math-stuffs-container center"></div>
  </div>
</template>

<script>
export default {
  name: "PrimeFactors",
  props: {
    abstract: Boolean
  },
  data: function () {
    return {
      primes: [2, 3],
      max_number: 40,
    };
  },
  computed: {
    factoredTableData: function () {
      let solution = [];
      for (let i = 2; i <= this.max_number; i++) {
        solution[i - 2] = this.factor(i);
      }
      return solution;
    },
    headerClass: function () {
      return "white-header"
    }
  },
  methods: {
    // opting for readability over speed
    factor: function (num) {
      let solutions = [];
      if (this.primes.includes(num)) {
        let index = this.primes.indexOf(num);
        solutions = Array(index + 1).fill(0);
        solutions[index] = 1;
        return solutions;
      }
      for (let i = 0; i < this.primes.length; i++) {
        let prime = this.primes[i];
        if (num % prime == 0) {
          num /= prime;
          solutions = this.factor(num);
          solutions[i] += 1;
          return solutions;
        }
      }
      // if we get here, we have a new prime
      this.primes.push(num);
      return this.factor(num);
    },
    ifNotZero: (num) => {
      if (num == 0) {
        return '';
      }
      return num;
      // &#9650;
    },
  },
};
</script>

<style scoped>
#nav {
  display: none;
}

.prime-factors {
  background-color: black;
}

#prime-factor-table {
  font-size: 25px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.white-header {
  color: white;
}

td {
  width: 32px;
  text-align: center;
}

.titler {
  color: white;
}
</style>
