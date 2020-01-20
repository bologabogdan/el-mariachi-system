<template>
  <button
    class="button p-4 px-8 rounded-full w-full font-bold"
    :class="buttonStyle"
    v-bind="$attrs"
    :style="{ buttonType }"
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
    },
    buttonType: {
      type: String,
      default: "primary"
    }
  }
};
</script>

<style scoped>
.button {
  outline: none;
}

.primary {
  background-color: white;
  border: 2px solid white;
  color: #ff715b;
}

.secondary {
  border: 2px solid white;
  background-color: transparent;
  color: white;
}

.success {
  background-color: #1ea896;
  border: 2px solid #1ea896;
  color: white;
}

.failure {
  background-color: #ff715b;
  border: 2px solid #ff715b;
  color: white;
}

.edit {
  background-color: #4c5454;
  border: 2px solid #4c5454;
  color: white;
}
</style>
