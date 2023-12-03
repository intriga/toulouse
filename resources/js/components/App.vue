<template>
    <div>
        <!-- Navigation-->        
         <Navbar></Navbar>

        <!-- Header-->
        <Header></Header>          
        

        <!-- Section-->
        <section class="py-5">
            <router-view></router-view>
        </section>

        <!-- Footer-->
        <Footer></Footer>
       
        
    </div>
</template>


<script>  
    import Navbar from './includes/Navbar.vue'  
    import Header from './includes/Header.vue'  
    import Footer from './includes/Footer.vue'   

    
    export default {
        components: { Navbar, Header, Footer },
        

    }
</script>