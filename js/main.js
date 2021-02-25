
const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

/*let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    // window.ActiveXObject -> new ActiveXObject();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) {
            return;
        }

        if (xhr.status !== 200) {
            console.log('some error');
            return;
        }

        cb(xhr.responseText);
    }
};*/

let getRequest = (url) => new Promise((resolve, reject) => fetch(url).then(data => resolve(data.text())));
getRequest(`${API}/catalogData.json`)
.catch(err => console.log('some error'))
.then(result => console.log(result));



class Products {
    products = [];
    container = null;

    constructor(selector) {
        this.container = document.querySelector(selector);
        this._fetchData()
            .then(() => this._render());
    }

    calcSum() {
        return this.products.reduce((accum, item) => accum += item.price, 0);
    }

    _fetchData() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .then(data => {
                for (let product of data) {
                    this.products.push(new ProductItem(product));
                }
            })
    }

    _render() {
        for (let product of this.products) {
            if (product.rendered) {
                continue;
            }

            this.container.insertAdjacentHTML('beforeend', product.render())
        }
    }
}

class ProductItem {
    title = '';
    price = 0;
    id = 0;
    img = '';
    rendered = false;

    constructor(product, img = 'https://placehold.it/200x150') {
        ({ product_name: this.title, price: this.price, id_product: this.id } = product);
        this.img = img;
    }

    render() {
        this.rendered = true;
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}


class Cart {
    invis = false;
    invisible() {
        document.querySelector(".btn-cart").addEventListener("click", () => {
            if (this.invis === false) {
                document.querySelector(".cart").style.display = "none";
            this.invis = true; 
            } else {
                document.querySelector(".cart").style.display = "block";
                this.invis = false;
            }
        })
    }
};

class CartItem {
    addElement() {
        document.querySelector(".products").addEventListener("click", e => {
            if (e.target === e.target.parentNode.querySelector(".buy-btn")) {
                const a = new CartItem;
                let name = e.target.parentNode.querySelector("h3").innerText;
                let price = e.target.parentNode.querySelector("p").innerText;
                document.querySelector(".cart").insertAdjacentHTML("beforeend", a.render(name, price));
            }
        });
    }

    deleteElement() {
        document.querySelector(".cart").addEventListener("click", e => {
            if (e.target === e.target.parentNode.querySelector(".btn-cart-item")) {
                e.target.parentNode.remove();
            }
        });
    }

    render(name, price, img = "https://placehold.it/50x50") {
        return `
            <div class="cart-item">
				<img src="${img}" alt="img">
				<h3>${name}</h3>
				<p>${price}р</p>
				<button class="btn-cart-item">Удалить</button>
			</div>`
    }
    // someMethod() - метод делает то-то
}

const cart = new Cart;
cart.invisible();
const cartItem = new CartItem;
cartItem.addElement();
cartItem.deleteElement();


const list = new Products('.products');
console.log(list.calcSum());





