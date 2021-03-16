<template>
  <main>
    <section class="banner">
      <div class="container brand-strip">
        <p class="the-brand">The Brand<br><span class="of-luxerious">Of&nbsp;Luxerious&nbsp;<span class="fashion">Fashion</span></span>
        </p>
      </div>
    </section>

    <section class="four-banners">
      <div class="left-side">
        <div class="banners">
          <img src="img/banner1.jpg" alt="img"/>

          <div class="banner-text-block"><p class="banner-text">Hot Deal<br><span class="big-red">For Men</span></p>
          </div>
        </div>
        <div class="banners">
          <img src="img/banner3.jpg" alt="img"/>

          <div class="banner-text-block"><p class="banner-text">Luxirous & Trendy<br><span
            class="big-red">Accesories</span></p></div>
        </div>
      </div>
      <div class="right-side">
        <div class="banners">
          <img src="img/banner2.jpg" alt="img"/>

          <div class="banner-text-block"><p class="banner-text">30% Offer<br><span class="big-red">Woman</span></p>
          </div>
        </div>
        <div class="banners">
          <img src="img/banner4.jpg" alt="img"/>

          <div class="banner-text-block"><p class="banner-text">New Arrivals<br><span class="big-red">For Kids</span>
          </p></div>
        </div>
      </div>
    </section>
    <article class="products container">
      <div class="tittle-products">
        <p class="tittle-products-h2">Fetured Items <br><span class="tittle-products-info">Shop for items based on what we featured in this week</span>
        </p>

      </div>

      <section class="product" v-for="item of productList.homePage" :key="item.id">
        <!-- <router-link to="/single-page"> -->
          <div class="product-img">
            <img :src="item.img" alt="img">
            <div class="hover-block">
              <button class="button" @click="addProduct(item)"><img src="img/forma_1_copy_1287.png" alt="img">Add to Cart</button>
            </div>
          </div>
          <div class="product-info">
            <p class="product-tittle">{{item.title}}</p>
            <p class="product-price">${{item.price}}.00</p>
          </div>
        <!-- </router-link> -->
      </section>
    </article>
    <router-link class="all-products" to="/product">Browse All Product ➞</router-link>
    <div class="black-banner container">
      <div class="black-banner-img">
        <img src="img/black-banner.jpg" alt="img">
        <p class="black-banner-text">30% <span class="red">OFFER</span><br><span class="small-font">FOR WOMEN</span></p>
        <div class="vignette"><img src="img/vignette.png" alt="img"></div>
      </div>
      <div class="black-banner-info">
        <div class="banner-info-block">
          <div><img src="img/black_banner_icon1.png" alt="img"></div>
          <div class="text-info-block">
            <h3 class="h3-block">Free Delivery</h3>
            <p class="p-block">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
              extensive models.</p>
          </div>
        </div>
        <div class="banner-info-block">
          <div><img src="img/black_banner_icon2.png" alt="img"></div>
          <div class="text-info-block">
            <h3 class="h3-block">Sales & discounts</h3>
            <p class="p-block">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
              extensive models.</p>
          </div>
        </div>
        <div class="banner-info-block">
          <div><img src="img/black_banner_icon3.png" alt="img"></div>
          <div class="text-info-block">
            <h3 class="h3-block">Quality assurance</h3>
            <p class="p-block">Worldwide delivery on all. Authorit tively morph next-generation innov tion with
              extensive models.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState([
      'productList'
    ])
  },
  methods: {
    ...mapMutations([
      'addProduct'
    ])
  }
}
</script>
