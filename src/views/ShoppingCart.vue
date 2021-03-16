<template>
  <main>
    <div class="new-arrivals">
      <div class="container y-center">
        <h1 class="tittle">New Arrivals</h1>
        <p class="right">
          <a class="arrivals-link" href="index.html">Home/</a>
          <a class="arrivals-link" href="#">Men/</a>
          <a class="arrivals-link arrivals-link-active" href="#"
            >New Arrivals</a
          >
        </p>
      </div>
    </div>
    <article class="container article-cart">
      <div class="shopping-content">
        <p class="product-tittle zero">Product Details</p>
        <p class="product-tittle zero">unite Price</p>
        <p class="product-tittle zero">Quantity</p>
        <p class="product-tittle zero">shipping</p>
        <p class="product-tittle zero">Subtotal</p>
        <p class="product-tittle zero">Action</p>
      </div>

      <div v-for="item of cartList" :key="item.id" class="shopping-content ">
        <section class="imgandtext">
          <img height="115" width="100" :src="item.img" alt="img" />
          <div>
            <p class="product-tittle zero">{{item.title}}</p>
            <p class="shopping-font zero">
              Color: <span class="shopping-font-2">Red</span>
            </p>
            <p class="shopping-font zero">
              Size: <span class="shopping-font-2">Xll</span>
            </p>
          </div>
        </section>
        <p class="shopping-font">${{item.price}}</p>
        <input class="shopping-font quantity-input zero" type="text" v-model="item.count">
        <p class="shopping-font upercase">{{item.subtotal}}</p>
        <p class="shopping-font">${{item.price * item.count}}</p>
        <p @click="deleteProduct(item)" class="shopping-font">
          <i class="fa fa-times-circle" aria-hidden="true"></i>
        </p>
      </div>

      <section class="shopping-buttons">
        <a href="#" class="shopping-button">cLEAR SHOPPING CART</a>
        <a href="#" class="shopping-button">cONTINUE sHOPPING</a>
      </section>
    </article>

    <article class="form-submits container">
      <form
        class="shipping-adress"
        action="#"
        method="post"
        enctype="multipart/form-data"
      >
        <p class="shopping-title">Shipping Adress</p>
        <input class="shipping-input" list="cities" placeholder="Bangladesh" />
        <datalist id="cities">
          <option value="City"></option>
          <option value="Town"></option>
          <option value="Land"></option>
          <option value="Place"></option>
        </datalist>

        <input class="shipping-input" type="text" placeholder="State" />
        <input
          class="shipping-input"
          type="text"
          placeholder="Postcode / Zip"
        />
        <button class="shopping-submit" type="submit">get a quote</button>
      </form>
      <form
        class="shipping-adress"
        action="#"
        method="post"
        enctype="multipart/form-data"
      >
        <p class="shopping-title">coupon discount</p>
        <p style="font-size: 14px">Enter your coupon code if you have one</p>
        <input class="shipping-input" type="text" placeholder="State" />
        <button class="shopping-submit" type="submit">Apply coupon</button>
        <div></div>
        <div></div>
      </form>
      <section class="cheque">
        <p style="font-size: 11px">SUB TOTAL &#160;&#160;${{grandTotal}}</p>
        <p class="shopping-title">
          GRAND TOTAL &#160;&#160;<span class="red">${{grandTotal}}</span>
        </p>
        <div style="width: 90%; background-color: #e2e2e2; height: 1px"></div>
        <button class="cheque-button">proceed to checkout</button>
      </section>
    </article>
  </main>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ShoppingCart',
  computed: {
    ...mapState([
      'cartList'
    ]),
    ...mapGetters([
      'grandTotal'
    ])
  },
  methods: {
    ...mapMutations([
      'deleteProduct'
    ])
  }
}
</script>
