import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: [
      { img: 'img/newproduct1.jpg', title: 'product', price: 100, count: 3, subtotal: 'free', id: 81 },
      { img: 'img/newproduct2.jpg', title: 'product', price: 100, count: 3, subtotal: 'free', id: 82 },
      { img: 'img/newproduct8.jpg', title: 'product', price: 100, count: 3, subtotal: 'free', id: 83 }
    ],
    productList: {
      homePage: [
        { img: 'img/product1.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 1 },
        { img: 'img/product2.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 2 },
        { img: 'img/product3.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 3 },
        { img: 'img/product4.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 4 },
        { img: 'img/product5.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 5 },
        { img: 'img/product6.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 6 },
        { img: 'img/product7.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 7 },
        { img: 'img/product8.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 8 }
      ],
      productPage: [
        { img: 'img/newproduct1.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 9 },
        { img: 'img/newproduct2.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 10 },
        { img: 'img/newproduct3.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 11 },
        { img: 'img/newproduct4.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 12 },
        { img: 'img/newproduct5.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 13 },
        { img: 'img/newproduct6.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 14 },
        { img: 'img/newproduct7.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 15 },
        { img: 'img/newproduct8.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 16 },
        { img: 'img/newproduct9.jpg', title: 'Mango People T-shirt', price: 52.00, subtotal: 'free', id: 17 }
      ]
    }
  },
  mutations: {
    addProduct (state, item) {
      const itemCart = state.cartList.find(el => el.id === item.id)
      if (itemCart) itemCart.count++
      else state.cartList.unshift(Object.assign({ count: 1 }, item))
      console.log(item)
      console.log(state.cartList)
    },
    deleteProduct (state, item) {
      const itemCart = state.cartList.find(el => el.id === item.id)
      if (itemCart.count > 1) itemCart.count--
      else state.cartList.splice(state.cartList.indexOf(itemCart), 1)
    }
  },
  getters: {
    grandTotal: state => {
      return state.cartList.reduce(function (sum, n) {
        sum += n.price * n.count
        return sum
      },
      0)
    }
  },
  modules: {
  }
})
