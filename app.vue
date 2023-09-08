<template>
  <NuxtLayout><NuxtPage></NuxtPage> </NuxtLayout>
</template>
<style>
@font-face {
  font-family: "Dana-Regular";
  src: url("./public/Dana-Regular.ttf");
}
* {
  font-family: "Dana-Regular" !important;
}
.v-locale--is-ltr {
  direction: rtl;
}
.v-overlay-container {
  contain: layout;

  pointer-events: none;
  position: fixed;

  display: block;
}
</style>
