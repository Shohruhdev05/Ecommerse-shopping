<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        <div class="card">
          <div class="card-img">
            <img src="../../images/value-1.jpg" class="card-img-top card-value mt-3">
          </div>
          <div class="card-body">
            <h4 class="card-text">Free Shipping</h4>
            <p class="card-text" style="color: #6C7275">Order above $200</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-img">
            <img src="../../images/value-2.jpg" class="card-img-top card-value mt-3">
          </div>
          <div class="card-body">
            <h4 class="card-text">Money-back</h4>
            <p class="card-text" style="color: #6C7275">30 days guarantee</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-img">
            <img src="../../images/value-3.jpg" class="card-img-top card-value mt-3">
          </div>
          <div class="card-body">
            <h4 class="card-text">Secure Payments</h4>
            <p class="card-text" style="color: #6C7275">Secured by Stripe</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-img">
            <img src="../../images/value-4.jpg" class="card-img-top card-value mt-3">
          </div>
          <div class="card-body">
            <h4 class="card-text">24/7 Support</h4>
            <p class="card-text" style="color: #6C7275">Phone and Email support</p>
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
  height: 220px;
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
