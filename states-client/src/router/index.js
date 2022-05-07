import {createRouter, createWebHashHistory} from "vue-router";
import StateList from "@/components/StateList";
import AboutSite from "@/components/AboutSite";
import StateMap from "@/components/StateMap";
import NotFound from "@/components/NotFound";
import StatesVisited from "@/components/StatesVisited";


export  default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: "StateList",
            component:StateList
        },
        {
            path: "/about",
            name:"AboutSite",
            component: AboutSite
        },
        {
            path: "/map/:state",
            name: "StateMap",
            component:StateMap
        },
        {
            path:"/visited",
            name:"StatesVisited",
            component:StatesVisited
        },
        {
            path:'/:pathMatch(.*)*',
            name:'NotFound',
            component: NotFound
        }
    ]
})