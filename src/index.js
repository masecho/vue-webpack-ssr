import Vue from 'vue'
import App from './app.vue'
import store from './store'

import './assets/styles/global.styl'
import './assets/images/bg.jpg'

let root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  store,
  render: (h)=>h(App)  
}).$mount(root);