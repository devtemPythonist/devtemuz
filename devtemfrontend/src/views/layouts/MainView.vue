<template>
  <v-layout class="rounded rounded-md">
    <v-app>
      <navbar-view></navbar-view>
      <router-view class="" style="margin-top: px"></router-view>
      <v-footer fixed padless color="red" style="z-index: 9">
        <footer-view></footer-view>
      </v-footer>
    </v-app>
  </v-layout>
</template>

<script>
import NavbarView from "@/views/layouts/NavbarView.vue";
import FooterView from "@/views/layouts/FooterView.vue";

export default {
  components: {
    NavbarView,
    FooterView,
  },
  data() {
    return {
      //
    };
  },
};
</script>
