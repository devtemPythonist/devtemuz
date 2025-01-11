<template>
    <v-toolbar max-width="100%" height="40" dense>
      <div>
        {{ new Date().getFullYear() }} yil - «UzAuto Motors» AJ Murojaat uchun:
        IT: 3056, HR: 3933 Kadr(Toshkent): 1703
      </div>
      <v-spacer></v-spacer>

      <v-btn
          color="primary"
          class="ml-4"
          small
          icon
          to="/chat-sidebar/space/chat"
        >
          <v-icon>mdi-wechat</v-icon>
        </v-btn>
      <v-btn color="primary" class="ml-4" small icon to="/timeline-sidebar/timeline" >
        <v-icon>mdi-forum-outline</v-icon>
      </v-btn>
        <v-btn color="primary" class="ml-4" small icon to="/phone-sidebar/phonebook/list">
        <v-icon>mdi-phone</v-icon>
      </v-btn>
    </v-toolbar>
  </template>
  <script>
  export default {
    data() {
      return {

      };
    },
    computed: {

    },
    methods: {

    },
    mounted() {
    },
  };
  </script>
  