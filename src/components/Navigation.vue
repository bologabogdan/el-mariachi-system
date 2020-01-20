<template>

  <div class="nav w-full bg bottom-0 fixed z-40">

    <div class="px-6 text-center flex h-16 items-center justify-between">
      <router-link to="/">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="campground"
          class="svg-inline--fa fa-campground w-4 h-4 mx-auto my-1"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path
            fill="currentColor"
            d="M624 448h-24.68L359.54 117.75l53.41-73.55c5.19-7.15 3.61-17.16-3.54-22.35l-25.9-18.79c-7.15-5.19-17.15-3.61-22.35 3.55L320 63.3 278.83 6.6c-5.19-7.15-15.2-8.74-22.35-3.55l-25.88 18.8c-7.15 5.19-8.74 15.2-3.54 22.35l53.41 73.55L40.68 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM320 288l116.36 160H203.64L320 288z"
          />
        </svg>
            <div class="text-sm">Dashboard</div>
      </router-link>

      <router-link class="" to="/">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="binoculars"
          class="svg-inline--fa fa-binoculars w-4 h-4 mx-auto my-1"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M416 48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v48h96V48zM63.91 159.99C61.4 253.84 3.46 274.22 0 404v44c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V288h32V128H95.84c-17.63 0-31.45 14.37-31.93 31.99zm384.18 0c-.48-17.62-14.3-31.99-31.93-31.99H320v160h32v160c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-44c-3.46-129.78-61.4-150.16-63.91-244.01zM176 32h-64c-8.84 0-16 7.16-16 16v48h96V48c0-8.84-7.16-16-16-16zm48 256h64V128h-64v160z"
          />
        </svg>
        <div class="text-sm">Products</div>
      </router-link>

      <router-link class="" to="/">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="toolbox"
          class="svg-inline--fa fa-toolbox w-4 h-4 mx-auto my-1"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M502.63 214.63l-45.25-45.25c-6-6-14.14-9.37-22.63-9.37H384V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v80H77.25c-8.49 0-16.62 3.37-22.63 9.37L9.37 214.63c-6 6-9.37 14.14-9.37 22.63V320h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-16c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v16h128v-82.75c0-8.48-3.37-16.62-9.37-22.62zM320 160H192V96h128v64zm64 208c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H192v16c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-16H0v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96H384v16z"
          />
        </svg>
         <div class="text-sm">Lists</div>
      </router-link>

      <router-link class="" to="/">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="paper-plane"
          class="svg-inline--fa fa-paper-plane w-4 h-4 mx-auto my-1"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
          />
        </svg>
         <div class="text-sm">Recipes</div>
      </router-link>

            <router-link class="" to="/">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="paper-plane"
          class="svg-inline--fa fa-paper-plane w-4 h-4 mx-auto my-1"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
          />
        </svg>
         <div class="text-sm">Profile</div>
      </router-link>
    </div>

  </div>
</template>

<script lang="js">
import Vue from "vue";

export default Vue.extend({
  name: "MobileNavigation",
});
</script>

<style scoped>
  .bg {
    background-color: #1EA896;
  }

.nav a {
  font-weight: bold;
  opacity: 0.6;
}

.nav a:hover {
  color: #805AD5;
}
.nav a.router-link-exact-active {
  color: #805AD5;
}
</style>
