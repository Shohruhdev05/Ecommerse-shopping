<template>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="card text-white">
        <img src="../../../images/Divan.jpg" class="card-img" alt="...">
        <div class="card-img-overlay legant_logo">
          <img src="../../../images/Logo.jpg" height="27" width="105"/>
        </div>
      </div>
    </div>
    <div class="col-md-5 offset-1">
      <div class="signUp_registration">
        <div class="signUp">
          <h1>Sign up</h1>
        </div>
        <div class="signUpText mt-3">
          <p>Already have an account? <span><router-link to="/sign-in" class="linkSignIn">Sign in</router-link></span></p>
        </div>
        <label for="firstName" class="FirstName mt-2">First name</label>
        <input type="text" id="firstName" class="form-control" v-model="first_name"/>
        <label for="LastName" class="LastName mt-2">Username</label>
        <input type="text" id="LastName" class="form-control" v-model="last_name">
        <label for="yourName" class="phone_number mt-2">Phone Number</label>
        <input type="text" id="phone_number" class="form-control" v-model="phone_number"/>
        <label for="password" class="mt-2 password">Password</label>
        <input type="password" id="password" class="form-control" v-model="password">
        <div class="row mt-4">
          <div class="col-md-1">
            <input type="checkbox" class="form-check-input SignUpCheckbox" >
          </div>
          <div class="col-md-10">
            <p>I agree with <router-link to="" class="linkPrivacy"><b>Privacy Policy</b></router-link> and <router-link to="" class="linkPrivacy"><b>Terms of Use</b></router-link></p>
          </div>
        </div>
        <button @click="register" type="submit" class="btn btn-dark w-100">Sign Up</button>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import {ref} from "vue";
import axios from "axios";
import router from "@/router/index.js";
import Toastify from 'toastify-js'

const first_name = ref('')
const last_name = ref('')
const phone_number = ref('')
const password = ref('')
const token = ref('')

const register = function (){
  axios({
    method: 'POST',
    url: 'http://127.0.0.1:8000/api/register',
    data:{
      first_name:first_name.value,
      phone_number:phone_number.value,
      last_name:last_name.value,
      password:password.value
    },
    header:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    console.log(response);
    token.value = response.data.token;
    router.push('/')
    Toastify({
      text: "Xush kelibsiz!",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      border: "none",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, green, lightgreen)",
        color:"white",
        borderRadius:"10px",
      }
    }).showToast();
  }).catch((error) => {
    alert(error.response.data.message)
  })
}
</script>


<style scoped>
.legant_logo{
  text-align: center;
}
.linkSignIn{
  text-decoration: none;
  color: green;
}
.linkPrivacy{
  text-decoration: none;
  color: #000
}
.signUp_registration{
  margin-top: 150px;
}
.card{
  border: none;
}
</style>