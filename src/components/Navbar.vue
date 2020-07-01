<template>
    <div class="navbar">
        <nav class="nav-extended blue lighten-1">
            <div class="nav-content">
                <router-link to="">
                    <span class="nav-title">Inanimate Faces</span>
                </router-link>
            </div>
        </nav>
        <div class="nav-add-btn deep-orange lighten-1">
                <router-link to="">
                    <span class="add-btn">Add a Face</span>
                    <a class="waves-effect waves-light btn">
                        <i class="material-icons left">add</i>button
                    </a>
                </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {

        }
    }
}
</script>

<style>
.navbar nav{
    position: relative;
    padding: 0 20px;
}
.nav-add-btn{
    padding: 0 20px;
    text-decoration: none;
}
</style>