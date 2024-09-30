<template>
<div class="container mt-3">
  <div class="row text-more">
    <div class="col-md-8">
      <h1 class="newArrivals">New <br> Arrivals</h1>
    </div>
   <div class="col-md-4 more-product">
     <div>
       <p><router-link to="/shop" class="more-product-link">More Products <img src="../../images/arrow-right.jpg" alt=""></router-link></p>
     </div>
   </div>
  </div>
  <div class="row">
    <div id="carousel">
      <div class="item" v-for="item of items" :key="item.id">
        <div class="card img-fluid">
          <img class="card-img-top" :src="item?.image" alt="Card image" style="width:100%">
          <div class="card-img-overlay">
            <h4 class="condition">NEW</h4>
            <h5 class="discount">-50%</h5>
            <div class="card-button">
              <button class="btn btn-dark card-buttons" @click="addToCard(item)">Add to card</button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p style="margin: 0">
            <img src="../../images/Star Icon.jpg" height="16" width="16"/>
            <img src="../../images/Star Icon.jpg" height="16" width="16"/>
            <img src="../../images/Star Icon.jpg" height="16" width="16"/>
            <img src="../../images/Star Icon.jpg" height="16" width="16"/>
            <img src="../../images/Star Icon.jpg" height="16" width="16"/>
          </p>
          <router-link :to="{name:'product', params:{id:item.id}}" style="text-decoration: none">
            <p class="link_product">{{ item.name_uz }}</p>
          </router-link>
          <p><b>${{item.price}}</b></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import {errorToast, showToast} from "@/components/pages/ToastifySuccess.js";

const url = "http://127.0.0.1:8000/api"
const yourToken = '1|5lo6yKLJYTgxNs2SJs66LNRXSTuwQMIhYeBtcgJlafec3d35'
const addToCard = function (product){
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(localStorage.getItem('cart'));
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
    showToast()
  }).catch((error) => {
    console.log(error.response.data.message)
    errorToast()
  })
}
const items = ref([]);


const fetchData = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/product');
  items.value = response.data.data;
};
onMounted(fetchData);
</script>


<style scoped>
.newArrivals{
  font-weight: 600;
  font-size: 40px
}
.text-more{
  justify-content: space-around;
}
.more-product-link{
  color: #000;
  font-size: 16px;
}
.more-product{
  align-content: flex-end;
}
#carousel {
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none; /* Hide the scrollbar for MS Edge */
  scrollbar-width: none; /* Hide the scrollbar for Mozilla Firefox */

  margin: 0 auto 0 auto;
  width: 100%;
  height: fit-content;

  border: none;
}

#carousel::-webkit-scrollbar {
  display: none; /* Hide the scrollbar on Webkit based browsers (Chrome, Safari, etc) */
  -webkit-overflow-scrolling: touch; /* On touch screens the content continues to scroll for a while after finishing the scroll gesture */
}
.card{
  background-color: #F3F5F7;
  border: none;
}
.item {
  min-width: 262px;
  min-height: 349px;
  margin: 15px;
  border-radius: 7px;
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
.link_product{
  margin: 0;
  font-weight: 700;
  font-size: 18px
}
.link_product:hover{
  color: #377DFF !important;
  font-size: 19px;
}
@media screen and (max-width: 991px){
  .more-product-link{
    color: #000;
    font-size: 16px;
  }
}
@media screen and (max-width: 767px){ }
@media screen and (max-width: 480px){}
@media screen and (max-width: 375px){ }
</style>