<template>
  <v-row>
    <v-list three-line>
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
      ></v-progress-circular>

      <v-alert
        v-if="!loading && errors"
        border="top"
        colored-border
        type="info"
        elevation="2"
      >
        Não foi possível buscar os empreendimentos, tente novamente mais tarde
        ou <router-link to="/">atualize a página</router-link>.
      </v-alert>

      <template v-for="(item, index) in this.empreendimentos">
        <v-divider v-if="item.dividir" :key="index"></v-divider>

        <v-list-item
          v-else
          :key="item.name"
          @click="buscarEmpreendimento(item.id)"
        >
          <v-list-item-avatar>
            <v-img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InJlZCIvPjwvc3ZnPg=="
            ></v-img>
            <!-- <v-img :src="item.image"></v-img> Imagem que vem do json está quebrada, coloquei uma aleatória. -->
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.phone"></v-list-item-title>
            <v-list-item-subtitle v-html="item.name"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
  name: "Lista",
  data() {
    return {
      loading: true,
      errors: false,
      empreendimentos: [],
    };
  },
  created() {
    this.listarEmpreendimentos();
  },
  methods: {
    listarEmpreendimentos() {
      try {
        axios
          .get(
            "https://5ff75c21e7164b0017e1a82d.mockapi.io/api/v1/empreendimentos"
          )
          .then((response) => {
            this.empreendimentos = response.data;
            this.loading = false;
          }).catch((e) => {
            this.erros = true;
            throw e;
          });
      } catch (error) {
        this.loading = false;
        this.errors = true;
        console.error(error);
      }
    },
    buscarEmpreendimento(id) {
      try {
        if (!id) {
          return;
        }
        this.$router.push({ path: '/empreendimento/' + id })
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
body {
  margin: 15px !important;
}
</style>