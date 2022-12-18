import Vue from 'vue';
import Vuelidate from 'vuelidate'
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)

Vue.filter('dateFilter', dateFilter)

// const firebaseConfig = {
//   apiKey: "AIzaSyC-52JmgxADWfa5L2RVUdiY-sVYSD27JGg",
//   authDomain: "vue-crm-358b3.firebaseapp.com",
//   projectId: "vue-crm-358b3",
//   storageBucket: "vue-crm-358b3.appspot.com",
//   messagingSenderId: "26359831878",
//   appId: "1:26359831878:web:996d88c77ffbfd1f701947",
//   measurementId: "G-9VZQLSCWK1"
// };

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



