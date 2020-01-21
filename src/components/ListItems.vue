<template>
  <div>
    <div
      class="w-full px-8  pb-2 rounded-full"
      v-for="(list, index) in lists"
      :key="index"
    >
      <div
        class="p-4 bg w-full rounded-full flex  text-white font-bold justify-between"
        @click="goToListOverview(list)"
      >
        {{ list.name }}

        <div class="items-center my-auto">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angle-right"
            class="svg-inline--fa fa-angle-right w-4 h-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
          >
            <path
              fill="currentColor"
              d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-items",
  components: {},
  data() {
    return {};
  },
  methods: {
    goToListOverview(l) {
      this.$router.push({
        name: "list",
        params: { list: l }
      });
    }
  },
  computed: {},
  props: {
    lists: {
      type: Array
    }
  }
};
</script>

<style scoped>
.success {
  background-color: #1ea896;
  border: 1px solid #1ea896;
  color: white;
}

.failure {
  background-color: #ff715b;
  border: 1px solid #ff715b;
  color: white;
}

.bg {
  background-color: #1ea896;
}
</style>
