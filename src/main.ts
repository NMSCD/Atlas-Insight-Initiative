import 'quasar/src/css/index.sass'; // Import Quasar css
import '@quasar/extras/material-icons/material-icons.css'; // Import icon libraries
import './css/styles.scss';
import App from './App.vue';
import { Quasar } from 'quasar';
import { createApp } from 'vue';
import router from './router';

const app = createApp(App);

app.use(router).use(Quasar, {
  /* put plugins here */
});

app.mount('#app');
