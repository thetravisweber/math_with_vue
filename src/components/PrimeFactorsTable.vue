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
        <td v-for="(num_of_factor, j) in factors" :key="j" :style="factorStyle(num_of_factor)">
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
    factorStyle: (num_of_factor) => {
      let hue = 200 + 5 * num_of_factor; // this.map(num_of_factor, 0, 3, 140, 220);
      let rgb = this.HSBToRGB(hue, 100, 100);
      console.log(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
      return {
        color: "#FFFFFF"
      };
    },
    HSBToRGB: (h, s, b) => {
      s /= 100;
      b /= 100;
      const k = (n) => (n + h / 60) % 6;
      const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
      return [255 * f(5), 255 * f(3), 255 * f(1)];
    },
    map: function (num, start1, end1, start2, end2) {
      num -= start1;
      num /= (end1-start1);
      num *= (end2-start2);
      num += start2;
      return num;
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

@function hsb($h-hsb, $s-hsb, $b-hsb, $a: 1)
$l-hsl: ($b-hsb/2) * (2 - ($s-hsb/100));
$s-hsl: ($b-hsb * $s-hsb) / if($l-hsl < 50, $l-hsl * 2, 200 - $l-hsl * 2);
@return hsla($h-hsb, $s-hsl, $l-hsl, $a);

</style>
