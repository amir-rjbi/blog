<template>
  <b-loading></b-loading>
  <div class="p-10">
    <div dir="rtl" class="text-emerald-600 p-8" style="background-color: white">
      مدیریت کاربران
    </div>
    <hr />
    <div dir="rtl" class="pr-8 pl-8 elevation-4 bg-orange-50">
      <v-table fixed-header height="300px">
        <thead>
          <tr>
            <th class="text-right">نام کاربری</th>
            <th class="text-right">نام و نام خانوادگی</th>
            <th class="text-right">نقش</th>
            <th class="text-right pr-8">عملیات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in userFilter?.users" :key="index">
            <td v-text="item.userName"></td>
            <td v-text="item.fullName"></td>
            <td>
              <span v-if="item.role === 1">ادمین</span>
              <span v-if="item.role === 0">کاربر</span>
            </td>
            <td>
              <v-btn color="info" @click="router.push(`/users/${item.userId}`)">
                ویرایش</v-btn
              >
            </td>
          </tr>
          <tr v-if="userFilter?.entityCount == 0">
            <td colspan="4">کاربری برای نمایش وجود ندارد</td>
          </tr>
        </tbody>
      </v-table>
    </div>

    <hr />
    <div class="pr-6" dir="rtl">
      <v-btn rounded="xl" size="large" color="green" to="/users/addUser"
        >افزودن کاربر</v-btn
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
import { useappStore } from "../../stores/useStore";
const store = useappStore();
import { GetUser } from "../../services/user.service";
import { UsersFilterResult } from "../../models/ApiUserGet";

var userFilter: Ref<UsersFilterResult | null> = ref(null);

onMounted(async () => {
  store.setLoading(true);
  var result = await GetUser({ pageId: 1, take: 10 });
  userFilter.value = result;
  store.setLoading(false);
});
</script>

<style scoped>
hr {
  padding: 10px;
  border-color: rgb(0, 251, 255);
}
</style>
../../models/ApiUserGet
