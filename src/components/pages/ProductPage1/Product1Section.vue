<template>
<!--  <div class="container mt-5 mb-5">-->
<!--    <div class="row">-->
<!--      <div class="col-md-6">-->
<!--        <swiper-container style="&#45;&#45;swiper-navigation-color: #fff; &#45;&#45;swiper-pagination-color: #fff" class="mySwiper"-->
<!--                          thumbs-swiper=".mySwiper2" loop="true" space-between="10" navigation="true">-->
<!--          <swiper-slide>-->
<!--            <img src="../../../../images/chair-1.svg" />-->
<!--          </swiper-slide>-->
<!--          <swiper-slide>-->
<!--            <img src="../../../../images/chair-2.svg" />-->
<!--          </swiper-slide>-->
<!--          <swiper-slide>-->
<!--            <img src="../../../../images/cair-3.svg" />-->
<!--          </swiper-slide>-->
<!--          <swiper-slide>-->
<!--            <img src="../../../../images/chair-4.svg" />-->
<!--          </swiper-slide>-->
<!--        </swiper-container>-->

<!--        <swiper-container class="mySwiper2" loop="true" space-between="10" slides-per-view="4" free-mode="true"-->
<!--                          watch-slides-progress="true">-->
<!--          <swiper-slide>-->
<!--            <img src="../../../../images/chair-1.svg" />-->
<!--          </swiper-slide>-->
<!--          <swiper-slide>-->
<!--            <img src="../../../../images/chair-2.svg" />-->
<!--          </swiper-slide>-->
<!--          <swiper-slide>-->
<!--            <img src="../../../../images/cair-3.svg" />-->
<!--          </swiper-slide>-->
<!--          <swiper-slide>-->
<!--            <img src="../../../../images/chair-4.svg" />-->
<!--          </swiper-slide>-->
<!--        </swiper-container>-->
<!--      </div>-->
<!--      <div class="col-md-6">-->
<!--        <p style="margin: 0">-->
<!--          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>-->
<!--          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>-->
<!--          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>-->
<!--          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>-->
<!--          <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>-->
<!--        </p>-->
<!--        <h1 class="tray-h1">Tray Table</h1>-->
<!--        <p>Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with-->
<!--          removable tray top, handy for serving snacks.</p>-->
<!--        <span style="display: flex"><h1>$199.00</h1><del style="color: #6C7275; padding-left: 10px "><h2>$400.00</h2></del></span>-->
<!--        <div class="time">-->
<!--          <p>Offer expires  in:</p>-->
<!--          <div class="row">-->
<!--            <div class="col-md-2">-->
<!--              <h1 class="day">02</h1><p class="days">Days</p>-->
<!--            </div>-->
<!--            <div class="col-md-2">-->
<!--              <h1 class="hour">12</h1><p class="hours">Hours</p>-->
<!--            </div>-->
<!--            <div class="col-md-2">-->
<!--              <h1 class="minute">45</h1><p class="minutes">Minutes</p>-->
<!--            </div>-->
<!--            <div class="col-md-2">-->
<!--              <h1 class="second">05</h1><p class="seconds">Seconds</p>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="sizes">-->
<!--          <h6 style="color: #6C7275">Measurements</h6>-->
<!--          <h5>17 1/2x20 5/8 "</h5>-->
<!--        </div>-->
<!--        <div class="choose-color mt-2">-->
<!--          <h6 style="color: #6C7275; font-weight: bold">Choose Color  <img src="../../../../images/Vector_strelka.svg" alt=""></h6>-->
<!--          <h4>Black</h4>-->
<!--          <div class="carousel_chair">-->

<!--          </div>-->
<!--        </div>-->
<!--        <div class="row">-->
<!--         <div class="col-md-1 btn_minus">-->
<!--           <button class="btn" @click="minus">-</button>-->
<!--         </div>-->
<!--          <div class="col-md-1 number">-->
<!--            <p class="text-center numbers" style="margin-top:5px">{{number}}</p>-->
<!--          </div>-->
<!--          <div class="col-md-1 btn_plus">-->
<!--            <button class="btn" @click="plus">+</button>-->
<!--          </div>-->
<!--          <div class="col-md-9">-->
<!--            <button type="submit" class="btn wishlist" @click="wishlist()" :style="{ color: isWishlistAdded? 'red':''}" style="border-radius: 15px"><img src="../../../../images/Heart.svg" alt=""> Wishlist</button>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="row mt-3">-->
<!--          <div class="col-md-12">-->
<!--            <button type="submit" @click="addToCard" class="btn btn-dark text-center w-100" style="height: 52px; border-radius: 15px; font-size: 18px">Add to Cart</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  {{product?.name_uz}}
</template>
<script setup>
import {ref} from "vue";
import axios from "axios";

let number = ref(1)

const url = "http://127.0.0.1:8000/api"
const yourToken = '1|5lo6yKLJYTgxNs2SJs66LNRXSTuwQMIhYeBtcgJlafec3d35'
const plus = () => {
  if(number.value < 10){
    number.value += 1
  }
  else {
    alert('Uncha Yo\'q😂')
  }
}
const minus = () => {
  if (number.value >= 1){
    number.value -= 1
  }
  else {
    alert('Bo\'ldida endi😜')
  }
}

const addToCard = function (){
  axios({
    method: 'POST',
    url: url + '/carts',
    data:{
      "product_id": 1
    },
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${yourToken}`
    }
  }).then((response) => {
    alert('Muvaffaqqiyatli yuborildi')
  }).catch((error) => {
    alert(error.response.data.message)
  })
}


const isWishlistAdded = ref(false)
const wishlist = function (){
  try {
    axios({
      method: 'POST',
      url: url + '/favourites',
      data:{
        "product_id": 1
      },
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${yourToken}`
      }
    }).then((res) => {
      console.log(res)
      isWishlistAdded.value = true
      alert('Sevimlilarga qo\'shildi❤')
    }).catch((error) => {
      console.log(error)
    })
  } catch (err){
    alert('apidan malumot kelmayaptiki')
  }
}


const product = ref(null);

// GET request using fetch with set headers
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${yourToken}`
};
await fetch('http://127.0.0.1:8000/api/product', { headers })
    .then(response => {
      console.log(response)
    });






</script>


<style scoped>
.tray-h1 {
  font-weight: 600;
  font-size: 40px
}
.day, .hour, .minute, .second {
  background-color: #F3F5F7;
  font-weight: 500;
  text-align: center;
}
.days, .hours, .minutes, .seconds {
  text-align: center;
}
.btn_plus, .btn_minus, .number{
  background-color: #F3F5F7;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.numbers{
  font-weight: bold;
}
.wishlist{
  width: 100%;
  text-align: center;
  border: 1px solid #6C7275;
  font-size: 20px;
}




html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

swiper-slide {
  background-size: cover;
  background-position: center;
  height: 500px;
  width: 100%;
}

.mySwiper {
  height: 80%;
  width: 100%;
}

.mySwiper2 {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper2 swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper2 .swiper-slide-thumb-active {
  opacity: 1;
}

swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>