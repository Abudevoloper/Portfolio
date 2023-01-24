import {createRouter, createWebHistory} from "vue-router"
import AboutMe from "@/pages/AboutMe";
import FirstPage from "@/pages/FirstPage";
import MedianCol from "@/components/HeaderList";



const routes = [
    {
        path: '/',
        component: FirstPage
    },


    {
        path: '/aboutMe',
        component: AboutMe
    } ,

    {
        path: '/menu',
        component: MedianCol
    } ,
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
