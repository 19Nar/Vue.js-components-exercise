import Vue from 'vue'
import App from './App.vue';
import Messages from './Messages.vue';

Vue.component ("app-messages", Messages);

new Vue({
  el: '#app',
  render: h => h(App)
})
