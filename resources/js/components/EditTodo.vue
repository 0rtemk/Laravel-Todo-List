<template>
    <div>
        <h4 class="text-center">Edit Todo</h4>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateTodo">
                    <div class="form-group pt-2">
                        <label class = "fs-4">Case: </label>
                        <input type="text" class="form-control" v-model="todo.case">
                    </div>
                    <div class="form-group pt-2">
                        <label class = "fs-4">Description: </label>
                        <textarea class="form-control" rows="3" v-model="todo.description"></textarea>
                    </div>
                    <div class = "form-check pt-2">
                        <label class = "form-check-label fs-5" for="CheckBox">Complete this case?</label>   
                        <input class="form-check-input p-2" id = "CheckBox" type="checkbox" :checked = "todo.status === 1" @click="isComplete">
                    </div>
                    <div :class="isUserCreatePost(todo.username)?'':'d-none'">
                        <button type="submit" class="btn btn-primary mt-2">Update Todo</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: {}
        }
    },
    created() {
        this.$axios.get('/sanctum/csrf-cookie').then(response => {
            this.$axios.get(`/api/todos/edit/${this.$route.params.id}`)
                .then(response => {
                    this.todo = response.data;
                })
                .catch(function (error) {
                    console.error(error);
                });
        })
    },
    methods: {
        updateTodo() {
            this.$axios.get('/sanctum/csrf-cookie').then(response => {
                this.$axios.post(`/api/todos/update/${this.$route.params.id}`, this.todo)
                    .then(response => {
                        this.$router.push({name: 'todos'});
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        },

        isComplete(){
            this.todo.status === 1 ? this.todo.status = 0 : this.todo.status = 1
            console.log(this.todo.status)
        },

        isUserCreatePost(data){
            return data === window.Laravel.user.name
        }

    },
    beforeRouteEnter(to, from, next) {
        if (!window.Laravel.isLoggedin) {
            window.location.href = "/";
        }
        next();
    }
}
</script>