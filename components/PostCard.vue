<template>
  <v-card style="direction: rtl">
    <v-img
      :src="`${PostImageUrl}${props.post.imageName}`"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
      style="width: 100%"
      cover
    >
    </v-img>

    <v-card-actions style="display: block !important">
      <v-spacer></v-spacer>
      <h3>{{ props.post.title }}</h3>
      <small>{{ props.post.category.title }}</small>
      <v-btn
        class="show-more"
        variant="outlined"
        @click="$router.push(`/${props.post.slug}`)"
        >ادامه مطلب</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script setup>
const PostImageUrl = "https://blog-api.codeyad-project.ir/images/posts/";
const props = defineProps({
  post: {
    type: Object,
  },
});
</script>

<style scoped>
.show-more {
  float: left;
}
.v-card-actions {
  padding-bottom: 20px;
}
</style>
