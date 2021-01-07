<template>
      <v-alert
        border="top"
        colored-border
        type="info"
        elevation="2"
      >
        Página não encontrada. <router-link to="/">Voltar ao início</router-link>
      </v-alert>
</template>

<script>

export default {
  name: "PaginaNaoEncontrada404",
};
</script>