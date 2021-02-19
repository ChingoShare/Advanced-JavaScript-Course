const data = [
	{ title: 'Notebook', id: 1, price: 2000 },
	{ title: 'Keyboard', id: 2, price: 200 },
	{ title: 'Mouse', id: 3, price: 100 },
	{ title: 'Gamepad', id: 4, price: 87 }
];

class Products {
	products = data;
	constructor(selector) {
		this.pageAdd(selector, ProductItem);
	}
	pageAdd(selector, item) {
		const product = new item();
		const productsList = this.products.reduce((pList, p) => pList += product.render(p), "");
		document.querySelector(selector).innerHTML = `<h2>Общая стоимость: ${this.priceSum()} р</h2>` + productsList;
	}
	//Метод для сложения цен
	priceSum() {
		return this.products.reduce((sum, n) => sum += n.price, 0);
	}
};
class ProductItem {
	constructor() {
	}
	render(p) {
		return`<div class="product-item">
				<img src="${p.img || "img/noproduct.png"}" alt="img">
				<h3>${p.title}</h3>
				<p>${p.price} р</p>
				<button class="btn-product">Купить</button>
			</div>`;
	}
	
};

class Cart {
	constructor(selector) {
	}
	deleteElement() {}
	addElement() {}
};
class CartItem {
	constructor() {
	}
	render(p) {
		return`<div class="cart-item">
				<img src="${p.img || "img/noproduct.png"}" alt="img">
				<h3>${p.title}</h3>
				<p>${p.price} р</p>
				<button class="btn-cart-item">Удалить</button>
			</div>`;
	}
};
const catalog = new Products(".products");



//Задание про гамбургеры
class Hamburger {
	price = 0;
	calory = 0;
	constructor(size = "маленький", stuffing = "с сыром"){

		if (size === "маленький") {
			this.price += 50;
			this.calory += 20;
		}
		if (size === "большой") {
			this.price += 100;
			this.calory += 40;
		}
		if (stuffing === "с сыром") {
			this.price += 10;
			this.calory += 20;
		}
		if (stuffing === "с салатом") {
			this.price += 20;
			this.calory += 5;
		}
		if (stuffing === "с кортофелем") {
			this.price += 15;
			this.calory += 10;
		}
	}

	addSpice() {
		this.price += 15;
		this.calory += 0;
	}

	addSouse() {
		this.price += 20;
		this.calory += 5;
	}

}
const burger = new Hamburger("большой", "с салатом");
burger.addSouse();
burger.addSpice();
console.log(burger.price); // 155
console.log(burger.calory); // 50
