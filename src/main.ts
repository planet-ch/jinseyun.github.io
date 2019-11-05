import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/style.scss'
import './plugins/element.js'

// element
import 'element-ui/lib/theme-chalk/index.css';
import {
  Container,
  Header,
  Aside,
  Main,
  Footer
} from 'element-ui'
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
