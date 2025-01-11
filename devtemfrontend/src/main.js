// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Import Vuetify styles
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi-svg'; // Optional for Material Design Icons
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import router from './router';  // Import the router

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

// Create and mount the app
const app = createApp(App);
app.use(vuetify);
app.use(router); // Use the router
app.mount('#app');
