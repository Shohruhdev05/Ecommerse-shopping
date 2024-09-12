<template>
<div class="container mt-3">
  <div class="row">
    <div class="col-md-6">
      <h1 class="simply-un">Simply Unique<span class="slash">/</span></h1>
      <h1 class="simply-be">Simply Better<span class="slash">.</span></h1>
    </div>
    <div class="col-md-4 offset-1 mt-5 pt-4 simp">
      <p class="simply-text"><b>3legant</b> is a gift & decorations store based in HCMC, Vietnam. Est since 2019. </p>
    </div>
  </div>
</div>
</template>
<script setup>

</script>


<style scoped>
.slash{
  color:#6C7275
}
.simply-un, .simply-be {
  font-size: 76px;
  color:#000;
}
.simply-text {
  justify-content: center;
  justify-items: center;
}
@media screen and (max-width: 991px) {
  .simply-un, .simply-be{
    font-size: 60px;
  }
}
@media screen and (max-width: 767px) {
  .simply-text, .simp {
    display: none
  }
}
</style>