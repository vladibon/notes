import { createApp } from 'vue';
import store from './stores/notes';
import router from './router';
import App from './App.vue';
import cssVarPlugin from './plugins/cssVarPlugin';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(cssVarPlugin);

app.mount('#app');
