import {createApp} from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios';
// Animation
import AosVue from "aos-vue";
// Sockets
import VueSocketIO from 'vue-3-socket.io';
import io from 'socket.io-client';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import Aura from '@primevue/themes/aura';

axios.defaults.baseURL = 'https://panaceadayz.ru';
// axios.defaults.withCredentials = true
const socketInstance = io('https://bot.panaceadayz.com', {
    'query': 'jwt=' + store.getters.JWT
});


axios.interceptors.request.use(function (config) {
    let token = store.getters.JWT;
    if (token) {
        config.headers["X-Token"] = token;
    } else {
        delete config.headers["X-Token"];
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        let originalToken = store.getters.JWT;
        if (originalToken && error.response.status === 401) {
            // Очистка хранилища и переход на главную страницу
            localStorage.clear();
            window.location = '/';
            return Promise.reject(error);
        }
        // Если токен есть или код ответа не 401, просто отклоняем ошибку
        return Promise.reject(error);
    }
);
const NotificationsOption = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
};

const app = createApp(App);

app.use(AosVue);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(Toast, NotificationsOption);
app.use(VueAxios, axios);

app.use(new VueSocketIO({
    debug: false,
    connection: socketInstance,
    vuex: {
        store,
    },
}));
app.use(store);
app.use(router);

app.directive('tooltip', Tooltip);

app.mount('#app');
