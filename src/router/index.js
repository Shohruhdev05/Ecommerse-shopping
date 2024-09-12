import { createRouter, createWebHistory } from 'vue-router'
import SignIn from "@/components/pages/SignIn.vue"
import SignUp from "@/components/pages/SignUp.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import SectionPictureComponent from "@/components/SectionPictureComponent.vue";
import SectionSimplyComponent from "@/components/SectionSimplyComponent.vue";
import SectionCardsComponent from "@/components/SectionCardsComponent.vue";
import SectionCarouselComponent from "@/components/SectionCarouselComponent.vue";
import SectionValuesCardsComponent from "@/components/SectionValuesCardsComponent.vue";
import SectionBannerComponent from "@/components/SectionBannerComponent.vue";
import SectionArticlesCardsComponent from "@/components/SectionArticlesCardsComponent.vue";
import FooterEmailComponent from "@/components/FooterEmailComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import Home from "@/components/pages/Home.vue";
import Shop from "@/components/pages/Shop.vue";
import Product from "@/components/pages/Product.vue";
import ContactUs from "@/components/pages/ContactUs.vue";
import Product1Section from "@/components/pages/ProductPage1/Product1Section.vue";
import Shop1Section from "@/components/pages/ShopPage1/Shop1Section.vue";
import Shop1SectionCards from "@/components/pages/ShopPage1/Shop1SectionCards.vue";
import ContactUsSection from "@/components/pages/ContactUsPage/ContactUsSection.vue";
import ContactUsSectionBanner from "@/components/pages/ContactUsPage/ContactUsSectionBanner.vue";
import ContactUsSectionContactUs from "@/components/pages/ContactUsPage/ContactUsSectionContactUs.vue";
import ContactUsMap from "@/components/pages/ContactUsPage/ContactUsMap.vue";
import ProductUserComment from "@/components/pages/ProductPage1/ProductUserComment.vue";
import ProductCommentWrite from "@/components/pages/ProductPage1/ProductCommentWrite.vue";
import AddToCardComponent from "@/components/pages/ProductPage1/AddToCardComponent.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/shop',
      name: 'shop',
      component:Shop
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component:ContactUs
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path:'/header-component',
      name:'header-component',
      component: HeaderComponent
    },
    {
      path:'/navbar-component',
      name:'navbar-component',
      component: NavbarComponent
    },
    {
      path:'/section-picture-component',
      name:'section-picture-component',
      component: SectionPictureComponent
    },
    {
      path: '/section-simply-component',
      name:'section-simply-component',
      component: SectionSimplyComponent
    },
    {
      path: '/section-cards-component',
      name:'section-cards-component',
      component: SectionCardsComponent
    },
    {
      path:'/section-carousel-component',
      name:'section-carousel-component',
      component: SectionCarouselComponent
    },
    {
      path:'/section-values-cards-component',
      name:'section-values-cards-component',
      component: SectionValuesCardsComponent
    },
    {
      path: '/section-banner-component',
      name:'section-banner-component',
      component: SectionBannerComponent
    },
    {
      path:'/section-articles-cards-component',
      name:'section-articles-component',
      component: SectionArticlesCardsComponent
    },
    {
      path: '/footer-email-component',
      name:'footer-email-component',
      component: FooterEmailComponent
    },
    {
      path: '/footer-component',
      name:'footer-component',
      component: FooterComponent
    },
    {
      path: '/product1-section',
      name:'product1-section',
      component: Product1Section
    },
    {
      path: '/shop1-section',
      name:'shop1-section',
      component: Shop1Section
    },
    {
      path:'/shop1-section-cards',
      name:'shop1-section-cards',
      component: Shop1SectionCards
    },
    {
      path: '/contact-us-section',
      name:'contact-us-section',
      component: ContactUsSection
    },
    {
      path:'/contact-us-section-banner',
      name:'contact-us-section-banner',
      component: ContactUsSectionBanner
    },
    {
      path:'/contact-us-section-contact-us',
      name:'contact-us-section-contact-us',
      component: ContactUsSectionContactUs
    },
    {
      path: '/contact-us-map',
      name:'contact-us-map',
      component: ContactUsMap
    },
    {
      path:'/product-user-comment',
      name:'product-user-comment',
      component: ProductUserComment
    },
    {
      path: '/product-comment-write',
      name:'product-comment-write',
      component: ProductCommentWrite
    },
    {
      path: '/add-to-card',
      name:'addToCard',
      component: AddToCardComponent
    }
  ]
})

export default router
