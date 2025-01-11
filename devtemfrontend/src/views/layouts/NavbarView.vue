<template>
    <div>
      <v-app-bar
        id="main-header"
        app
        height="60px"
        class="pa-0"
        :prominent="false"
      >
        <router-link to="/">
          <v-btn>Logo</v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <h1>Navbar</h1>
      </v-app-bar>
    </div>
</template>

<script>
export default {
  name: "NavbarView",
  mounted() {
    // Perform any DOM-related tasks here after the component is mounted
    console.log("Navbar mounted");
  },
};
</script>

<style scoped>
#main-header {
  left: 0 !important;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}
</style>
