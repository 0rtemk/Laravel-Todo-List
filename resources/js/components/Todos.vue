<template>
    <div>
        <h4 class="text-center">All Todos</h4><br/>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>UserName</th>
                <th>Case</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="todo in todos" :key="todo.id">
                <td>{{ todo.id }}</td>
                <td>{{ todo.username }}</td>
                <td>{{ todo.case }}</td>
                <td>{{ todo.description }}</td>
                <td>{{ todo.status === 1 ? "Complete" : "In progress" }}</td>
                <td>
                    <div class="btn-group" role="group" :class="isUserCreatePost(todo.username) ? '': 'd-none'">
                        <router-link :to="{name: 'edittodo', params: { id: todo.id }}" class="btn btn-primary">Edit
                        </router-link>
                        <button class="btn btn-danger" @click="deleteTodo(todo.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>

        <button type="button" class="btn btn-info" @click="this.$router.push('/todos/add')">Add Todo</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todos: []
        }
    },
    created() {
        //console.log(window.Laravel.user.name);
        this.$axios.get('/sanctum/csrf-cookie').then(response => {
            this.$axios.get('/api/todos')
                .then(response => {
                    this.todos = response.data;
                })
                .catch(function (error) {
                    console.error(error);
                });
        })
    },

    methods: {
        deleteTodo(id) {
            this.$axios.get('/sanctum/csrf-cookie').then(response => {
                this.$axios.delete(`/api/todos/delete/${id}`)
                    .then(response => {
                        let i = this.todos.map(item => item.id).indexOf(id); // find index of your object
                        this.todos.splice(i, 1)
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
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