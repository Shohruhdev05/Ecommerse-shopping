<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1 style="font-weight: 600">Contact Us</h1>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-4">
        <div class="card">
          <div class="card-img">
            <img src="../../../../images/value-5.jpg" class="card-img-top card-value mt-3">
          </div>
          <div class="card-body">
            <h6 class="card-text" style="font-weight: 700; color: #6C7275">ADDRESS</h6>
            <h6 class="card-text" style="color: #121212; font-weight: 600">234 Hai Trieu, Ho Chi Minh City,<br>
              Viet Nam</h6>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-img">
            <img src="../../../../images/value-4.jpg" class="card-img-top card-value mt-3">
          </div>
          <div class="card-body">
            <h6 class="card-text" style="font-weight: 700; color: #6C7275">CONTACT US</h6>
            <h6 class="card-text" style="color: #121212; font-weight: 600">+84 234 567 890</h6>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-img">
            <img src="../../../../images/value-6.jpg" class="card-img-top card-value mt-3">
          </div>
          <div class="card-body">
            <h6 class="card-text" style="font-weight: 700; color: #6C7275">EMAIL</h6>
            <h6 class="card-text" style="color: #121212; font-weight: 600">hello@3legant.com</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>


<style scoped>
.card-value {
  width: 48px;
  height: 48px;
}

.card {
  height: 180px;
  border: none;
  background-color: #F3F5F7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.card-body {
  text-align: center;
}

.card-img {
  text-align: center;
}

@media screen and (max-width: 767px) {
  .card-value {
    width: 36px;
    height: 36px;
  }
  .card {
    height: auto;
    padding: 10px;
  }
}
@media screen and (max-width: 480px) {
  .card-value {
    width: 32px;
    height: 32px;
  }
  .card {
    padding: 10px;
    text-align: center;
  }
}
</style>