<template>
  <nav class="navbar">
    <div class="container">
      <img class="navbar__menu" src="~/assets/images/icons/menu.png" alt="">
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  background-color: $color-background;
  // background-image: url('~/assets/images/top-berries.png');
  // background-repeat: no-repeat;
  // background-position: top right;

  &__menu {
    width: 30px;
    margin: 2rem 1rem;
  }
}
</style>
