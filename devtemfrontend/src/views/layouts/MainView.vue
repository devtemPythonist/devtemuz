<template>
  <v-layout class="rounded rounded-md">
    <v-app>
      <navbar-view></navbar-view>
      <router-view></router-view>
      <v-footer fixed padless color="red" class="footer-class">
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
<style scoped>
.footer-class {
  max-height: 40px !important;
  padding: 0px;
  margin: 0px;
}
</style>
