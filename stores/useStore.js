import { defineStore } from "pinia";
export const useappStore = defineStore("counter", () => {
  const isLoading = ref(false);

  function setLoading(loading) {
    isLoading.value = loading;
  }

  return { isLoading, setLoading };
});
