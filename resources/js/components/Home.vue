<template>
    <div>
        <!-- Navigation-->
        <navbar></navbar>

        <!-- Header-->
        <Header></Header>

        <!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row justify-content-center">
                    <table class="table table-striped table-bordered table-hover table-condensed table-responsive">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Date</th>
                        </tr>
                        </thead>
                        <tbody v-if="this.posts.length > 0">
                            <tr v-for="(posts, index) in this.posts" :key="index">
                                <td>{{ posts.id }}</td>
                                <td>{{ posts.title }}</td>
                                <td>{{ posts.content }}</td>
                                <td>{{ format_date(posts.created_at) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        <!-- Footer-->
        <Footer></Footer>
        
    </div>
</template>

<script>
    import Navbar from './includes/Navbar.vue'   
    import Header from './includes/Header.vue'   
    import Footer from './includes/Footer.vue'   


    import axios from 'axios'
    import moment from 'moment';
    
    export default {
        components: { Navbar, Header, Footer },

        name: 'posts',

        data() {
            return {
                posts: []
            };
        },

        mounted() {
            this.getPosts();
        },

        methods: {
            format_date(value) {
                if (value) {
                    return moment(String(value)).format('DD/MM/YYYY');
                }
            },
            getPosts() {
                axios.get('http://127.0.0.1:8000/api/posts').then(res => {
                    this.posts = res.data;
                    console.log(this.posts);
                });
            },
        }

    }
</script>
