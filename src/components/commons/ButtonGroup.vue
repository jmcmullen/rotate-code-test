<template>
  <div class="btn-group">
    <button 
      class="btn-group__btn"
      v-for="option in buttons"
      :class="{ 'btn-group__btn--active': option.active }" 
      :key="option.key" 
      @click="update(option)">
      {{option.key}}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    buttons() {
      const buttons = [];
      // eslint-disable-next-line
      this.options.forEach(option => {
        buttons.push({ key: option, active: option === this.value });
      });
      return buttons;
    },
  },
  methods: {
    update(option) {
      this.$emit('input', option.key);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-group {
  margin: 1rem 0;

  &__btn {
    font-size: 0.7rem;
    margin: 0;

    &--active {
      opacity: 1;
      color: $color-dark;
      background-color: #fff;
    }
  }
}
</style>
