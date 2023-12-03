<template>
    <div class="container px-4 px-lg-5 mt-5">
                <div class="row justify-content-center">
                    <table class="table table-striped table-bordered table-hover table-condensed table-responsive">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Date</th>
                            <th>Options</th>
                        </tr>
                        </thead>
                        <tbody v-if="this.posts.length > 0">
                            <tr v-for="(posts, index) in this.posts" :key="index">
                                <td>{{ posts.id }}</td>
                                <td>{{ posts.title }}</td>
                                <td>{{ posts.content }}</td>
                                <td>{{ format_date(posts.created_at) }}</td>
                                
                                <td>
                                    <RouterLink class="btn btn-success" 
                                                :to="{ path: '/pages/'+posts.id+'/edit' }">
                                        Edit
                                    </RouterLink>
                                    <button type="button" @click="deletePost(posts.id)" class="btn btn-danger">
                                        delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
</template>

<script>

    import axios from 'axios'
    import moment from 'moment';
    
    export default {

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
                    //console.log(this.posts);
                });
            },

            deletePost(postId){
                axios.delete(`http://127.0.0.1:8000/api/posts/${postId}/delete`).then(res => {
                    //console.log(res.data);
                    this.getPosts();
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
            }
        }

    }
</script>
