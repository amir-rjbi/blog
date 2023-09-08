<template>
  <h1>ویرایش دسته بندی</h1>
  <hr />
  <v-form ref="form" lazy-validation @submit.prevent="editCategory">
    <v-row>
      <v-col cols="12" md="6" class="pb-0">
        <v-text-field
          v-model="title"
          :rules="[(v) => !!v || 'عنوان را وارد کنید']"
          required
          label="عنوان"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          :rules="[(v) => !!v || 'slug را وارد کنید']"
          v-model="slug"
          required
          label="slug"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" md="6" class="pb-0">
        <v-text-field
          v-model="metaDescription"
          :rules="[(v) => !!v || 'عنوان را وارد کنید']"
          required
          label="metaDescription"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          :rules="[(v) => !!v || 'metaTag را وارد کنید']"
          v-model="metaTag"
          required
          label="metaTag"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-btn class="me-4" type="submit"> ذخیره </v-btn>
  </v-form>
</template>

<script setup>
import { useToast } from "vue-toastification";

import {
  GetCategoryById,
  EditCategories,
} from "../../services/category.service";
const toast = useToast();

const router = useRouter();

const form = ref(null);
const title = ref("");
const slug = ref("");
const metaTag = ref("");
const metaDescription = ref("");

async function editCategory() {
  const result = await form.value.validate();
  if (result.valid === false) {
    toast.error("اطلاعات نامعتبر است");
    return;
  }
  let id = router.currentRoute.value.params.id;

  await EditCategories({
    id: id,
    title: title.value,
    slug: slug.value,
    metaTag: metaTag.value,
    metaDescription: metaDescription.value,
  });

  toast.success("عملیات با موفقیت انجام شد");
  router.push("/categories");
}

onMounted(async () => {
  let id = router.currentRoute.value.params.id;
  const res2 = await GetCategoryById(id);

  title.value = res2.title;
  slug.value = res2.slug;
  metaTag.value = res2.metaTag;
  metaDescription.value = res2.metaDescription;
});
</script>

<style scoped></style>
