<template>
  <div class="cart">
    <h1>Your Cart</h1>
    <p v-show="!products.length">
      <i>Your cart is empty!</i>
      <router-link to="/">Go shopping</router-link>
    </p>
    <table
      v-show="products.length" 
      class="table striped"
    >
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Quantity</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products" v-bind:key="p.id">
          <td>{{ p.name }}</td>
          <td>${{ p.price }}</td>
          <td>{{ p.quantity }}</td>
        </tr>
        <tr>
          <td><b>Total:</b></td>
          <td></td>
          <td><b>${{ total }}</b></td>
        </tr>
      </tbody>
    </table>
    <p><button 
      v-show="products.length"
      v-on:click="checkout"
      class="button"
      >
      Checkout
      </button></p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        products: 'cartProducts'
      }),
      total() {
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      }
    },
    methods: {
      checkout() {
        alert('Pay us $' + this.total)
      }
    }
  }
</script>