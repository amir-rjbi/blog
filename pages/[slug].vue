<template>
  <div
    dir="rtl"
    class="elevation-8 pr-0 pl-0 pt-0 pb-5 mt-15 v-container"
    v-if="post.postId"
    style="background-color: white"
  >
    <img class="img p-5" :src="`${PostImageUrl}${post.imageName}`" />
    <div class="pr-4 pl-4">
      <h1>{{ post.title }}</h1>
      <p class="post-content">{{ post.description }}</p>

      <hr />

      <Comments :post-id="post.postId"></Comments>
    </div>
  </div>
</template>

<script setup>
import { GetpostBySlug } from "../services/post.service";
import Comments from "../components/comment.vue";
const PostImageUrl = "https://blog-api.codeyad-project.ir/images/posts/";
const post = ref({});
const router = useRouter();

onMounted(() => {
  definePageMeta({
    layout: "main",
  });
  const slug = router.currentRoute.value.params.slug;
  GetpostBySlug(slug)
    .then((res) => {
      post.value = res;
    })
    .catch(() => {
      router.back();
    });
});
</script>

<style scoped>
.post-content {
  white-space: pre-wrap;
}
.img {
  width: 100%;
  max-height: 500px;
}
.v-container {
  width: 60% !important;
}
</style>
