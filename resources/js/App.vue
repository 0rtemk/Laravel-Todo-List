<template>
    <div class="container">
        <img class="image" src="https://i.imgflip.com/1zhlei.jpg" alt="sad dog">

        <ul class = "nav" v-if="isLoggedIn">
            <li class="nav-item">
                <img src="https://i.pinimg.com/originals/d3/6f/40/d36f40b5f29a183f06c0700070c36f4d.png" alt="logo" width="60" height="60">
            </li>
            <li class="nav-item">
                <router-link to="/dashboard" class="fs-2 nav-link">Dashboard</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/todos" class="fs-2 nav-link">Todos</router-link>
            </li>
            <li class="nav-item">
                <a class="fs-2 nav-link" style="cursor: pointer;" @click="logout">Logout</a>
            </li>
        </ul>
        <ul class = "nav" v-else>
            <li class="nav-item">
                <img src="https://i.pinimg.com/originals/d3/6f/40/d36f40b5f29a183f06c0700070c36f4d.png" alt="logo" width="60" height="60">
            </li>            <li class="nav-item">
                <router-link to="/" class="fs-2 nav-link">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/login" class="fs-2 nav-link">login</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/register" class="fs-2 nav-link">Register</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about" class="fs-2 nav-link">About</router-link>
            </li>
        </ul>
        <br/>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            isLoggedIn: false,
        }
    },
    created() {
        if (window.Laravel.isLoggedin) {
            this.isLoggedIn = true
        }
    },
    methods: {
        logout(e) {
            console.log('ss')
            e.preventDefault()
            this.$axios.get('/sanctum/csrf-cookie').then(response => {
                this.$axios.post('/api/logout')
                    .then(response => {
                        if (response.data.success) {
                            window.location.href = "/"
                        } else {
                            console.log(response)
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        }
    },
}
</script>

<style scoped>
.image{
    width: 100%;
    height: 150px;
}
</style>