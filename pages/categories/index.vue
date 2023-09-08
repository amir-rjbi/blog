<template>
  <b-loading></b-loading>
  <div class="p-10">
    <div dir="rtl" class="text-emerald-600 p-8" style="background-color: white">
      دسته بندی ها
    </div>
    <hr />
    <v-btn
      class="mt-5"
      color="success"
      @click="router.push(`/categories/addCategory`)"
    >
      <v-icon right dark> mdi-plus </v-icon>
      افزودن دسته بندی
    </v-btn>
    <v-table class="elevation-4 mt-7" dir="rtl">
      <thead>
        <tr>
          <th>#</th>
          <th>عنوان</th>
          <th>slug</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in categories" :key="item.id">
          <td v-text="item.id"></td>
          <td>
            <span>{{ item.title }}</span>
            <span v-if="item.parentId > 0"> - {{ item.parentId }}</span>
          </td>
          <td v-text="item.slug"></td>
          <td>
            <v-btn color="error" @click="deleteCategory(item.id)" class="ml-2"
              >حذف</v-btn
            >
            <v-btn
              color="info"
              class="ml-2"
              @click="router.push(`/categories/${item.id}`)"
              >ویرایش
            </v-btn>
            <v-btn
              v-if="item.parentId === 0"
              color="primary"
              @click="
                router.push({
                  path: `/categories/addCategory`,
                  query: { parentId: item.id },
                })
              "
            >
              افزودن زیر گروه
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
const router = useRouter();
import { useToast } from "vue-toastification";
import Swal from "sweetalert2";
import {
  GetCategories,
  DeleteCategories,
} from "../../services/category.service";
import { useappStore } from "../../stores/useStore";
const store = useappStore();
const toast = useToast();
const categories = ref({});

function deleteCategory(id) {
  console.log(id);
  Swal.fire({
    title: "آیا از حذف اطمینان دارید",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "بله ، حذفش کن",
    cancelButtonText: "نه ، بی خیال",
  }).then(async (result) => {
    if (result.isConfirmed) {
      DeleteCategories(id);
      toast.success("حذف با موفقیت انجام شد");
      categories.value = await GetCategories();
      location.reload();
    }
  });
}

onMounted(async () => {
  store.setLoading(true);
  categories.value = await GetCategories();
  store.setLoading(false);
});
</script>

<style scoped></style>
