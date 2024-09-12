<template>
  <div class="container mt-2 mb-5">
    <div class="row">
      <div class="col-md-6 mt-2">
        <label for="userName" style=" font-weight: 700; color: #6C7275">FULL NAME</label>
        <input type="text" class="form-control input mt-2" id="userName" placeholder="Your Name">
        <label for="email" style=" font-weight: 700; color: #6C7275" class="mt-4">EMAIL ADDRESS</label>
        <input type="email" class="form-control input mt-2" id="email" placeholder="Your Email">
        <label for="text" style=" font-weight: 700; color: #6C7275" class="mt-4">MESSAGE</label>
        <textarea name="" id="" cols="30" rows="5" class="form-control input mt-2"
                  placeholder="Your message"></textarea>
        <div class="button-message">
          <button type="submit" class="btn btn-dark mt-4">Send Message</button>
        </div>
      </div>
      <div class="col-md-6 mt-2">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24785.663673638846!2d65.39458778608952!3d39.05617471355324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4eed9796d45981%3A0x6539d502ef29ca6f!2z0JzQsNC50LzQsNC90LDQuiwg0JrQsNGI0LrQsNC00LDRgNGM0Y8sINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1724329297571!5m2!1sru!2s"
             height="390" style="border:0;width: 100%;" allowfullscreen="" loading="lazy" class="map"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>


<style scoped>
.input {
  width: 100%;
}

.btn-dark {
  width: 190px
}


@media screen and (max-width: 767px) {
  .button-message {
    text-align: center;
  }

}

</style>