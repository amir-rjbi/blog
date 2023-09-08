<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        location="right"
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="امیر حسین رجبی"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list class="amirfont" density="compact" nav>
          <v-list-item
            to="/"
            prepend-icon="mdi-home-city"
            title="صفحه اصلی"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-folder-check-outline"
            title="دسته بندی"
            value="account"
            to="/categories"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-panorama-outline"
            title=" پست ها"
            value="posts"
            to="/posts"
          ></v-list-item>
          <v-list-item
            to="/users"
            prepend-icon="mdi-account-group-outline"
            title="کاربران"
            value="users"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main
        style="height: 1000px; background-color: bisque"
        class="text-right"
      >
        <slot
      /></v-main>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },
};
</script>
<style>
.v-list-item--nav .v-list-item-title {
  font-size: 12px;
  padding: 0px;
  margin: 0px;
}
</style>
