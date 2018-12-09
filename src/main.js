// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'mint-ui/lib/style.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import { Button } from 'mint-ui';
import Icon from 'vue-svg-icon/Icon.vue';

Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
