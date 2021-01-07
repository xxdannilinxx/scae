import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

import ListaEmpreendimentos from './components/empreendimentos/Lista'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'ListaEmpreendimentos',
      component: ListaEmpreendimentos
    },
    {
      path: '/empreendimento/:id',
      name: 'BuscarEmpreendimento',
      component: () => import('./components/empreendimentos/Buscar')
    },
    {
      path: "*",
      component: () => import('./components/PaginaNaoEncontrada404')
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')