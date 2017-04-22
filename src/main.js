// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        dailies: {},
        themes: {},
        daily: {},
        themeItems: {},
        themeItemDetail: {}
    },
    mutations: {
        getDailies(state, dailies){
            state.dailies = dailies;
        },
        getDailyById(state, daily){
            state.daily = daily;
        },
        getThemes(state, themes){
            state.themes = themes;
        },
        getThemeItemsById(state, themeItems){
            state.themeItems = themeItems;
        },
        getThemeItemDetailById(state, themeItemDetail){
            state.themeItemDetail = themeItemDetail;
        }
    },
    actions: {
        getDailiesAction(store){
            Vue.axios.get('/api/news/latest').then(response => {
                let dailies = response.data;
                store.commit('getDailies', dailies);
            })
        },
        getDailyByIdAction(store, id){
            Vue.axios.get('/api/news/' + id).then(response => {
                let daily = response.data;
                store.commit('getDailyById', daily);
            })
        },
        getThemesAction(store){
            Vue.axios.get('/api/themes').then(response => {
                let themes = response.data;
                store.commit('getThemes', themes);
            })
        },
        getThemeItemsByIdAction(store, id){
            Vue.axios.get('/api/theme/' + id).then(response => {
                let themeItems = response.data;
                store.commit('getThemeItemsById', themeItems);
            })
        },
        getThemeItemDetailByIdAction(store, id){
            Vue.axios.get('/api/news/' + id).then(response => {
                let themeItemDetail = response.data;
                store.commit('getThemeItemDetailById', themeItemDetail);
            })
        }
    }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
