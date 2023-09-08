<template>
  <div>
    <div>
      <v-form @submit="sendComment" ref="form">
        <v-textarea
          v-model="commentText"
          label="نظر خود را وارد کنید"
          :rules="[(v) => !!v || 'نظر را وارد کنید']"
          required
        ></v-textarea>
        <v-btn class="me-4" type="submit"> ثبت نظر </v-btn>
        <br />
        <br />
      </v-form>
    </div>
    <div v-if="comments.length >= 1">
      <div class="pa-2 elevation-2" v-for="item in comments">
        <h4>
          {{ item.userFullName }}
          <small>{{
            new Date(item.creationDate).toLocaleDateString("fa-IR")
          }}</small>
        </h4>
        <p class="pr-4 text-pre-wrap">{{ item.text }}</p>
      </div>
    </div>

    <v-alert v-else border> برای این مقاله نظری ثبت نشده است </v-alert>
  </div>
</template>

<script setup>
import {
  PostComment,
  DeleteComment,
  GetComment,
} from "../services/comment.service";
import { useToast } from "vue-toastification";

const toast = useToast();

const form = ref(null);
const props = defineProps(["postId"]);
const postId = toRef(props, "postId");
const comments = ref([]);
const commentText = ref("");
const sendComment = async () => {
  const result = await form.value.validate();
  if (result.valid === false) {
    toast.error("اطلاعات نامعتبر است");
    return;
  } else {
    PostComment({
      text: commentText.value,
      postId: postId.value,
      userId: 1,
    }).then(() => {
      toast.success("عملیات با موفقیت انجام شد");
      getPostComment();
    });
  }
};
const getPostComment = () => {
  GetComment(postId.value).then((res) => {
    comments.value = res;
  });
};
onMounted(() => {
  getPostComment();
});
</script>

<style scoped></style>
