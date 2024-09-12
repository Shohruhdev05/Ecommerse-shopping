<template>
<div class="container mt-5">
  <div class="row">
    <div class="col-md-3">
      <div><label style="font-weight: 700">CATEGORIES</label></div>
      <div class="input-group mb-3" >
        <select class="custom-select" id="categorySelect" v-model="selectCategory">
          <option class="option_select" value="0">All Rooms</option>
          <option class="option_select" value="1">Living Rooms</option>
          <option class="option_select" value="2">Bedroom</option>
          <option class="option_select" value="3">Kitchen</option>
          <option class="option_select" value="4">Bathroom</option>
          <option class="option_select" value="5">Dinning</option>
          <option class="option_select" value="6">Outdoor</option>
        </select>
      </div>
    </div>
    <div class="col-md-3">
      <div><label style="font-weight: 700">PRICE</label></div>
      <div class="input-group mb-3" >
        <select class="custom-select" id="priceSelect" v-model="selectedPrice">
          <option class="option_select" value="0">All Price</option>
          <option class="option_select" value="1">$0.00 - 99.99</option>
          <option class="option_select" value="2">$100.00 - 199.99</option>
          <option class="option_select" value="3">$200.00 - 299.99</option>
          <option class="option_select" value="4">$300.00 - 399.99</option>
          <option class="option_select" value="5">$400.00+</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="product in sortedProducts" :key="product.id">
    <div class="card img-fluid">
        <img class="card-img-top" :src="'../../../../images/' + product.image" alt="Card image"   >
        <div class="card-img-overlay">
          <h4 class="condition">NEW</h4>
          <h5 class="discount">-50%</h5>
          <div class="card-button">
            <button class="btn btn-dark card-buttons" @click="addToCard(product)">Add to card</button>
          </div>
        </div>
      </div>
      <div class="card-body">
        <p style="margin: 0">
          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
        </p>
        <p style="margin: 0; font-weight: 700; font-size: 18px">{{ product.name }}</p>
        <p><b>${{product.price.toFixed(2)}}</b><del style="padding: 0 10px; color: #6C7275">{{product.originalPrice ? "$"+product.originalPrice.toFixed(2):''}}</del></p>
      </div>
    </div>
  </div>
  <div class="row justify-content-center mt-4 mb-5">
    <div class="col-md-3 justify-content-center">
      <button class="btn btn-show">Show more</button>
    </div>
  </div>
</div>
</template>
<script setup>
import { ref, computed } from 'vue';
import axios from "axios";

const selectedPrice = ref(0);

const products = ref([
  { id: 8, name: 'Loveseat Sofa', price: 199.00, originalPrice: 400.00, image: 'scroll-carousel-img-1.jpg' },
  { id: 13, name: 'Table Lamp', price: 24.99, image: 'scroll-carusel-img-2.jpg' },
  { id: 14, name: 'Beige Table Lamp', price: 24.99, image: 'scroll-carousel-img-3.jpg' },
  { id: 7, name: 'Bamboo basket', price: 24.99, image: 'scroll-carousel-img-4.jpg' },
  { id: 11, name: 'White Drawer unit', price: 89.99, image: 'scroll-carousel-img-5.jpg' },
  { id: 12, name: 'Black Tray table', price: 19.99, image: 'scroll-carousel-img-6.jpg' },
  { id: 15, name: 'Lamp', price: 39.00, image: 'scroll-carousel-img-7.jpg' },
  { id: 4, name: 'Light Beige Pillow', price: 3.99, image: 'scroll-carousel-img-8.jpg' },
  { id: 9, name: 'Luxury Sofa', price: 299.00, originalPrice: 500.00, image: 'scroll-carousel-img-9.jpg' },
  { id: 10, name: 'Cozy Sofa', price: 299.00, image: 'scroll-carousel-img-10.jpg' },
  { id: 6, name: 'Black Brow Side table', price: 19.00, image: 'scroll-carousel-img-11.jpg' },
  { id: 5, name: 'Off-white Pillow', price: 7.99, image: 'scroll-carousel-img-12.jpg' },
]);
const sortedProducts = computed(() => {
  let filtered = products.value;


  if (selectedPrice.value) {
    const priceRanges = [
      { min: 0, max: Infinity },
      { min: 0, max: 99.99 },
      { min: 100, max: 199.99 },
      { min: 200, max: 299.99 },
      { min: 300, max: 399.99 },
      { min: 400, max: Infinity },
    ];

    const range = priceRanges[selectedPrice.value];
    filtered = filtered.filter(product => product.price >= range.min && product.price <= range.max);
  }

  return filtered.sort((a, b) => a.price - b.price);
});

const selectCategory = ref(0)

const url = "http://127.0.0.1:8000/api"
const yourToken = '1|5lo6yKLJYTgxNs2SJs66LNRXSTuwQMIhYeBtcgJlafec3d35'
const addToCard = function (product){
  axios({
    method: 'POST',
    url: url + '/carts',
    data:{
      "product_id": product.id,
    },
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${yourToken}`
    }
  }).then((response) => {
    console.log(response.data.message);
    alert('Muvaffaqqiyatli yuborildi')
  }).catch((error) => {
    alert(error.response.data.message)
  })
}


</script>



<style scoped>
.custom-select{
  width: 100%;
  height: 48px;
  border-radius: 10px;
  border: 2px solid #121212;
  font-size: 16px;
  font-weight: 700;
}
.option_select{
  background-color: #6C7275;
  color: #F3F5F7;
}
.card{
  background-color: #F3F5F7;
  border: none;
}
.discount{
  background-color: #38CB89;
  color: #fff;
  width: 71px;
  height: 24px;
  border-radius: 8px;
  text-align: center;
  align-items: center;
}
.condition{
  background-color: #fff;
  color: #000;
  width: 71px;
  height: 24px;
  border-radius: 8px;
  text-align: center;
  align-items: center;
}
.card-button{
  display: flex;
  align-content: flex-end;
  align-items: flex-end;
  justify-content: center;
}
.card-buttons{
  width: 230px;
  display: none;
}
.card:hover .card-buttons{
  display: block;
}
.btn-show{
  border: 2px solid #121212;
  border-radius: 20px;
  width: 80%;
  font-weight: 600;
  font-size: 18px;
}

</style>