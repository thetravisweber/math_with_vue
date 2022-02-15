<template>
  <div class="GameTheoryJesus">
    <h2>What would Jesus do?</h2>
    <table>
      <tr>
        <td></td>
        <td>A</td>
        <td>B</td>
      </tr>
      <tr>
        <td>A</td>
        <td>(1, 1)</td>
        <td>(-2, 2)</td>
      </tr>
      <tr>
        <td>B</td>
        <td>(2, -2)</td>
        <td>(-5, -5)</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "GameTheoryJesus",
}
</script>

<style scoped>
.GameTheoryJesus {
  --main-color: black;
  --secondary-color: white;
  background-color: var(--secondary-color);
  color: var(--main-color);
}

td {
  text-align: center;
  width: 20%;
  
}
</style>