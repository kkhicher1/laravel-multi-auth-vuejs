window.Vue = require('vue');
import VueRouter from 'vue-router';


import Home from './components/routes/Home.vue';
import Login from './components/routes/Login.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login }
];


//router assign
const routers = new VueRouter({
    mode: 'history',
    routes
});

export default routers;