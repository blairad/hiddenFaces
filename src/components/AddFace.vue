<template>
    <div class="add-face container">
        <h2 class="center-align indigo-text">Add New Face</h2>
        <form @submit.prevent="addFace">
            <div class="field title">
                <label for="title">Face Title</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div class="field add-location">
                <label for="add-location">Location (Country)</label>
                <input type="text" name="add-location">
            </div>
            <div class="field checkbox">
                <label>
                    <input type="checkbox" class="filled-in"  v-model="checkedBoxOne">
                    <span>Natrual</span>
                </label>
                <label>
                    <input type="checkbox" class="filled-in"  v-model="checkedBoxtwo">
                    <span>Man Made</span>
                </label>
            </div>
            
            <div class="field center-align">
                <button class="btn-flat blue lighten-2" >Add Face</button>
                <!-- button doesn't seem to work with just btn as classname so went for btn-flat and it worked? -->
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
            checkedBoxOne: false,
            checkedBoxtwo: false
        }
    },
    methods: {
        addFace(){
            console.log(this.title)
        }
    }
}
</script>

<style>
.add-face{
    margin-top: 65px;
    padding: 20px;
    max-width: 700px;
}
.add-face h2{
    font-size: 2.5em;
    margin: 20px auto;
}
.add-face .field{
    margin: 20px auto;
}
.add-face .field label{
    padding: 15px;
}


</style>