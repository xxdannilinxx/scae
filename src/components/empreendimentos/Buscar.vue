<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>{{ empreendimento.name }}</v-card-title>

    <v-card-text>
      <div class="my-4 subtitle-1">
        {{ empreendimento.address }}
      </div>

      <div>Ligue e faça sua reserva agora mesmo, {{ empreendimento.phone }}.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="$router.go(-1)"
      >
        Voltar
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: "Buscar",
  data() {
    return {
      loading: true,
      empreendimento: {},
    };
  },
  created() {
    this.carregarEmpreendimento();
  },
  methods: {
    carregarEmpreendimento() {
      try {
        axios
          .get(
            "https://5ff75c21e7164b0017e1a82d.mockapi.io/api/v1/empreendimentos/" + this.$route.params.id
          )
          .then((response) => {
            this.empreendimento = response.data;
            this.loading = false;
          }).catch((e) => {
            this.$router.push({ path: '/' });
            throw e;
          });
      } catch (error) {
        this.loading = false;
        this.$router.push({ path: '/' });
        console.error(error);
      }
    },
  },
};
</script>