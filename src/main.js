import Vue from 'vue'
import App from './App.vue'
import router from './router'
import data from "@/assets/data.js";

Vue.config.productionTip = false

new Vue({
  data(){
    return{
      data: data,
      singleProd: null,
      searchPhrase: ''
    }
  },
  methods:{
    
  },
  router,
  render: h => h(App)
}).$mount('#app')
