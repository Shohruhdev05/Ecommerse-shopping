<template>
<div class="container mt-3">
  <div class="row">
    <div class="col-md-4">
      <h1>Articles</h1>
    </div>
    <div class="col-md-4 offset-4 article-link">
      <p><router-link to="" class="shop-now-link">More Articles <img src="../../images/arrow-right.jpg" alt=""></router-link></p>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-md-4">
      <div class="card">
        <img src="../../images/img-article-1.jpg" height="325" width="357" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-text"><b>7 ways to decor your home</b></h5>
          <p><router-link to="" class="shop-now-link">Read More <img src="../../images/arrow-right.jpg" alt=""></router-link></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <img src="../../images/img-article-2.jpg" height="325" width="357" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-text"><b>Kitchen organization</b></h5>
          <p><router-link to="" class="shop-now-link">Read More <img src="../../images/arrow-right.jpg" alt=""></router-link></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <img src="../../images/img-article-3.jpg" height="325" width="357" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-text"><b>Decor your bedroom</b></h5>
          <p><router-link to="" class="shop-now-link">Read More <img src="../../images/arrow-right.jpg" alt=""></router-link></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>

</script>


<style scoped>
.article-link{
  display: flex;
  align-content: flex-end;
  justify-content: end;
}
.shop-now-link{
  color: #000;
  font-size: 18px;
}
.card{
  border: none;
}
@media screen and (max-width: 767px){
  .article-link{
    display: none;
  }
}
</style>