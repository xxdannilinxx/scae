<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <span class="mr-2">SCAE EMPREENDIMENTOS</span>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Scae",
};
</script>
