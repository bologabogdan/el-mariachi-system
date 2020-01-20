<template>
    <div class="w-full h-24">
  <div class="nav w-full bg bottom-0 fixed z-40 py-1">
    <div class="px-6 text-center flex h-16 items-center justify-between text-white">
      <router-link to="/">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="th-large"
          class="svg-inline--fa fa-th-large w-4 h-4 mx-auto my-1"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"
          />
        </svg>
        <div class="text-xs">Dashboard</div>
      </router-link>

      <router-link class to="/products">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="pepper-hot"
          class="svg-inline--fa fa-pepper-hot w-4 h-4 mx-auto my-1"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M330.67 263.12V173.4l-52.75-24.22C219.44 218.76 197.58 400 56 400a56 56 0 0 0 0 112c212.64 0 370.65-122.87 419.18-210.34l-37.05-38.54zm131.09-128.37C493.92 74.91 477.18 26.48 458.62 3a8 8 0 0 0-11.93-.59l-22.9 23a8.06 8.06 0 0 0-.89 10.23c6.86 10.36 17.05 35.1-1.4 72.32A142.85 142.85 0 0 0 364.34 96c-28 0-54 8.54-76.34 22.59l74.67 34.29v78.24h89.09L506.44 288c3.26-12.62 5.56-25.63 5.56-39.31a154 154 0 0 0-50.24-113.94z"
          />
        </svg>
        <div class="text-xs">Products</div>
      </router-link>

      <router-link class to="/lists">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="list-ul"
          class="svg-inline--fa fa-list-ul w-4 h-4 mx-auto my-1"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
          />
        </svg>
        <div class="text-xs">Lists</div>
      </router-link>

      <router-link class to="/recipes">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="book-open"
          class="svg-inline--fa fa-book-open w-4 h-4 mx-auto my-1"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"
          />
        </svg>
        <div class="text-xs">Recipes</div>
      </router-link>

      <router-link class to="/profile">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="user"
          class="svg-inline--fa fa-user w-4 h-4 mx-auto my-1"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
          />
        </svg>
        <div class="text-xs">Profile</div>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script lang="js">
import Vue from "vue";

export default Vue.extend({
  name: "Navigation",
});
</script>

<style scoped>
.bg {
  background-color: #1ea896;
}

.nav a {
  opacity: 0.5;
}

.nav a:hover {
  color: white;
    font-weight: bold;
}
.nav a.router-link-exact-active {
  color: white;
    font-weight: bold;
  opacity: 1;
}
</style>
