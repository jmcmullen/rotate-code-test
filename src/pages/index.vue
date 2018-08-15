<template>
  <section class="home">
    <div class="home__fold">     
      <Hero/>
      <Checkout/>
    </div>
  </section>
</template>

<script>
import Hero from '~/components/home/Hero';
import Checkout from '~/components/home/Checkout';

export default {
  components: {
    Hero,
    Checkout,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: $color-background;

  @include desktop {
    display: flex;
    justify-content: center;

    &__fold {
      display: flex;
      justify-content: space-between;
      max-width: $desktop;
      width: 100%;
    }
  }
}
</style>
