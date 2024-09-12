<template>
 <footer>
   <div class="container">
     <div class="row">
       <div class="col-md-12">
             <h1>Join Our Newsletter</h1>
             <p>Sign up for deals, new products and promotions</p>
             <div class="row" style="text-align: center; justify-content: center;">
               <div class="col-md-4">
                 <label for="email"><i class="bi bi-envelope"></i> <span class="linkSignUp">Email address</span></label>
               </div>
               <div class="col-md-4">
                 <span><button type="submit" class="btn">Sign Up</button></span>
               </div>
             </div>
             <div class="row input-email-row">
               <div class="col-md-5">
                 <input type="email" class="form-control input-email" id="email" style="border-top:none; border-right: none; border-left: none; background-color: #F3F5F7;">
               </div>
             </div>
           </div>
         </div>
       </div>
<!--     </div>-->
<!--   </div>-->
 </footer>
</template>
<script setup>

</script>


<style scoped>

.col-md-12{
  text-align: center;
}
.linkSignIn{
  text-decoration: none;
  color:#6C7275
}
.input-email-row{
  justify-content: center;
}
.input-email{
  border: 1px solid #6C7275;
}
footer{
  background-image: url("../../images/footer-image.jpg");
  height: 360px;
  align-content: center;
}
@media screen and (max-width: 991px) {
  footer{
    background-image: none;
    background-color: #F3F5F7;
  }

}
</style>