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
      <v-sheet
        class="center-header"
        max-width="50%"
        style="display: flex; justify-content: center; align-items: center"
      >
        <v-slide-group show-arrows>
          <v-slide-group-item
            v-for="n in 25"
            :key="n"
            v-slot="{ isSelected, toggle }"
          >
            <v-btn
              :color="isSelected ? 'primary' : undefined"
              class="ma-2"
              rounded
              @click="toggle"
            >
              Options {{ n }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
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
.center-header {
  left: 0 !important;
  height: 60px;
}
.center-header_text {
  text-align: center;
  width: auto;
  line-height: 1.4em;
  overflow: hidden;
  text-decoration: inherit;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  /* font-family: Roboto, Trebuchet MS, Helvetica, sans-serif; */
  font-family: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  /* font-family: Public sans-serif; */
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
}
</style>
