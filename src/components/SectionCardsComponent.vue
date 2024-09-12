<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6 image-card-1">
        <div class="card text-dark">
          <img src="../../images/Card-Image(1).jpg"/>
          <div class="card-img-overlay ">
            <h1>Living Room</h1>
            <p><router-link to="/product" class="shop-now-link">Shop Now <img src="../../images/arrow-right.jpg" alt=""></router-link></p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card text-dark image-card-2">
          <img src="../../images/Card-Image(2).jpg"/>
          <div class="card-img-overlay card-text">
            <h1>Bedroom</h1>
            <p><router-link to="/product" class="shop-now-link">Shop Now <img src="../../images/arrow-right.jpg" alt=""></router-link></p>
          </div>
        </div>
        <div class="card text-dark mt-4 image-card-2">
          <img src="../../images/Card-Image(3).jpg"/>
          <div class="card-img-overlay card-text">
            <h1>Kitchen</h1>
            <p><router-link to="/product" class="shop-now-link">Shop Now <img src="../../images/arrow-right.jpg" alt=""></router-link></p>
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
}
.shop-now-link{
  color: #000;
  font-size: 20px;
}
.card-text{
  align-content: flex-end;
}
@media screen and (max-width: 991px){
  .image-card-1{
    display: block;
    width: 100%;
  }


}
</style>