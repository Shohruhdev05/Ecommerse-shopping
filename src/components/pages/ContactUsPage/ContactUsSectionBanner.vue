<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-6">
              <img src="../../../../images/image-banner.jpg" height="532" width="720" class="img-fluid rounded-start"/></div>
            <div class="col-md-5">
              <div class="card-body">
                <h1 class="card-title" style="font-size: 40px; font-weight: 600">About Us</h1>
                <p class="card-text">3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
                  Our customer service is always prepared to support you 24/7</p>
                <p class="card-text"><router-link to="" class="shop-now-link"><b>Shop Now</b> <img src="../../../../images/arrow-right.jpg" alt=""></router-link></p>
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