<template>
  <b-loading></b-loading>
  <div class="p-10">
    <div dir="rtl" class="text-emerald-600 p-8" style="background-color: white">
      مدیریت پست ها
    </div>
    <hr />
    <v-btn class="mt-5" @click="router.push(`/posts/addpost`)" color="success"
      >افزودن پست جدید</v-btn
    >
    <form @submit.prevent="filterPosts" class="elevation-4 py-4 pl-4 pr-4 my-7">
      <v-row>
        <v-col cols="12" md="6" class="pb-0">
          <v-text-field v-model="filter.title" label="عنوان"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            type="number"
            v-model="filter.take"
            label="تعداد نمایش در صفحه"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn type="submit" color="info">فیلتر</v-btn>
    </form>
    <v-table class="elevation-2 mt-7" dir="rtl">
      <thead>
        <tr>
          <th style="padding-right: 10%">عکس</th>
          <th style="padding-right: 2%">عنوان</th>
          <th style="padding-right: 2%">slug</th>
          <th style="padding-right: 10%">عملیات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in postFilter.posts" :key="index">
          <td style="padding-right: 4%">
            <img
              :src="`${PostImageUrl}${item.imageName}`"
              style="max-width: 200px"
            />
          </td>
          <td v-text="item.title"></td>
          <td v-text="item.slug"></td>
          <td style="padding-right: 6%">
            <v-btn @click="router.push(`/posts/${item.postId}`)" color="info"
              >ویرایش</v-btn
            >
            <v-btn @click="deletePost(item.postId)" class="mr-1" color="error"
              >حذف</v-btn
            >
          </td>
        </tr>
        <tr v-if="postFilter.entityCount === 0">
          <td colspan="5">پستی برای نمایش وجود ندارد</td>
        </tr>
      </tbody>
    </v-table>
    <v-pagination
      v-model="filter.pageId"
      :length="postFilter.pageCount"
      :total-visible="7"
      next-icon="mdi-chevron-left"
      prev-icon="mdi-chevron-right"
    ></v-pagination>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
import Swal from "sweetalert2";
import { GetPost, Deletepost } from "../../services/post.service";
import { useappStore } from "../../stores/useStore";
const store = useappStore();
const PostImageUrl = "https://blog-api.codeyad-project.ir/images/posts/";
const router = useRouter();
const toast = useToast();
const filter = reactive({ title: "", categoryslug: "", pageId: 1, take: 1 });
const postFilter = ref({
  pageCount: 0,
});

function filterPosts() {
  filter.pageId = 1;
  GetPost(filter).then((res) => {
    postFilter.value = res;
  });
}

const deletePost = (postId) => {
  Swal.fire({
    title: "آیا از حذف اطمینان دارید",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "بله ، حذفش کن",
    cancelButtonText: "نه ، بی خیال",
  }).then((result) => {
    if (result.isConfirmed) {
      Deletepost(postId);

      toast.success("حذف با موفقیت انجام شد");
      GetPost(filter).then((res) => {
        postFilter.value = res;
      });
      location.reload();
    }
  });
};
watch(
  () => filter.pageId,
  () => {
    GetPost(filter).then((res) => {
      postFilter.value = res;
    });
  }
);
onMounted(async () => {
  store.setLoading(true);
  await GetPost(filter).then((res) => {
    postFilter.value = res;
  });
  store.setLoading(false);
  console.log(postFilter.value);
});
</script>

<style scoped></style>
