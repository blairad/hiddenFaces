<template>
  <div class="add-face container">
    <h2 class="center-align indigo-text">Add New Face</h2>
    <form @submit.prevent="submitFace">
      <div class="field title">
        <label for="title">Face Title</label>
        <input type="text" name="title" v-model="feedback.title" />
        <p v-if="!titleIsValid" class="error-message">* required</p>
      </div>
      <div class="field addLocation ">
        <label for="addLocation">Location (Country)</label> 
        <input type="text" name="add-Location" v-model="feedback.location"/>
        <p v-if="!locationIsValid" class="error-message">* required</p>
      </div>
      <div class="field checkbox">
        <label>
          <input
            type="checkbox"
            class="filled-in"
            value="Natrual"
            @change="check"
            v-model="checkedBox"
          />
          <span>Natrual</span>
        </label>
        <label>
          <input
            type="checkbox"
            class="filled-in"
            value="Man Made"
            @change="check"
            v-model="checkedBox"
          />
          <span>Man Made</span>
        </label>
        <p v-if="feedback" class="error-message">{{ feedback.checkedBox }}</p>
      </div>

      <div class="field center-align">
        <button class="btn-flat blue lighten-2" :disabled="!formIsValid">Add Face</button>
        <!-- button doesn't seem to work with just btn as classname so went for btn-flat and it worked? -->
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
  name: "AddFace",
  data() {
    return {
      title: null,
      addLocation: null,
      checkedBox:[],
      feedback:{
          checkedBox: null,
          title: null,
          location: null
      },
      slug: null
    };
  },
  computed: {
    titleIsValid() {
      return !!this.feedback.title
    },
    locationIsValid(){
      return !!this.feedback.location
    },
    formIsValid(){
      return this.titleIsValid && 
      this.locationIsValid && 
      this.checkedBox.length === 1
    }
  },
  methods: {
    check() {
      // Use @change instead of @click. Click event is triggered before value is really changed.
      //to prompt user to select one
      // if (this.checkedBox.one && this.checkedBox.two) {
      if (this.checkedBox.length > 1) {
        this.feedback.checkedBox = "Only select one"      
          
      } else {
        this.feedback.checkedBox = null;
      }
    },
    submitFace() {
      if(this.formIsValid){
        //create a slug
        this.slug = slugify(this.feedback.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        console.log(this.slug)
        db.collection('faces').add({
          title: this.feedback.title,
          location: this.feedback.location,
          checkedBox: this.checkedBox,
          slug: this.slug
        }).then(() => {
          this.$router.push({ name: 'Index' })
        }).catch(err => {
          console.log(err)
        })
        
      } else {
        this.feedback = "You must fill in the form properly"
      }
    }
  }
};
</script>

<style>
.add-face {
  margin-top: 65px;
  padding: 20px;
  max-width: 700px;
}
.add-face h2 {
  font-size: 2.5em;
  margin: 20px auto;
}
.add-face .field {
  margin: 20px auto;
}
.add-face .field label {
  padding: 10px;
}
.btn-flat {
  margin-top: 50px;
}
.error-message{
  padding: 10px;
  color: red;
}
</style>
