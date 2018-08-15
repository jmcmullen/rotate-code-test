<template>
  <section class="checkout">
    <h4>Equates to</h4>
    <h1>£{{price}} per bunch</h1>

    <button class="checkout__btn">
      {{ cart.type === 'Subscription' ? 'Subscribe' : 'Purchase' }}
    </button>

    <p>Change, Pause or Cancel at any time.</p>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['cart']),
    price() {
      return 40 * this.cart.quantity;
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout {
  background-color: darken($color-background, 10%);
  padding: 1rem;
  text-align: center;

  @include desktop {
    align-self: center;
  }

  &__btn {
    color: white;
    background-color: $color-dark;
    margin: 1rem 0;
  }
}
</style>
