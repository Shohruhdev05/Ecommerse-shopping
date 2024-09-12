<template>
<div class="container mt-5">
  <div class="row">
    <div class="col-md-12">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-6">
            <img src="../../images/image-banner.jpg" height="532" width="720" class="img-fluid rounded-start"/></div>
          <div class="col-md-5">
            <div class="card-body">
              <h6 class="card-title text-primary"><b>SALE UP TO 35% OFF</b></h6>
              <h1 class="card-title">HUNDREDS of <br> New lower prices</h1>
              <p class="card-text card-text-1">It’s more affordable than ever to give every <br> room in your home a stylish makeover</p>
              <p class="card-text"><router-link to="" class="shop-now-link">Shop Now <img src="../../images/arrow-right.jpg" alt=""></router-link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>

</script>


<style scoped>
.card{
  border: none;
  background-color: #F3F5F7;
}
.card-text-1{
}
.card-body{
  justify-content:center;
  justify-items: center;
  align-items: flex-end;
  margin-left: 20px;
  margin-top: 50px;
}
.shop-now-link{
  color: #000;
  font-size: 16px;
}
@media screen and (max-width: 991px){
  .card-body{
    margin-top: 0;
  }
}
</style>