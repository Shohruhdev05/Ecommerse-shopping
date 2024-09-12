<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-3">
        <div><label style="font-weight: 700">CATEGORIES</label></div>
        <div class="input-group mb-3" >
          <select class="custom-select" id="inputGroupSelect01">
            <option class="option_select" value="0">All Rooms</option>
            <option class="option_select" selected>Living Rooms</option>
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
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card img-fluid">
          <img class="card-img-top" src="../../../../images/scroll-carousel-img-1.jpg" alt="Card image"   >
          <div class="card-img-overlay">
            <h4 class="condition">NEW</h4>
            <h5 class="discount">-50%</h5>
            <div class="card-button">
              <button class="btn btn-dark card-buttons">Add to card</button>
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
          <p style="margin: 0; font-weight: 700; font-size: 18px">Loveseat Sofa</p>
          <p><b>$199.00</b><del style="padding: 0 10px; color: #6C7275">$400.00</del></p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card img-fluid">
          <img class="card-img-top" src="../../../../images/scroll-carusel-img-2.jpg" alt="Card image"   >
          <div class="card-img-overlay">
            <h4 class="condition">NEW</h4>
            <h5 class="discount">-50%</h5>
            <div class="card-button">
              <button class="btn btn-dark card-buttons">Add to card</button>
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
          <p style="margin: 0; font-weight: 700; font-size: 18px">Table Lamp</p>
          <p><b>$24.99</b></p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card img-fluid">
          <img class="card-img-top" src="../../../../images/scroll-carousel-img-3.jpg" alt="Card image"   >
          <div class="card-img-overlay">
            <h4 class="condition">NEW</h4>
            <h5 class="discount">-50%</h5>
            <div class="card-button">
              <button class="btn btn-dark card-buttons">Add to card</button>
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
          <p style="margin: 0; font-weight: 700; font-size: 18px">Beige Table Lamp</p>
          <p><b>$24.99</b></p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card img-fluid">
          <img class="card-img-top" src="../../../../images/scroll-carousel-img-4.jpg" alt="Card image"   >
          <div class="card-img-overlay">
            <h4 class="condition">NEW</h4>
            <h5 class="discount">-50%</h5>
            <div class="card-button">
              <button class="btn btn-dark card-buttons">Add to card</button>
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
          <p style="margin: 0; font-weight: 700; font-size: 18px">Bamboo basket</p>
          <p><b>$24.99</b><</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card img-fluid">
          <img class="card-img-top" src="../../../../images/scroll-carousel-img-5.jpg" alt="Card image"   >
          <div class="card-img-overlay">
            <h4 class="condition">NEW</h4>
            <h5 class="discount">-50%</h5>
            <div class="card-button">
              <button class="btn btn-dark card-buttons">Add to card</button>
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
          <p style="margin: 0; font-weight: 700; font-size: 18px">White Drawer unit</p>
          <p><b>$89.99</b></p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card img-fluid">
          <img class="card-img-top" src="../../../../images/scroll-carousel-img-6.jpg" alt="Card image"   >
          <div class="card-img-overlay">
            <h4 class="condition">NEW</h4>
            <h5 class="discount">-50%</h5>
            <div class="card-button">
              <button class="btn btn-dark card-buttons">Add to card</button>
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
          <p style="margin: 0; font-weight: 700; font-size: 18px">Black Tray table</p>
          <p><b>$19.99</b></p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card img-fluid">
          <img class="card-img-top" src="../../../../images/scroll-carousel-img-7.jpg" alt="Card image"   >
          <div class="card-img-overlay">
            <h4 class="condition">NEW</h4>
            <h5 class="discount">-50%</h5>
            <div class="card-button">
              <button class="btn btn-dark card-buttons">Add to card</button>
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
          <p style="margin: 0; font-weight: 700; font-size: 18px">Lamp</p>
          <p><b>$39.00</b></p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card img-fluid">
          <img class="card-img-top" src="../../../../images/scroll-carousel-img-8.jpg" alt="Card image"   >
          <div class="card-img-overlay">
            <h4 class="condition">NEW</h4>
            <h5 class="discount">-50%</h5>
            <div class="card-button">
              <button class="btn btn-dark card-buttons">Add to card</button>
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
          <p style="margin: 0; font-weight: 700; font-size: 18px">Light Beige Pillow</p>
          <p><b>$3.99</b></p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card img-fluid">
          <img class="card-img-top" src="../../../../images/scroll-carousel-img-9.jpg" alt="Card image"   >
          <div class="card-img-overlay">
            <h4 class="condition">NEW</h4>
            <h5 class="discount">-50%</h5>
            <div class="card-button">
              <button class="btn btn-dark card-buttons">Add to card</button>
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
          <p style="margin: 0; font-weight: 700; font-size: 18px">Luxury Sofa</p>
          <p><b>$299.00</b><del style="padding: 0 10px; color: #6C7275">$500.00</del></p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card img-fluid">
          <img class="card-img-top" src="../../../../images/scroll-carousel-img-10.jpg" alt="Card image"   >
          <div class="card-img-overlay">
            <h4 class="condition">NEW</h4>
            <h5 class="discount">-50%</h5>
            <div class="card-button">
              <button class="btn btn-dark card-buttons">Add to card</button>
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
          <p style="margin: 0; font-weight: 700; font-size: 18px">LCozy Sofa</p>
          <p><b>$299.00</b></p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card img-fluid">
          <img class="card-img-top" src="../../../../images/scroll-carousel-img-11.jpg" alt="Card image"   >
          <div class="card-img-overlay">
            <h4 class="condition">NEW</h4>
            <h5 class="discount">-50%</h5>
            <div class="card-button">
              <button class="btn btn-dark card-buttons">Add to card</button>
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
          <p style="margin: 0; font-weight: 700; font-size: 18px">Black Brow Side table</p>
          <p><b>$19.00</b></p>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-6 col-12">
        <div class="card img-fluid">
          <img class="card-img-top" src="../../../../images/scroll-carousel-img-12.jpg" alt="Card image"   >
          <div class="card-img-overlay">
            <h4 class="condition">NEW</h4>
            <h5 class="discount">-50%</h5>
            <div class="card-button">
              <button class="btn btn-dark card-buttons">Add to card</button>
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
          <p style="margin: 0; font-weight: 700; font-size: 18px">Off-white Pillow</p>
          <p><b>$7.99</b></p>
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
import { ref } from 'vue';

const selectedPrice = ref(0);

const products = ref([
  { id: 1, name: 'Loveseat Sofa', price: 199.00, originalPrice: 400.00, image: 'scroll-carousel-img-1.jpg' },
  { id: 2, name: 'Table Lamp', price: 24.99, image: 'scroll-carusel-img-2.jpg' },
  { id: 3, name: 'Beige Table Lamp', price: 24.99, image: 'scroll-carousel-img-3.jpg' },
  { id: 4, name: 'Bamboo basket', price: 24.99, image: 'scroll-carousel-img-4.jpg' },
  { id: 5, name: 'White Drawer unit', price: 89.99, image: 'scroll-carousel-img-5.jpg' },
  { id: 6, name: 'Black Tray table', price: 19.99, image: 'scroll-carousel-img-6.jpg' },
  { id: 7, name: 'Lamp', price: 39.00, image: 'scroll-carousel-img-7.jpg' },
  { id: 8, name: 'Light Beige Pillow', price: 3.99, image: 'scroll-carousel-img-8.jpg' },
  { id: 9, name: 'Luxury Sofa', price: 299.00, originalPrice: 500.00, image: 'scroll-carousel-img-9.jpg' },
  { id: 10, name: 'Cozy Sofa', price: 299.00, image: 'scroll-carousel-img-10.jpg' },
  { id: 11, name: 'Black Brow Side table', price: 19.00, image: 'scroll-carousel-img-11.jpg' },
  { id: 12, name: 'Off-white Pillow', price: 7.99, image: 'scroll-carousel-img-12.jpg' },
]);

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