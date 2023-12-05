<template>
    <div class="container mt-5 col-md-5">
        <div class="card">
            <div class="card-header">
                <h4>edit Post</h4>
            </div>
            <div class="card-body">
                <form method="POST">
                    <div class="mb-3">
                        <label for="">title</label>
                        <input type="text" name="title" v-model="model.post.title" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="">content</label>
                        <input type="text" name="content" v-model="model.post.content" class="form-control">
                    </div>
                    <div class="mb-3">
                        <button type="button" @click="updatePost" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    
    name: 'editPost',
    data(){
        return {
            postId: '',
            model: {
                post: {
                    title: '',
                    content: '',
                }
            }
        }
    },
    mounted(){
        // console.log(this.$route.params.id);
        this.postId = this.$route.params.id;
        this.getPostData(this.$route.params.id);
    },
    methods:{
        getPostData(postId){
            axios.get(`http://127.0.0.1:8000/api/post/${postId}/edit`)
                .then(res => {
                    //console.log(res.data); 

                    this.model.post = res.data
                })
        },

        updatePost(){
            axios.put(`http://127.0.0.1:8000/api/post/${this.postId}`, this.model.post)
                .then(res => {                    
                    console.log(res.data);
                    window.location = 'http://127.0.0.1:8000'
                    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
            
        }
    }
}

</script>


