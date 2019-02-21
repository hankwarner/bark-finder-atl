import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(Vuetify)

sync(store, router)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBPrwzMzUqoKSUF4y1yvUBksfVlJy4k2-s',
    libraries: 'places',
  }
}),

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
