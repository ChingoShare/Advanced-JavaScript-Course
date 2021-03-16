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
    <article class="checkout-content container">
      <section class="checkout-content-block">
        <h2 class="checkout-h">01. Shipping Adress</h2>
        <div class="invicible">
          <form class="checkout-form">
            <p class="checkout-text">
              Check as a guest or register <br />
              <span class="pale-font"
                >Register with us for future convenience</span
              >
            </p>
            <div>
              <label
                ><input class="checkout-radio" type="radio" name="check" /><span
                  class="checkout-text"
                  >checkout as guest</span
                ></label
              >
              <label
                ><input
                  class="checkout-radio"
                  type="radio"
                  name="check"
                  checked=""
                /><span class="checkout-text">register</span></label
              >
            </div>
            <p class="checkout-text">
              register and save time! <br />
              <span class="pale-font"
                >Register with us for future convenience</span
              >
            </p>
            <p class="pale-font">
              » Fast and easy checkout <br />
              » Easy access to your order history and status
            </p>
            <button class="checkout-button">Continue</button>
          </form>

          <form class="checkout-form">
            <p class="checkout-text">
              Already registed?<br />
              <span class="pale-font">Please log in below</span>
            </p>
            <div>
              <p style="font-size: 12px; font-weight: 400">
                EMAIL ADDRESS<span style="color: red; font-size: 17px">*</span>
              </p>
              <input class="shipping-input" type="text" />
            </div>
            <div>
              <p style="font-size: 12px; font-weight: 400">
                PASSWORD<span style="color: red; font-size: 17px">*</span>
              </p>
              <input class="shipping-input" type="text" />
            </div>
            <p class="pale-font color-red">* Required Fileds</p>
            <div class="divblock">
              <button class="checkout-button">Log in</button
              ><a href="#" class="forgot-password" style="font-size: 14px"
                >Forgot Password ?</a
              >
            </div>
          </form>
        </div>
      </section>

      <section class="checkout-content-block">
        <h2 class="checkout-h">02. BILLING INFORMATION</h2>
      </section>
      <section class="checkout-content-block">
        <h2 class="checkout-h">03. Shipping Information</h2>
      </section>
      <section class="checkout-content-block">
        <h2 class="checkout-h">04. Shipping Method</h2>
      </section>
      <section class="checkout-content-block">
        <h2 class="checkout-h">05. Payment Method</h2>
      </section>
      <section class="checkout-content-block">
        <h2 class="checkout-h">06. Order Review</h2>
      </section>
    </article>
  </main>
</template>
