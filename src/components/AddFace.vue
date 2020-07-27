<template>
  <div class="add-face container">
    <h2 class="center-align indigo-text">Add New Face</h2>
    <form @submit.prevent="submitFace">
      <div class="field title">
        <label for="title">Face Title</label>
        <input type="text" name="title" v-model="title" />
        <p v-if="!titleIsValid" class="red-text">The name of the field is reqired</p>
      </div>
      <div class="field addLocation">
        <label for="addLocation">Location (Country)</label>
        <input type="text" name="add-Location" />
        <p v-if="!locationIsValid" class="red-text">The location is reqired</p>
      </div>
      <div class="field checkbox">
        <label>
          <input
            type="checkbox"
            class="filled-in"
            value="Natrual"
            @change="check"
            v-model="checkedBox.one"
          />
          <span>Natrual</span>
        </label>
        <label>
          <input
            type="checkbox"
            class="filled-in"
            value="Man Made"
            @change="check"
            v-model="checkedBox.two"
          />
          <span>Man Made</span>
        </label>
        <p v-if="feedback" class="red-text">{{ feedback.checkedBox }}</p>
      </div>

      <div class="field center-align">
        <button class="btn-flat blue lighten-2">Add Face</button>
        <!-- button doesn't seem to work with just btn as classname so went for btn-flat and it worked? -->
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: "AddFace",
  data() {
    return {
      title: null,
      addLocation: null,
      checkedBox: {
        one: false,
        two: false
      },
      feedback:{
          checkedBox: null,
          title: null,
          location: null,
          info: null
      } 
    };
  },
  computed: {
    titleIsValid() {
      return !!this.feedback.title
    },
    locationIsValid(){
      return !!this.feedback.location
    }
  },
  methods: {
    submitFace() {
      const formIsValid  = this.titleIsValid && this.locationIsValid

      if(formIsValid){
        console.log('form submitted', this.feedback)
      } else {
        console.log('invalid form')
      }
    },
    check() {
      // Use @change instead of @click. Click event is triggered before value is really changed.
      //to prompt user to select one
      if (this.checkedBox.one && this.checkedBox.two) {
        this.feedback.checkedBox = "Only select one";
      } else {
        this.feedback.checkedBox = null;
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
  padding: 15px;
}
.btn-flat {
  margin-top: 50px;
}
</style>
