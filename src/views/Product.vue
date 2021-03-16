<template>
  <main>
    <div class="new-arrivals">
      <div class="container y-center">
        <h1 class="tittle">New Arrivals</h1>
        <p class="right">
          <a class="arrivals-link" href="index.html">Home/</a>
          <a class="arrivals-link" href="#">Men/</a>
          <a class="arrivals-link arrivals-link-active" href="#">New Arrivals</a>
        </p>
      </div>
    </div>

    <div class="content container">
      <aside>
        <div class="dropdown-block">
          <h2 class="dropdown-title">Category</h2>
          <ul class="dropdown-menu">
            <li><a class="dropdown-link" href="#">Accessories</a></li>
            <li><a class="dropdown-link" href="#">Bags</a></li>
            <li><a class="dropdown-link" href="#">Denim</a></li>
            <li><a class="dropdown-link" href="#">Hoodies & Sweatshirts</a></li>
            <li><a class="dropdown-link" href="#">Jackets & Coats</a></li>
            <li><a class="dropdown-link" href="#">Pants</a></li>
            <li><a class="dropdown-link" href="#">Polos</a></li>
            <li><a class="dropdown-link" href="#">Shirts</a></li>
            <li><a class="dropdown-link" href="#">Shoes</a></li>
            <li><a class="dropdown-link" href="#">Shorts</a></li>
            <li><a class="dropdown-link" href="#">Sweaters & Knits</a></li>
            <li><a class="dropdown-link" href="#">T-Shirt</a></li>
            <li><a class="dropdown-link" href="#">Tanks</a></li>
          </ul>
        </div>
        <div class="dropdown-block">
          <h2 class="dropdown-title">BRAND</h2>
        </div>
        <div class="dropdown-block">
          <h2 class="dropdown-title">DESIGNER</h2>
        </div>
      </aside>

      <div class="all-content">
        <section class="settings-blocks">
          <div class="settings-block">
            <h2 class="title-settings">Trending now</h2>
            <div>
              <a class="trending-link" href="#">Bohemain</a><span class="slash">|</span>
              <a class="trending-link" href="#">Floral</a><span class="slash">|</span>
              <a class="trending-link" href="#">Lace</a><br>
              <a class="trending-link" href="#">Floral</a><span class="slash">|</span>
              <a class="trending-link" href="#">Lace</a><span class="slash">|</span>
              <a class="trending-link" href="#">Bohemain</a>
            </div>
          </div>
          <div class="settings-block">
            <h2 class="title-settings">Size</h2>
            <div class="size-settings">
              <label for="xxs"><input id="xxs" class="checkbox" type="checkbox">XXS</label>
              <label for="xs"><input id="xs" class="checkbox" type="checkbox">XS</label>
              <label for="s"><input id="s" class="checkbox" type="checkbox">S</label>
              <label for="m"><input id="m" class="checkbox" type="checkbox">M</label>
              <label for="l"><input id="l" class="checkbox" type="checkbox">L</label>
              <label for="xl"><input id="xl" class="checkbox" type="checkbox">XL</label>
              <label class="last-label" for="xxl"><input id="xxl" class="checkbox" type="checkbox">XXL</label>
            </div>
          </div>
          <div class="settings-block">
            <h2 class="title-settings">pRICE</h2>
            <input class="ranges" type="range" min="1" max="100">
          </div>
        </section>

        <section class="next-settings">
          <div class="next-settings-buttons">
            <button class="next-settings-button">Sort By</button><button class="next-settings-button">Name ▾</button>
          </div>
          <div class="next-settings-buttons">
            <button class="next-settings-button">Show</button><button class="next-settings-button">09 ▾</button>
          </div>
        </section>

        <article class="products products2">
          <section class="product" v-for="item of productList.productPage" :key="item.id">
            <div class="product-img">
              <img :src="item.img" alt="img">
              <div class="hover-block">
                <button class="button" @click="addProduct(item)"><img src="img/forma_1_copy_1287.png" alt="img">Add to Cart</button>
              </div>
            </div>
            <div class="product-info">
              <p class="product-tittle">{{item.title}}</p>
              <p class="product-price">${{item.price}}</p>
            </div>
          </section>
          <!-- <section class="product">
            <div class="product-img">
              <img src="img/newproduct2.jpg" alt="img">
              <div class="hover-block"><button class="button"><img src="img/forma_1_copy_1287.png" alt="img">Add to Cart</button></div>
            </div>
            <div class="product-info">
              <p class="product-tittle">Mango People T-shirt</p>
              <p class="product-price">$52.00</p>
            </div>
          </section>
          <section class="product">
            <div class="product-img">
              <img src="img/newproduct3.jpg" alt="img">
              <div class="hover-block"><button class="button"><img src="img/forma_1_copy_1287.png" alt="img">Add to Cart</button></div>
            </div>
            <div class="product-info">
              <p class="product-tittle">Mango People T-shirt</p>
              <p class="product-price">$52.00</p>
            </div>
          </section>
          <section class="product">
            <div class="product-img">
              <img src="img/newproduct4.jpg" alt="img">
              <div class="hover-block"><button class="button"><img src="img/forma_1_copy_1287.png" alt="img">Add to Cart</button></div>
            </div>
            <div class="product-info">
              <p class="product-tittle">Mango People T-shirt</p>
              <p class="product-price">$52.00</p>
            </div>
          </section>
          <section class="product">
            <div class="product-img">
              <img src="img/newproduct5.jpg" alt="img">
              <div class="hover-block"><button class="button"><img src="img/forma_1_copy_1287.png" alt="img">Add to Cart</button></div>
            </div>
            <div class="product-info">
              <p class="product-tittle">Mango People T-shirt</p>
              <p class="product-price">$52.00</p>
            </div>
          </section>
          <section class="product">
            <div class="product-img">
              <img src="img/newproduct6.jpg" alt="img">
              <div class="hover-block"><button class="button"><img src="img/forma_1_copy_1287.png" alt="img">Add to Cart</button></div>
            </div>
            <div class="product-info">
              <p class="product-tittle">Mango People T-shirt</p>
              <p class="product-price">$52.00</p>
            </div>
          </section>
          <section class="product">
            <div class="product-img">
              <img src="img/newproduct7.jpg" alt="img">
              <div class="hover-block"><button class="button"><img src="img/forma_1_copy_1287.png" alt="img">Add to Cart</button></div>
            </div>
            <div class="product-info">
              <p class="product-tittle">Mango People T-shirt</p>
              <p class="product-price">$52.00</p>
            </div>
          </section>
          <section class="product">
            <div class="product-img">
              <img src="img/newproduct8.jpg" alt="img">
              <div class="hover-block"><button class="button"><img src="img/forma_1_copy_1287.png" alt="img">Add to Cart</button></div>
            </div>
            <div class="product-info">
              <p class="product-tittle">Mango People T-shirt</p>
              <p class="product-price">$52.00</p>
            </div>
          </section>
          <section class="product">
            <div class="product-img">
              <img src="img/newproduct9.jpg" alt="img">
              <div class="hover-block"><button class="button"><img src="img/forma_1_copy_1287.png" alt="img">Add to Cart</button></div>
            </div>
            <div class="product-info">
              <p class="product-tittle">Mango People T-shirt</p>
              <p class="product-price">$52.00</p>
            </div>
          </section> -->
        </article>

        <section class="footer-section">
          <div class="links-pages">
            <a class="link-page" href="#">&lt;</a>
            <a class="link-page" href="#"><span class="red">1</span></a>
            <a class="link-page" href="#">2</a>
            <a class="link-page" href="#">3</a>
            <a class="link-page" href="#">4</a>
            <a class="link-page" href="#">5</a>
            <a class="link-page" href="#">6</a>
            <a class="link-page" href="#">...20</a>
            <a class="link-page" href="#">></a>
          </div>
          <a class="view-all" href="#">View All</a>
        </section>
      </div>

    </div>
    <section class="black-banner2">
      <div class="container black-banner-container">
        <div class="banner-info-block">
          <div class="text-info-block text-info-block2">
            <div><img src="img/black_banner_icon1.png" alt="img"></div>
            <h3 class="h3-block">Free Delivery</h3>
            <p class="p-block p-block2">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
        </div>
        <div class="banner-info-block">
          <div class="text-info-block text-info-block2">
            <div><img src="img/black_banner_icon2.png" alt="img"></div>
            <h3 class="h3-block">Sales & discounts</h3>
            <p class="p-block p-block2">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
        </div>
        <div class="banner-info-block">
          <div class="text-info-block text-info-block2">
            <div><img src="img/black_banner_icon3.png" alt="img"></div>
            <h3 class="h3-block">Quality assurance</h3>
            <p class="p-block p-block2">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Product',
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
