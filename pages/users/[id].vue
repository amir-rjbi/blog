<template>
  <b-loading></b-loading>
  <div dir="rtl" class="text-emerald-600 p-8" style="background-color: white">
    ویرایش کاربران
  </div>
  <hr />
  <div
    style="width: 800px; display: inline-block"
    class="p-8 elevation-4 m-8 bg-orange-50"
  >
    <form @submit.prevent="submit">
      <v-text-field
        v-model="fullName.value.value"
        :counter="10"
        :error-messages="fullName.errorMessage.value"
        placeholder="نام و نام خانوادگی"
      ></v-text-field>

      <v-select
        class="v-locale--is-rtl"
        @update:menu="selectf"
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="نقش"
        required
      ></v-select>
      <v-btn class="me-4" type="submit"> ذخیره </v-btn>

      <v-btn @click="handleReset"> ریست </v-btn>
    </form>
  </div>
</template>

<script setup>
import { useappStore } from "../../stores/useStore";
import { GetUserById } from "../../services/user.service";
import { useToast } from "vue-toastification";
import { EditUser } from "../../services/user.service";
// import { User } from "../../models/ApiUserGet";

const select = ref("");
const items = reactive(["ادمین", "کاربر"]);

const router = useRouter();
const toast = useToast();
const store = useappStore();
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    fullName(value) {
      if (value?.length >= 1) return true;
      return "      اسمتو فراموش کردی وارد کنی";
    },

    role(value) {
      return true;
    },
    userId(value) {
      return true;
    },
  },
});

const userId = useField("userId");
const fullName = useField("fullName");
const role = useField("role");
const selectf = () => {
  if (select.value == "ادمین") {
    role.value.value = 1;
  }
  if (select.value == "کاربر") {
    role.value.value = 0;
  }
};
const submit = handleSubmit((values) => {
  var command = JSON.stringify(values, null, 2);
  EditUser(command);
  console.log(command);

  toast.success("تغییرات اعمال گردید", {
    timeout: 2000,
  });
  router.push("/users");
});
const userFilter = ref({});
onMounted(async () => {
  store.setLoading(true);
  userId.value.value = router.currentRoute.value.params.id;

  var res = await GetUserById(userId.value.value);
  userFilter.value = res;

  fullName.value.value = userFilter.value.fullName;
  role.value.value = userFilter.value.role;
  if (role.value.value == 1) {
    select.value = "ادمین";
  }
  if (role.value.value == 0) {
    select.value = "کاربر";
  }

  store.setLoading(false);
});
</script>

<style scoped></style>
