import {createRouter, createWebHistory} from "vue-router"

const routes = [

    {
        path: '/',
        component: function () {
            return import ('../components/AboutList.vue')
        }

    },

    {
        path: '/exit',
        component: function () {
            return import ('../pages/FirstPage.vue')
        }

    }


]


export default createRouter({
    history: createWebHistory(),
    routes,

})
