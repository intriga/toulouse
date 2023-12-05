<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <!-- <a class="navbar-brand" href="#!">Start Bootstrap</a> -->
                <router-link class="navbar-brand" to="/">Home</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="#!">About</a> -->
                            <router-link class="nav-link" 
                                        :to="{name: 'pages.about'}">About</router-link>
                        </li>
                        <li class="nav-item">
                            <!-- <a class="dropdown-item" href="#!">All Products</a> -->
                            <router-link class="nav-link" 
                                :to="{name: 'pages.products'}">All Products</router-link>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav> 
</template>