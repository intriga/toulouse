import { createRouter, createWebHistory } from 'vue-router';


import Index from "@/components/includes/Index.vue";
import About from "@/components/pages/About.vue";
import Edit from "@/components/pages/Edit.vue";

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
    { 
        path: '/pages/:id/edit', 
        name: 'pages.edit',
        component: Edit 
    }, 
]


export default createRouter({
    history: createWebHistory(),
    routes
})