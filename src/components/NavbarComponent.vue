<template>
<nav>
  <div class="container mt-2">
    <div class="row navbar-comp">
      <div class="col-md-1">
        <div class="row">
          <div class="w3-sidebar w3-bar-block w3-border-right" style="display:none" id="mySidebar">
            <img src="../../../images/logo-legant.svg" height="20" width="85"/>
            <button @click="w3_close()" class="btn w3-large" style="justify-content: flex-end">&times;</button>
            <router-link to="/" class="navbar-link w3-bar-item w3-button">Home</router-link>
            <router-link to="/shop" class="navbar-link w3-bar-item w3-button">Shop</router-link>
            <router-link to="/contact-us" class="navbar-link w3-bar-item w3-button">Contact Us</router-link>
          </div>
          <div>
            <button class="btn  sidebar-button" @click="w3_open()">☰</button>
          </div>
        </div>
      </div>
      <div class="col-md-2 legant-logo">
        <img src="../../../images/logo-legant.svg"/>
      </div>
      <div class="col-md-6 navbar-links">
        <router-link to="/" class="navbar-link link">Home</router-link>
        <router-link to="/shop" class="navbar-link link">Shop</router-link>
        <router-link to="/contact-us" class="navbar-link link">Contact Us</router-link>
      </div>
      <div class="col-md-4 icon-links">
        <router-link class="search-link"><i class="bi bi-search"></i></router-link>
        <router-link class="profile-link"><i class="bi bi-person-circle"></i></router-link>
        <router-link class="shopping-link" to="/add-to-card"><i class="bi bi-cart2"></i></router-link>
      </div>
    </div>
  </div>
</nav>
</template>
<script setup>
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
</script>


<style scoped>
.navbar-link{
  text-decoration: none;
  color: #6C7275;
  padding: 0 15px;
}
.search-link, .profile-link, .shopping-link{
  color: black;
  padding: 0 10px;
  font-weight: 800;
}
.navbar-links{
  display: flex;
  justify-content: flex-end;
}
.icon-links{
  display: flex;
  justify-content: end;
}
nav{
  position: sticky;
  top:0;
  background: #fff;

  z-index: 99;
  box-shadow: 0 3px 3px -3px #6C7275;
}
.col-md-1{
  display: none;
  background: transparent;
}
.link{
  text-decoration: none;
  position: relative;
}
.link::before{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #121212;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}
.link:hover::before{
  transform: scaleX(1);
}
.shopping-link{
  position: relative;
}
.shopping-link-count{
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  color: #ffffff;
  background-color: #121212;
  border-radius: 100%;
  align-items: center;
  text-align: center;
}
@media screen and (max-width: 991px) {
  .navbar-links, .search-link, .profile-link{
    display: none;
  }
  .col-md-1{
    display: inline-block;
  }
  .shopping-link{
    float: right;
    position: absolute;
    top: 0
  }
  .legant-logo{
    display: inline-block;
    position: absolute;
    margin-left: 50px;
  }

}
@media screen and (max-width: 767px) {
  .search-link, .profile-link{
    display: none;
  }
  .shopping-link{
    display: block;
  }
  .navbar-comp{
    display: flex;
  }
  .sidebar-button{

  }
}
@media screen and (max-width: 480px) {

}
@media screen and (max-width: 375px) {}
</style>