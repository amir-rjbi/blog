<template>
  <v-card dir="rtl">
    <v-layout>
      <v-app-bar color="cyan-darken-4" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/"> بلاگ</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify" @click="search"></v-btn>
        <v-text-field
          v-model="searchValue"
          type="search"
          class="mt-10"
          label="جستوجو"
          @keydown.enter="search"
        />

        <v-btn
          variant="text"
          icon="mdi-account"
          @click="$router.push('/admin')"
        ></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        bottom
        color="cyan-darken-2"
        location="right"
        permanent
      >
        <v-list color="transparent">
          <div style="text-align: center; color: black">دسته بندی مقالات</div>
          <hr style="border-color: black; border-width: 3px" />
          <router-link
            v-for="item in categories"
            :to="`/search?categorySlug=${item.slug}`"
          >
            <v-list-item
              prepend-icon="mdi-view-dashboard"
              v-ripple
              :title="item.title"
            ></v-list-item>
            <hr style="border-color: black" />
          </router-link>
        </v-list>
      </v-navigation-drawer>
      <v-main style="min-height: 100vh">
        <div class="py-7 px-7" dir="rtl">
          <router-view></router-view>
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import { GetCategories } from "../services/category.service";

export default {
  data: () => ({
    drawer: false,
    categories: [],
    searchValue: "",
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    search() {
      this.$router.push({ path: "/search", query: { q: this.searchValue } });
    },
  },
  mounted() {
    GetCategories().then((res) => {
      this.categories = res;
    });
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
.v-locale--is-ltr {
  direction: rtl;
}
</style>
