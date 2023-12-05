import { createRouter, createWebHistory } from 'vue-router';


import Index from "@/components/includes/Index.vue";
import About from "@/components/pages/About.vue";
import Create from "@/components/pages/Create.vue";
import Edit from "@/components/pages/Edit.vue";
import Products from "@/components/pages/Products.vue";

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
        path: '/pages/create', 
        name: 'pages.create',
        component: Create 
    }, 
    { 
        path: '/pages/:id/edit', 
        name: 'pages.edit',
        component: Edit 
    }, 
    { 
        path: '/pages/products', 
        name: 'pages.products',
        component: Products 
    },
]


export default createRouter({
    history: createWebHistory(),
    routes
})