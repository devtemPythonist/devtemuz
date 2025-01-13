<template>
  <div>
    <v-app-bar app height="60px" :prominent="false" elevation="1">
      <router-link to="/">
        <v-btn>Logo</v-btn>
      </router-link>
      <v-spacer></v-spacer>
      <v-sheet class="center-header" max-width="50%"
      style="display: flex; justify-content: center; align-items: center">
        <v-slide-group show-arrows mandatory>
          <v-slide-group-item v-for="(item, index) in menuItems" :key="index">
            <div @click="selectItem(index)">
              <router-link :to="item.route" style="text-decoration: none">
                <v-card outlined color="white" round class="ma-1 pa-2" elevation="0">
                  <span>
                    <v-hover close-delay="10" open-delay="10">
                      <template v-slot:default="{ isActive }">
                        <div
                          class="hover-container"
                          :class="{ 'hover-active': isActive }"
                          style="margin: auto"
                        >
                          <v-img
                            :src="item.src"
                            :class="{
                              'greyscale-image': !item.selected && !isActive,
                              'ungreyscale-image': item.selected || isActive,
                              'selected-image': item.selected
                            }"
                            style="width: 30px; height: 30px"
                          ></v-img>
                        </div>
                      </template>
                    </v-hover>
                    <p
                      class="center-header_text mt-1 mb-0"
                      :class="{ 'selected-text': item.selected }"
                    >
                      {{ item.text }}
                    </p>
                  </span>
                </v-card>
              </router-link>
            </div>
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
  data() {
    return {
      menuItems: [
        {
          src: "/img/navbar_svgs/employee-worker-svgrepo-com.svg",
          text: "HR",
          route: "/main-sidebar/hr-module",
          visible: true,
          selected: false,
        },
        {
          src: "/img/navbar_svgs/money_cash_finance_icon.svg",
          text: "Finance",
          route: "/main-sidebar/finance-module",
          visible: true,
          selected: false, 
        },
      ],
    };
  },
  mounted() {
    console.log("Navbar mounted");
  },
  methods: {
    selectItem(index) {
      this.menuItems.forEach((item, i) => {
        item.selected = i === index;
      });
    },
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
  font-family: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
}
.hover-active {
  border: 1px solid #000;
}
.hover-container {
  margin: auto;
}

.greyscale-image {
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: grayscale(100%);  
}

.ungreyscale-image {
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: grayscale(0%);  
}

.selected-image {
  transform: scale(1.2);  
}

.selected-text {
  color: #1976D2; 
}
</style>
