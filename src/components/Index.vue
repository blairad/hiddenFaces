<template>
  <div class="index container"> <!-- container brings everything into a central column on page -->
    <!-- card is a class by materialize and puts each div in a card-->
    <div class="card" v-for="face in faces" :key="face.id"> 
      <div class="card-content">
        <i class="material-icons delete" @click="deleteInfo(face.id)">delete</i>
        <h2 class="orange-text">{{ face.title }}</h2>
        <ul class="info">
          <li v-for="(inf, index) in face.info" :key="index">
            <span class="chip">{{ inf }}</span> <!-- chip is a class by materialize -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import camera from "@/assests/camera.jpeg"
// import image from "./assets/light.jpeg"

export default {
  name: 'Index',
  data () {
    return {
      faces: [
        {title: 'camera', slug: 'camera', info: ['austria', 'man-made'], id: '1'},
        {title: 'light', slug: 'light', info: ['england', 'man-made'], id: '2'}
      ]
    }
  },
  methods: {
    deleteInfo(id){
      this.faces = this.faces.filter(face => {
        return face.id != id
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 50px;
}
.index h2 {
  font-size: 2em;
  text-align: center;
  margin-top: 0px;
}
.index .info{
  margin: 30px auto;
}
.index .info li{
  display: inline-block;
}
.index .delete{
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
</style>
