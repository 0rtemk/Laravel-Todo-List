<template>
    <div>
        <h4 class="text-center">Add Todo</h4>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addTodo">
                    <div class="form-group pt-2">
                        <label class = "fs-4">Case: </label>
                        <input type="text" class="form-control" v-model="todo.case">
                    </div>
                    <div class="form-group pt-2">
                        <label class = "fs-4">Description: </label>
                        <textarea class="form-control" rows="3" v-model="todo.description"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mt-2">Add Todo</button>
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
    methods: {
        addTodo() {
            if (window.Laravel.user) {
                this.todo.username = window.Laravel.user.name
            }
            
            this.todo.status = false
            this.$axios.get('/sanctum/csrf-cookie').then(() => {
                this.$axios.post('/api/todos/add', this.todo)
                    .then(() => {
                        this.$router.push({name: 'todos'})
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        },

        isComplete(){
            this.todo.status === 1 ? this.todo.status = 0 : this.todo.status = 1
            //console.log(this.todo.status)
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