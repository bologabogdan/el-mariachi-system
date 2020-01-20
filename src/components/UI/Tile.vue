<template>
  <div>
    <img src="../../assets/pepper-hot-solid.svg" alt="" />
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    iconPath: {
      type: String,
      default: "pepper-hot-solid.svg"
    }
  }
};
</script>

<style></style>
