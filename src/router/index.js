import Vue from 'vue';
import Router from 'vue-router';
import Daily from '../views/Daily';
import Theme from '../views/Theme';
import About from './../views/About';
import DailyDetailView from '../views/DailyDetailView';
import ThemeItemView from '../views/ThemeItemView';
import ThemeDaily from '../views/ThemeDaily';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/daily'
        },
        {
            path: '/daily',
            name: 'Daily',
            component: Daily
        },
        {
            path: '/theme',
            name: 'Theme',
            component: Theme
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/daily/:id',
            name: 'DailyDetailView',
            component: DailyDetailView
        },
        {
            path: '/theme/:id',
            name: 'ThemeItemView',
            component: ThemeItemView
        },
        {
            path: '/theme-daily/:id',
            name: 'ThemeItemDetailView',
            component: ThemeDaily
        },
    ]
})
