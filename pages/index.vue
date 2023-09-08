<template>
  <div class="p-10" dir="rtl">
    <div
      dir="rtl"
      class="text-emerald-600 text-right p-8"
      style="background-color: white"
    >
      پربازدید ترین مقالات
    </div>
    <hr />
    <v-row class="p-10" dir="rtl">
      <v-col cols="12" md="3" v-for="item in posts" :key="item.postId">
        <post-card :post="item" dir="rtl" style="direction: rtl"></post-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { GetPostPopular } from "../services/post.service";
import PostCard from "../components/PostCard.vue";

const posts = ref([]);
definePageMeta({
  layout: "main",
});
onMounted(() => {
  GetPostPopular().then((res) => {
    posts.value = res;
  });
});
</script>
