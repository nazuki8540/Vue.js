import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "../node_modules/bulma/css/bulma.css"; 

Vue.config.productionTip = false

new Vue({
    render: r=> h(App),
}).$mount('#app')

createApp(App).use(store).use(router).mount('#app');
