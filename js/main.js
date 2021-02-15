const data = [
	{ title: 'Notebook', id: 1, price: 2000 },
	{ title: 'Keyboard', id: 2, price: 200 },
	{ title: 'Mouse', id: 3, price: 100 },
	{ title: 'Gamepad', id: 4, price: 87 }
];

const renderProduct = (title = "unknown", id = "unknown", price = "unknown") => {
	return `
		<div class="product-item">
			<h3>${title}</h3>
			<p>${price}</p>
		</div>`;
};

const render = (products) => {
	//const productsList = products.map(item => renderProduct(item.title, item.id, item.price)); 

	// теперь вместо массива будет возвращаться строка - это сделает код более правильным и избавит страницу от запятых
	const productsList = products.reduce((pList, p) => pList += renderProduct(p.title, p.id, p.price), "");
	document.querySelector('.products').innerHTML = productsList; 
};

render(data);