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
        v-for="(factors, factored_num) in factoredTableData"
        :key="factored_num"
      >
        <td :class="headerClass">{{ factored_num + 2 }}</td>
        <td v-for="(num_of_factor, j) in factors" :key="j" :style="factorStyle()">
          {{ display_number_of_factors(num_of_factor, abstract_symbol) }}
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
    abstract_symbol: String
  },
  data: function () {
    return {
      primes: [2, 3],
      max_number: 40
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
    factorStyle: () => {
      return {
        color: "#FFFFFF"
      };
    },
    display_number_of_factors: (num, abstract_symbol) => {
      if (num == 0) {
        return '';
      }
      switch(abstract_symbol) {
        case "triangle":
          return "▲";//'&#9650;';
        case "rectangle":
          return '▬';
        case "square":
          return "◼";
        case "diamond":
          return '◈'
        default:
          return num
      }
    }
  },
};
</script>

<style scoped>
#nav {
  display: none;
}

.prime-factors {
  background-color: black;
  font-size: 25px;
}
.prime-factor-table {
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.white-header {
  -webkit-text-fill-color: white;
}

td {
  width: 32px;
  text-align: center;
}

</style>
