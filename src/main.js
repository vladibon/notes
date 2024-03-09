import { createApp } from 'vue';
import store from './stores/notes';
import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
