import {createStore} from 'vuex'
import axios from "axios"
import VuexPersistence from 'vuex-persist'
import createPersistedState from 'vuex-persistedstate';

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: ['user'],
})
export function syncStorageValue(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    // console.log(`Данные с ключом '${key}' обновлены в localStorage.`);
    const event = new Event('storageUpdated', { bubbles: true });
    window.dispatchEvent(event);
}
export default createStore({
    state: {
        playersUs: [],
        playersEu: [],
        // Roulette
        items: [],
        live_items: [],
        live_users: 0,
        //
        monitoring_online: [],
        products: [],
        JWT: "",
        roulette: {
            time_remaining: ''
        },
        user: {
            name: '',
            auth: false,
            balance: "",
            img: "",
            SteamId: "",
            isAdmin: "",
            stats: [],
            purchases_history: [],
            promo_codes: [],
            subscriptions: [],
            purchases: [],

            discord: {
                link: "",
                auth: false,
                data: {
                    name: '',
                    discord_id: ''
                }
            },
        },
    },
    getters: {
        PLAYERSUS(state) {
            return state.playersUs
        },
        PLAYERSEU(state) {
            return state.playersEu
        },
        USER(state) {
            return state.user
        },
        STATS(state) {
            return state.user.stats
        },
        PURCHASES(state) {
            return state.user.purchases
        },
        ITEMS(state) {
            return state.items
        },
        LIVE_ITEMS(state) {
            return state.live_items
        },
        SUBSCRIPTIONS(state) {
            return state.user.subscriptions
        },
        DISCORD_LINK(state){
            return state.user.discord.link
        },
        PROMO_CODES(state) {
            return state.user.promo_codes
        },
        PURCHASES_HISTORY(state) {
            return state.user.purchases_history
        },
        PRODUCTS(state) {
            return state.products
        },
        LIVE_USERS(state) {
            return state.live_users
        },
       JWT(state) {
            return state.JWT;
        },
        ROULETTE_TIME_REMAINING(state){
            return state.roulette.time_remaining
        },
        DISCORD_INFO(state){
            return state.user.discord
        },
        MONITORING_ONLINE(state){
            return state.monitoring_online
        }
    },
    mutations: {
        SET_NEW_BALANCE: (state, balance) => {
            state.user.balance = balance;
        },
        SET_NEW_USER_DATE: (state, date) => {
            state.user.auth = date['auth']
            state.user.name = date['name']
            state.user.balance = date['balance']
            state.user.img = date['avatar']
            state.user.SteamId = date['steamid']
            state.user.isAdmin = date['isAdmin']
            state.user.stats = date['stats']
            state.user.purchases_history = date['purchases_history']
            state.user.promo_codes = date['promo_codes']
            state.user.subscriptions = date['subscriptions']
            state.user.purchases = date['purchases']
            state.user.discord = date['discord']
        },

        SET_USER_LOGGED_IN(state, auth) {
            state.user.auth = auth;
        },
        SET_USPLAYERS_TO_STATE: (state, playersUs) => {
            state.playersUs = playersUs
        },
        SET_EUPLAYERS_TO_STATE: (state, playersEu) => {
            state.playersEu = playersEu
        },
        SET_STATS_TO_STATE: (state, stats) => {
            state.user.stats = stats
        },
        SET_PURCHASES_TO_STATE: (state, data) => {
            state.user.purchases = data
        },
        SET_ROULETTE_TIMER_DATA: (state, data) => {
            state.roulette.time_remaining = data
        },
        SET_ITEMS_TO_STATE: (state, items) => {
            state.items = items
        },
        SET_LIVE_ITEMS_TO_STATE: (state, live_items) => {
            state.live_items = live_items
        },
        SET_SUBSCRIPTIONS_TO_STATE: (state, subscriptions) => {
            state.user.subscriptions = subscriptions
        },
        SET_PROMO_CODES_TO_STATE: (state, promo_codes) => {
            state.user.promo_codes = promo_codes
        },
        SET_PURCHASES_HISTORY: (state, data) => {
            state.user.purchases_history = data
        },
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products
        },
        SET_JWT: (state, jwtToken) => {
            state.JWT = jwtToken;
        },
        SET_LIVE_USERS: (state, users) => {
            state.live_users = users
        },
        SET_MONITORING_ONLINE: (state, data)=>{
            state.monitoring_online = data
        },
        SET_USER_DATA: (state, data) => {
            state.user.name = data.name
            state.user.balance = data.balance
            state.user.img = data.img
            state.user.discord.auth = data.discord.auth
            state.user.discord.data = data.discord.data
        },
        SET_DISCORD_DATA: (state, data) => {
            state.user.discord.link = data.link
        }
    },
    actions: {
        async GET_USER({commit}) {
            try {
                const user = await axios.post("https://api.panaceadayz.com/v2/Player.GetAuth")
                const updatedUser = {
                    name: user.data.user.name,
                    img:  user.data.user.avatar,
                    balance: user.data.user.balance,
                    discord: {
                        auth: user.data.user.discord.auth,
                        data: user.data.user.discord.data
                    }
                };
                commit("SET_USER_DATA", updatedUser);
            } catch (error) {
                return error
            }
        },
        async GET_DISCORD_REDIRECT_URI({commit}){
            try {
                const redirect_link = await axios.post('https://api.panaceadayz.com/v2/Player.GetRedirectLinkDiscord')
                commit("SET_DISCORD_DATA", redirect_link.data)
            } catch (error){
                return error
            }
        },
        async GET_PLAYERS_US({commit}) {
            try {
                const UsPlayers = await axios.post("https://api.panaceadayz.com/v2/Statistics.US")
                commit("SET_USPLAYERS_TO_STATE", UsPlayers.data)
            } catch (error) {
                console.log("Ошибка при получении игроков us" + error)
                return error
            }
        },
        async GET_PLAYERS_EU({commit}) {
            try {
                const EuPlayers = await axios.post("https://api.panaceadayz.com/v2/Statistics.EU")
                commit("SET_EUPLAYERS_TO_STATE", EuPlayers.data)
            } catch (error) {
                console.log("Ошибка при получении игроков Eu" + error)
                return error
            }
        },
        async GET_STATS({commit}) {
            try {
                const Stats = await axios.post("https://api.panaceadayz.com/v2/Player.Stats")
                commit("SET_STATS_TO_STATE", Stats.data)
            } catch (error) {
                return error
            }
        },
        async GET_TIMER_ROULETTE({commit}){
            try{
                const timer = await axios.post("https://api.panaceadayz.com/v2/Roulette.getRouletteTimer")
                commit("SET_ROULETTE_TIMER_DATA", timer.data.roulette_time_remaining)
            } catch (error){
                return error
            }
        },
        async GET_PURCHASES({commit}) {
            try {
                const purchases = await axios.post("https://api.panaceadayz.com/v2/Player.SelfPurchase",{},{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                commit("SET_PURCHASES_TO_STATE", purchases.data)
            } catch (error) {
                console.log("Ошибка при получении промокодов" , error)
                return error
            }
        },
        async GET_ITEMS({commit}) {
            function getRarityClass(rarity) {
                switch (rarity) {
                    case 1:
                        return 'silver';
                    case 2:
                        return 'blue';
                    case 3:
                        return 'purple';
                    case 4:
                        return 'red';
                }
            }

            try {
                const Items = await axios.post("https://api.panaceadayz.com/v2/Player.RouletteItems", {}, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const itemsWithRarityClass = Items.data.map(item => ({
                    ...item,
                    rarityClass: getRarityClass(item.rare),
                }));
                itemsWithRarityClass.sort((a, b) => {
                    // Сортируем по убыванию item.rare
                    return b.rare - a.rare;
                });
                commit("SET_ITEMS_TO_STATE", itemsWithRarityClass);
            } catch (error) {
                console.error("Ошибка при получении Товаров: " + error);
                return error;
            }
        },
        async GET_MONITORING_ONLINE({commit}){
            try {
                const monitoring_online = await axios.post("https://api.panaceadayz.com/v2/Monitoring.ServersOnline");
                commit("SET_MONITORING_ONLINE", monitoring_online.data);
            } catch (e){
                console.error("Ошибка при получении серверов: " + e);
            }
        },
        async GET_LIVE_ITEMS({commit}) {
            function getRarityClass(rarity) {
                switch (rarity) {
                    case 1:
                        return 'silver';
                    case 2:
                        return 'blue';
                    case 3:
                        return 'purple';
                    case 4:
                        return 'red';
                }
            }
            try {
                const Live_items = await axios.post("https://api.panaceadayz.com/v2/Player.RouletteLast")
                const itemsWithRarityClass = Live_items.data.map(item => ({
                    ...item,
                    rarityClass: getRarityClass(item.rare),
                }));
                commit("SET_LIVE_ITEMS_TO_STATE", itemsWithRarityClass)
            } catch (error) {
                console.log("Ошибка при получении Живых Товаров" + error)
                return error
            }
        },
        async GET_SUBSCRIPTIONS({commit}) {
            try {
                const Subscriptions = await axios.post("https://api.panaceadayz.com/v2/Player.selfSubs", {},
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                // console.log(Subscriptions.data)
                commit("SET_SUBSCRIPTIONS_TO_STATE", Subscriptions.data)
            } catch (error) {
                console.log("Ошибка при получении Подписки" + error)
                return error
            }
        },
        async GET_ALL_PROMO_CODES({commit}) {
            try {
                const Allpromo = await axios.post("https://api.panaceadayz.com/v2/Player.SelfPromos",{},{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                commit("SET_PROMO_CODES_TO_STATE", Allpromo.data)
            } catch (error) {
                console.log("Ошибка при получении всех промокодов" + error)
                return error
            }
        },
        async GET_PURCHASES_HISTORY({commit}) {
            try {
                const PurchHistory = await axios.post("https://api.panaceadayz.com/v2/Player.purchasesHistory", {}, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                commit("SET_PURCHASES_HISTORY", PurchHistory.data)
            } catch (error) {
                console.log("Ошибка при получении всех промокодов" + error)
                return error
            }
        },
        async GET_PRODUCTS({commit}) {
            try {
                // const localProductsData = await require('@/store/products.json');

                const Products = await axios.get("https://api.panaceadayz.com/v2/Shop.getAll",{
                    headers: {
                        "Cache-Control": "no-cache",
                        'Content-Type': 'application/json',
                        "Access-Control-Allow-Origin": "https://panaceadayz.ru",
                    },
                })
                commit("SET_PRODUCTS_TO_STATE", Products.data)
                // return Products.data
            } catch (error) {
                console.log("Ошибка при получении всех промокодов" + error)
                return error
            }
        },
        async GET_USERS_IN_LIVE({commit}) {
            try {
                const response = await axios.post('https://api.panaceadayz.com/v2/Roulette.usersOnline');
                commit("SET_LIVE_USERS", response.data.count)
            } catch (e) {
                console.log('Произошла ошибка при получении колва пользователей в рулетке:', e)
            }
        },
        async LogOut({commit}) {
            console.log('Perform Logout')
            try {
                const logout = await axios.post("https://api.panaceadayz.com/v2/Player.Logout", {}, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (logout) {
                    localStorage.removeItem('JWT');
                    localStorage.removeItem('user');
                    commit("SET_NEW_USER_DATE", {
                        "auth": false,
                        "name": "",
                        "img": "",
                        "SteamId": "",
                        "balance": "",
                        "isAdmin": "",
                        "stats": [],
                        "purchases_history": [],
                        "promo_codes": [],
                        "subscriptions": [],
                        "purchases": [],
                        "discord": []
                    });
                    commit("SET_JWT", "");
                    window.location = '/'
                } else {
                    console.log('Произошла ошибка: ' + logout.data)
                }
            } catch (e) {
                console.log('Произошла ошибка: ', e)
            }
        },
    },
    plugins: [vuexLocal.plugin, createPersistedState()]
})