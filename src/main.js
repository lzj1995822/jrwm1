// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'mint-ui/lib/style.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import { Button, Field, Header, Cell } from 'mint-ui';
import Icon from 'vue-svg-icon/Icon.vue';
import SVG from './components/SVG';

Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(Header.name, Header);
Vue.component(Cell.name, Cell);
Vue.component('icon', Icon);
Vue.component('svg-img', SVG);

Vue.prototype.$rem  = document.documentElement.getBoundingClientRect().width / 6.4;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
