<template>
  <NavbarComponent/>
  <section>
    <div class="container">
      <div class="row text-center">
        <div class="col-md-12">
          <h1 class="myAccount">My Account</h1>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <div class="card-img account-img text-center mt-5">
              <img src="../../../images/account.jpg" class="card-img-top" alt="..."style="width: 82px">
            </div>
            <div class="card-body text-center">
              <h5 class="card-title" style="font-weight: 700">{{responseMessage}}</h5>
            </div>
            <div class="card-body">
              <router-link class="account-link" to="">Account</router-link>
              <router-link class="account-link" to="">Address</router-link>
              <router-link class="account-link" to="">Orders</router-link>
              <router-link class="account-link" to="">Wishlist</router-link>
              <router-link class="account-link" to="">Log Out</router-link>
              <router-link class="account-link" to="">Address</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <form action="">
            <div class="form-group">
              <h4 class="account_details mt-2">Orders History</h4>
              <table class="table border">
                <thead>
                <tr>
                  <th>Number ID</th>
                  <th>Orders</th>
                  <th>Status</th>
                  <th>Price</th>
                </tr>
                </thead>
                <tbody v-for="order in card" :key="order.id">
                <tr>
                  <td>{{order.id}}</td>
                  <td>{{order.name_uz}}</td>
                  <td>Delivered</td>
                  <td>${{order.price}}</td>
                </tr>
                </tbody>
              </table>
              <h4 class="account_details mt-5">Account Details</h4>
              <label for="first_name" class=" label_name">FIRST NAME</label>
              <input type="text" class="form-control mt-1" placeholder="First name" id="first_name">
              <label for="last_name" class="mt-3 label_name">LAST NAME</label>
              <input type="text" class="form-control mt-1" placeholder="Last name" id="last_name">
              <label for="phone_number" class="mt-3 label_name">PHONE</label>
              <input type="text" class="form-control mt-1" placeholder="Phone" id="phone_number">

              <h4 class="account_details mt-5">Password</h4>
              <label for="old_password" class="label_name">OLD PASSWORD</label>
              <input type="text" class="form-control mt-1" placeholder="Old password" id="old_password">
              <label for="new_password" class="label_name mt-3">NEW PASSWORD</label>
              <input type="text" class="form-control mt-1" placeholder="New password" id="new_password">
              <label for="repeat_new_password" class="label_name mt-3">REPEAT NEW PASSWORD</label>
              <input type="text" class="form-control mt-1" placeholder="Repeat new password" id="repeat_new_password">


              <button type="button" class="btn btn-dark mt-3 mb-5">Save changes</button>


            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent/>
</template>
<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";


import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
const responseMessage = ref('');

const sendUserName = async () => {
  try {
    const token = '1|5lo6yKLJYTgxNs2SJs66LNRXSTuwQMIhYeBtcgJlafec3d35';
    if (!token) {
      console.error('Token topilmadi!');
      return;
    }

    const response = await axios.get(
        'http://127.0.0.1:8000/api/users/user',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
    );
    const user = response.data.data;
    console.log('Auth qilingan foydalanuvchi ma\'lumotlari:', user);

    responseMessage.value = ` ${user.first_name}  ${user.last_name}`;
  } catch (error) {
    console.error('Xatolik yuz berdi:', error);
    responseMessage.value = 'Foydalanuvchi ma\'lumotlarini olishda xatolik yuz berdi';
  }
};

onMounted(sendUserName);
const card = ref([]);

const fetchOrders = () => {
  const savedOrders = JSON.parse(localStorage.getItem('card')) || [];
  card.value = savedOrders;
  console.log(savedOrders)
};

onMounted(() => {
  sendUserName();
  fetchOrders();
});




</script>


<style scoped>
.card{
  background-color: #F3F5F7;
}
.card-img-top{
  border-radius: 50%;
}
.account-link{
  display: block;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color:#6C7275;
  padding: 7px 0;
}
.myAccount{
  font-weight: 600;
  font-size: 45px;
  color:#121212;
}
.label_name{
  font-weight: 700;
  font-size: 11px;
  color: #6C7275;
}
.account_details{
  font-weight: 700;
  color: #121212;
}
</style>