<template>
  <div class="prime-factors">
    <h2>{{ primeFactors }}</h2>

    <table id="prime-factor-table">
      <tr>
        <th></th>
        <th v-for="(prime, i) in primes" :key="i">
          {{ prime }}
        </th>
      </tr>
      <tr
        v-for="(factors, factored_num) in factoredTableData"
        :key="factored_num"
      >
        <td>{{ factored_num + 2 }}</td>
        <td v-for="(num_of_factor, j) in factors" :key="j">
          {{ num_of_factor }}
        </td>
      </tr>
    </table>

    <div class="math-stuffs-container center"></div>
  </div>
</template>

<script>
export default {
  name: "PrimeFactors",
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
      return num ? num : "";
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
  font-family: "Georgia";
  background-image: linear-gradient(60deg, #1153e2, #44f85c);
  background-clip: text;
  color: transparent;
}

td {
  width: 32px;
}
</style>
