<template>
  <NavbarComponent/>
  <section class="h-100 h-custom" style="background-color: #eee;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card">
            <div class="card-body p-4">

              <div class="row">

                <div class="col-lg-7">
                  <h5 class="mb-3"><a href="#!" class="text-body"><i
                      class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                  <hr>

                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p class="mb-1">Shopping cart</p>
                      <p class="mb-0">You have 4 items in your cart</p>
                    </div>
                    <div>
                      <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i class="fas fa-angle-down mt-1"></i></a></p>
                    </div>
                  </div>

                  <div class="card mb-3">
                    <div class="card-body" v-for="product in cart" :key="product.id">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                          <div>
                            <img
                                :src="product?.image"
                                class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                          </div>
                          <div class="ms-3">
                            <h5>{{product.name_uz}}</h5>
                            <p class="small mb-0">Color: Black</p>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                          <div style="width: 50px;">
                            <h5 class="fw-normal mb-0">1</h5>
                          </div>
                          <div style="width: 80px;">
                            <h5 class="mb-0">${{product.price}}</h5>
                          </div>
                          <div>
                            <button class="btn btn-trash" @click="trash(product.id)"><i class="bi bi-trash3"></i></button>
                          </div>
                          <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="btn btn-danger mb-2" @click="clearAll">Clear All</button>




                </div>
                <div class="col-lg-5">

                  <div class="card bg-secondary text-white rounded-3">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="mb-0">Card details</h5>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                             class="img-fluid rounded-3" style="width: 45px;" alt="Avatar">
                      </div>

                      <p class="small mb-2">Card type</p>
                      <a href="#" type="submit" class="text-white"><i
                          class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                      <a href="#" type="submit" class="text-white"><i
                          class="fab fa-cc-visa fa-2x me-2"></i></a>
                      <a href="#!" type="submit" class="text-white"><i
                          class="fab fa-cc-amex fa-2x me-2"></i></a>
                      <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>

                      <form>
                        <div class="row">
                          <div class="col-md-6">
                            <div data-mdb-input-init class="form-outline form-white mb-4">
                              <input type="text" id="region" class="form-control form-control-lg" size="17"
                                     placeholder="Tashkent" v-model="region" />
                              <label class="form-label" for="region">Region</label>
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div data-mdb-input-init class="form-outline form-white mb-4">
                              <input type="text" id="typeText" class="form-control form-control-lg" size="17"
                                     placeholder="Chilonzor" minlength="19" maxlength="19" v-model="district" />
                              <label class="form-label" for="typeText">District</label>
                            </div>
                          </div>
                        </div>

                        <div class="row mb-4">
                          <div class="col-md-6">cd
                            <div data-mdb-input-init class="form-outline form-white">
                              <input type="text" id="typeExp" class="form-control form-control-lg"
                                     placeholder="Katartal"  v-model="street" />
                              <label class="form-label" for="typeExp">Street</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div data-mdb-input-init class="form-outline form-white">
                              <input type="text" id="typeText" class="form-control form-control-lg"
                                     placeholder="28-home" size="1"  v-model="home" />
                              <label class="form-label" for="typeText">Home</label>
                            </div>
                          </div>
                        </div>

                      </form>

                      <hr class="my-4">

                      <div class="d-flex justify-content-between">
                        <p class="mb-2">Subtotal</p>
                        <p class="mb-2">$4798.00</p>
                      </div>

                      <div class="d-flex justify-content-between">
                        <p class="mb-2">Shipping</p>
                        <p class="mb-2">$20.00</p>
                      </div>

                      <div class="d-flex justify-content-between mb-4">
                        <p class="mb-2">Total(Incl. taxes)</p>
                        <p class="mb-2">$4818.00</p>
                      </div>

                      <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-block btn-lg" @click="checkout">
                        <div class="d-flex justify-content-between">
                          <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                        </div>
                      </button>

                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NavbarComponent from "@/components/NavbarComponent.vue";
import {ref, onMounted} from "vue";
import axios from "axios";
import {showToast, errorToast} from "@/components/pages/ToastifySuccess.js";
const region = ref('')
const district = ref('')
const street = ref('')
const home = ref('')
const yourToken = '1|5lo6yKLJYTgxNs2SJs66LNRXSTuwQMIhYeBtcgJlafec3d35'

const clearAll = function (){
  localStorage.clear();
}
const trash = function(productId) {
  cart.value = cart.value.filter(product => product.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart.value));
};

const checkout = function (){
 let card = JSON.parse(localStorage.getItem('card')) || [];
  card.push(cart.value);
  localStorage.setItem('card', JSON.stringify(card));
  axios({
    method: 'POST',
    url: 'http://127.0.0.1:8000/api/orders',
    data: {
      longitude: '8359486346',
      latitude: '892357045',
      region: region.value,
      district: district.value,
      street: street.value,
      home: home.value,
      products: cart.value.map(product => ({
        id: product.id,
        quantity: 1
      })),
      payment_method: 'credit_card',
      shipping_method: 'standard'
    },
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${yourToken}`
    }
  }).then((response) => {
    console.log(response.data.message)
    showToast()
  }).catch((error)=>{
    console.log(error.response.data.message)
    errorToast()
  })
}


  const cart = ref([]);

  onMounted(() => {
    cart.value = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart.value)
  });

</script>

<style scoped>
.btn-trash:hover{
  background-color: #dc3545;
  color: white;
}
@media (min-width: 1025px) {
  .h-custom {
    height: 100vh !important;
  }
}
</style>