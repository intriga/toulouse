import { createRouter, createWebHistory } from 'vue-router';


import Index from "@/components/includes/Index.vue";
import About from "@/components/pages/About.vue";

const routes = [
    { 
        path: '/', 
        name: 'includes.Index',
        component: Index 
    },    
    { 
        path: '/pages/about', 
        name: 'pages.about',
        component: About 
    }, 
]


export default createRouter({
    history: createWebHistory(),
    routes
})