import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import * as VueGoogleMaps from 'vue2-google-maps'
import prodEnv from '../config/prod.env'

Vue.config.productionTip = false

Vue.use(Vuetify)

sync(store, router)

if(process.env.NODE_ENV == 'development') {
  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
      libraries: 'places',
    }
  })
} else if (process.env.NODE_ENV == 'production') {
  Vue.use(VueGoogleMaps, {
    load: {
      key: prodEnv.VUE_APP_GOOGLE_MAPS_API_KEY,
      libraries: 'places',
    }
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
