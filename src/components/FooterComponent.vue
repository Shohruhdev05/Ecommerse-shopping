<template>
<footer>
  <div class="container">
    <div class="row footer-navbar ">
      <div class="col-md-6 mt-5">
        <span class="legant-logo"><h3 class="padding-logo">3legant.</h3><h6 class="padding-logo mt-1">|</h6> <p class="padding-logo mt-1">Gift & Decoration Store</p> </span>
      </div>
      <div class="col-md-6 navbar-links mt-5">
        <router-link to="/" class="navbar-link">Home</router-link>
        <router-link to="/shop" class="navbar-link">Shop</router-link>
        <router-link to="/contact-us" class="navbar-link">Contact Us</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 footer-solid mt-3"></div>
    </div>
    <div class="row mt-3">
      <div class="col-md-4">
        <p class="text-white">Copyright © 2023 3legant. All rights reserved</p>
      </div>
      <div class="col-md-4 d-flex">
        <p><router-link to="" class="linkPrivacy"><b>Privacy Policy</b></router-link></p>
        <p><router-link to="" class="linkPrivacy"><b>Terms of Use</b></router-link></p>
      </div>
      <div class="col-md-2 offset-2 footer-icons">
        <router-link to="" class="text-white footer-icon-link"><i class="bi bi-instagram"></i></router-link>
        <router-link to="" class="text-white footer-icon-link"><i class="bi bi-facebook"></i></router-link>
        <router-link to="" class="text-white footer-icon-link"><i class="bi bi-youtube"></i></router-link>
      </div>
    </div>
  </div>
</footer>
</template>
<script setup>

</script>


<style scoped>
.footer-icons{
  margin: 0;
}
footer {
  background-color: #141718;
  color: white;
  padding: 20px 0;
}

.navbar-link {
  text-decoration: none;
  color: #fff;
  padding: 0 15px;
}

.footer-navbar {
  justify-content: space-between;
}

.legant-logo {
  display: flex;
  flex-wrap: wrap;
}

.padding-logo {
  padding: 0 20px;
  margin: 0;
}

.footer-solid {
  height: 1px;
  background-color: #fff;
}

.linkPrivacy {
  text-decoration: none;
  color: #fff;
  padding: 0 15px;
}

.footer-icon-link {
  text-decoration: none;
  color: #fff;
  padding: 0 5px;
  font-size: 20px;
}

.footer-icons {
  display: flex;
  justify-content: flex-end;
}

@media screen and (max-width: 991px) {
  .navbar-links {
    text-align: right;
  }
}

@media screen and (max-width: 767px) {
  .footer-navbar {
    flex-direction: column;
    text-align: center;
  }
  .navbar-links {
    margin-top: 20px;
  }
  .legant-logo {
    justify-content: center;
  }
  .footer-icons {
    justify-content: center;
    margin-top: 20px;
  }
}

@media screen and (max-width: 480px) {
  .footer-navbar {
    flex-direction: column;
    text-align: center;
  }
  .navbar-links {
    margin-top: 15px;
  }
  .legant-logo {
    justify-content: center;
    margin-bottom: 15px;
  }
  .footer-icons {
    justify-content: center;
    margin-top: 15px;
  }
  .footer-solid {
    margin-top: 15px;
  }
  .linkPrivacy {
    padding: 0 10px;
  }
  .footer-icon-link {
    padding: 0 10px;
  }
}

@media screen and (max-width: 375px) {
  .legant-logo {
    flex-direction: column;
    align-items: center;
  }
  .padding-logo {
    padding: 5px 0;
  }
  .navbar-links {
    flex-direction: column;
  }
  .linkPrivacy {
    padding: 0 5px;
  }
  .footer-icon-link {
    padding: 0 5px;
  }
}
</style>
