<template>
  <div class="navbar">
    <nav class="nav-extended blue lighten-1">
      <div class="nav-content">
        <router-link :to="{ name: 'Index' }">
          <span class="nav-title">Inanimate Faces</span>
        </router-link>
       <a href="" class="waves-effect waves-light btn">add face
        <router-link :to="{ name: 'AddFace' }">
            <i class="material-icons right" style="margin-top:-10px">add</i>        
        </router-link>
        </a> 
      </div>
    </nav>
    
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style>
.navbar nav {
  position: relative;
  padding: 0 20px; 
}
.btn{
    position: absolute;
    align-items: flex-end;
    margin-left: 1000px;
    margin-top: 25px; 
}
/* .nav-title{
  color:#f57f17;
} */
</style>
 