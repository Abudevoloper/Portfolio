import {createRouter, createWebHistory} from "vue-router"

const routes = [

    {
        path: '/',
        component: function () {
            return import ('../components/AboutList.vue')
        }

    },

]


export default createRouter({
    history: createWebHistory(),
    routes,

})
