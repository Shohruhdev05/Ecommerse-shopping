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
      <div class="signIn_registration">
        <div class="signIn">
          <h1>Sign in</h1>
        </div>
        <div class="signUpText mt-3">
          <p>Don’t have an account yet?<span><router-link to="/sign-up" class="linkSignUp">Sign up</router-link></span></p>
        </div>
          <label for="yourName" class="phone_number mt-2">Phone Number</label>
          <input type="text" id="phone_number" class="form-control" v-model="phone_number"/>
        <label for="password" class="mt-2 password">Password</label>
        <input type="password" id="password" class="form-control" v-model="password"/>
        <div class="row mt-4 check_remember">
          <div class="col-md-1">
            <input type="checkbox" class="form-check-input SignUpCheckbox" >
          </div>
          <div class="col-md-5">
            <p>Remember me </p>
          </div>
          <div class="col-md-4 offset-2">
            <router-link to="" class="link_forgot"><b>Forgot password?</b></router-link>
          </div>
        </div>
        <button @click="login" type="submit" class="btn btn-dark w-100">Sign In</button>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
  import {ref} from "vue";
  import axios from 'axios';
  import router from "@/router/index.js";
  import Toastify from 'toastify-js'


  const phone_number = ref('')
  const password = ref('')
  const token = ref('')
  const login = function (){
    axios({
      method: 'POST',
        url: 'http://127.0.0.1:8000/api/login',
      data:{
        phone_number:phone_number.value,
        password:password.value
      },
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response);
       token.value = response.data.token

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
          borderRadius:"",
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
.linkSignUp{
  text-decoration: none;
  color: green;
}
.link_forgot{
  text-decoration: none;
  color: #000
}
.signIn_registration{
  margin-top: 150px;
}
.card{
  border: none  ;
}
</style>