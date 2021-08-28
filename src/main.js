import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import App from './App.vue'
import router from './router'
import VueTippy, { TippyComponent } from "vue-tippy";
import './registerServiceWorker'
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/google.css";
import "tippy.js/themes/translucent.css";
import Axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = Axios

Vue.use(VueClipboard)
Vue.use(VueTippy);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
      