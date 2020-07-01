<template>
  <div class="navbar">
    <nav class="nav-extended blue lighten-1">
      <div class="nav-content">
        <router-link to="">
          <span class="nav-title">Inanimate Faces</span>
        </router-link>
      </div>
    </nav>
    <div class="nav-add-btn teal lighten-2">
      <router-link to="">
        <span class="add-btn"></span>
        <a class="waves-effect waves-light btn-small">
          <i class="material-icons left">add</i>Add a Face
        </a>
      </router-link>
    </div>
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
.nav-add-btn{
    height: 32.4px;
}
.add-btn {
  padding: 0 8px;
  color: white;
  border-radius: 3px;
}
</style>
