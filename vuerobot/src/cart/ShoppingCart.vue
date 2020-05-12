<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart.cartItems" :key="index">
          <td class="robot-title">
            {{ robot.head.title }}
          </td>
          <td class="cost">
            {{ robot.cost }}
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="sale-items">You Saved Money On These Items :</h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart.saleItmes" :key="index">
          <td class="robot-title">
            {{ robot.head.title }}
          </td>
          <td class="cost">
            {{ robot.cost }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    cart() {
      return {
        cartItems: this.$store.state.robots.cart,
        saleItmes: this.$store.getters["robots/cartSaleItems"]
      };
    }
  }
};
</script>

<style scoped>
td,
th {
  padding: 5px;
}
.robot-title {
  text-align: left;
  padding-right: 200px;
}
.cost {
  text-align: right;
}
h1,
h2 {
  text-align: left;
}
.sale-items {
  margin-top: 50px;
  color: red;
}
</style>
