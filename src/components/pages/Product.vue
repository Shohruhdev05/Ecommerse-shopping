<template>
  <HeaderComponent/>
  <NavbarComponent/>
  <Product1Section/>
  <ProductCommentWrite/>
<!--  <ProductUserComment/>-->
  <FooterEmailComponent/>
  <FooterComponent/>
</template>
<script setup>

import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import Product1Section from "@/components/pages/ProductPage1/Product1Section.vue";
import FooterEmailComponent from "@/components/FooterEmailComponent.vue";
import ProductUserComment from "@/components/pages/ProductPage1/ProductUserComment.vue";
import ProductCommentWrite from "@/components/pages/ProductPage1/ProductCommentWrite.vue";
</script>

<style scoped>

</style>