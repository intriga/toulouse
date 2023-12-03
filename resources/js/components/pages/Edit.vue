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
                        <input type="text" name="title"  class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="">content</label>
                        <input type="text" name="content"  class="form-control">
                    </div>
                    <div class="mb-3">
                        <button type="button" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


