<template>
  <div dir="rtl" class="text-emerald-600 p-8" style="background-color: white">
    افزودن کاربران
  </div>
  <hr />

  <form @submit.prevent="submit" class="text-right">
    <v-text-field
      v-model="fullname.value.value"
      :counter="10"
      :error-messages="fullname.errorMessage.value"
      placeholder="نام و نام خانوادگی"
    ></v-text-field>

    <v-text-field
      class="text-right"
      v-model="userName.value.value"
      :error-messages="userName.errorMessage.value"
      placeholder="نام کاربری"
    ></v-text-field>

    <v-text-field
      class="text-right"
      v-model="password.value.value"
      :error-messages="password.errorMessage.value"
      placeholder="رمزعبور"
    ></v-text-field>

    <v-btn class="me-4" type="submit"> ذخیره </v-btn>

    <v-btn @click="handleReset"> انصراف </v-btn>
  </form>
</template>

<script setup>
import { PostUser } from "../../services/user.service";
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    fullname(value) {
      if (value?.length >= 1) return true;
      return "      اسمتو فراموش کردی وارد کنی";
    },

    userName(value) {
      if (value?.length >= 1) return true;

      return "     نام کاربریت رو فراموش کردی وارد کنی";
    },
    password(value) {
      if (value?.length >= 8) return true;

      return "رمز عبور باید  8 رقم باشه";
    },
  },
});
const fullname = useField("fullname");
const userName = useField("userName");
const password = useField("password");

const submit = handleSubmit((values) => {
  // alert(JSON.stringify(values, null,));
  var command = JSON.stringify(values, null, 2);
  PostUser(command);
});
</script>

<style scoped>
.v-text-field {
  text-align-last: right;
}
.v-text-field ::placeholder {
  text-align: right;
}
</style>
