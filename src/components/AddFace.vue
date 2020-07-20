<template>
    <div class="add-face container">
        <h2 class="center-align indigo-text">Add New Face</h2>
        <form>
            <div class="field title">
                <label for="title">Face Title</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div class="field add-location">
                <label for="location">Location</label>
                <input type="text" name="location" v-model="location">
            </div>
            <div class="field natural">
                <label for="natural">Man Made or Natural</label>
                <input type="text" name="natural" v-model="natural">
            </div>
            <div class="field add-image">

            </div>
        </form>
    </div>
    
</template>

<script>
export default {
    name: 'AddFace',
    data(){
        return{
            title: null,
            location: null
        }
    }
}
</script>

<style>

</style>