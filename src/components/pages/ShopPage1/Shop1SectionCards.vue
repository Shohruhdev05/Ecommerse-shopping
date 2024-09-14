<template>
<div class="container mt-5">
  <div class="row">
    <div class="col-md-3">
      <div><label style="font-weight: 700">CATEGORIES</label></div>
      <div class="input-group mb-3" >
        <select class="custom-select" id="categorySelect">
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
        <select class="custom-select" id="priceSelect">
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

    <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="item in items" :key="item.id">
      <div class="card img-fluid">
          <router-link to="/product"><img class="card-img-top" :src="item?.image"  alt="Card image"></router-link>
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
            <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
            <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
            <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
            <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
            <img src="../../../../images/Star Icon.jpg" height="16" width="16"/>
          </p>
          <router-link :to="{name:'product', params:{id:item.id}}" style="text-decoration: none">
            <p style="margin: 0; font-weight: 700; font-size: 18px">{{ item.name_uz }}</p>
          </router-link>
          <p><b>${{ item.price }}</b></p>
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
import { ref, onMounted } from 'vue';
import axios from "axios";


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
    alert('Muvaffaqqiyatli yuborildi')
  }).catch((error) => {
    alert(error.response.data.message)
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