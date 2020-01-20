<template>
  <button
    class="button sm:w-1/2"
    :class="buttonStyle"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonStyle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.button:focus {
  outline: none;
}
</style>
