<template>
  <div class="Loading" v-if="isLoading">
    <v-progress-linear
      color="deep-purple-accent-4"
      indeterminate
      rounded
      height="6"
    ></v-progress-linear>
  </div>
</template>

<script setup>
import { useappStore } from "../stores/useStore";
const store = useappStore();
const isLoading = computed(() => store.isLoading);
</script>

<style scoped>
.Loading {
  width: 100%;
  height: 100%;
  z-index: 100000;
  position: fixed;
}
</style>
