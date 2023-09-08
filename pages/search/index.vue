<template>
  <div dir="rtl">
    <h1>
      جستوجو
      <small v-if="filter.title">{{ filter.title }}</small>
    </h1>
    <div v-if="loading === false">
      <v-row v-if="postFilterData.entityCount > 0">
        <v-col
          cols="12"
          md="3"
          v-for="item in postFilterData.posts"
          :key="item.postId"
        >
          <post-card :post="item"></post-card>
        </v-col>
      </v-row>
      <v-alert v-else color="red" class="text-center text-white">
        موردی برای نمایش وجود ندارد
      </v-alert>
      <v-pagination
        v-if="postFilterData.pageCount > 1"
        v-model="filter.pageId"
        :length="postFilterData.pageCount"
        :total-visible="7"
        next-icon="mdi-chevron-left"
        prev-icon="mdi-chevron-right"
        class="mt-3"
      ></v-pagination>
    </div>
    <div v-else class="text-center">
      <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </div>
  </div>
</template>

<script setup>
import { GetPost } from "../../services/post.service";
import PostCard from "../../components/PostCard";

const loading = ref(false);
const router = useRouter();
const filter = reactive({
  pageId: 1,
  take: 10,
  title: "",
  categorySlug: "",
});
const postFilterData = ref({});

watchEffect(() => {
  filter.title = router.currentRoute.value.query.q;
  filter.categorySlug = router.currentRoute.value.query.categorySlug;
  filterPost();
});

onMounted(() => {
  filterPost();
});

function filterPost() {
  GetPost(filter).then((res) => {
    postFilterData.value = res;
  });
}
definePageMeta({
  layout: "main",
});
</script>

<style scoped>
.text-white {
  color: white !important;
}
</style>
