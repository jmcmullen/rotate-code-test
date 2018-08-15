<template>
  <header class="hero">
    <div class="container">
      <div class="hero__form">
        <h3>What would you like?</h3>
        <ButtonGroup v-model="cart.type" :options="['Subscription', 'One-Off']"/>
        
        <h3>How often?</h3>
        <ButtonGroup v-model="cart.frequency" :options="['Weekly', 'Fortnightly', 'Monthly']"/>
        
        <h3>How many flower types?</h3>
        <ButtonGroup v-model="cart.quantity" :options="['1', '2', '3']"/>
      </div>
      
      <a href="#">Delivery FAQs</a>
    </div>
  </header>
</template>

<script>
import ButtonGroup from '~/components/commons/ButtonGroup';

export default {
  components: {
    ButtonGroup,
  },
  data() {
    return {
      cart: {
        type: 'Subscription',
        frequency: 'Weekly',
        quantity: '1',
      },
    };
  },
  watch: {
    cart: {
      handler(cart) {
        this.$store.commit('SET_CART', cart);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  padding: 4rem 1rem;
  background-color: $color-background;

  &__form {
    margin-bottom: 2rem;
  }
}
</style>
