<template>
    <div class="container mt-5 col-md-5">
        <div class="card">
            <div class="card-header">
                <h4>Create Post</h4>
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
                        <button type="button" @click="savePost" class="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'createPost',
    data(){
        return {
            model: {
                post: {
                    title: '',
                    content: '',
                }
            }
        }
    },
    methods: {
        savePost(){
            axios.post('http://127.0.0.1:8000/api/post', this.model.post).then(res => {
                //console.log(res.data);
                
                this.model.post = {
                    title: '',
                    content: '',
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

            this.$router.push("/");
            
        }
    }
}
</script>


