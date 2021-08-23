
// let nombreUsuario = prompt('Bienvenido, ingrese su nombre');
// let edadUsuario= parseInt(prompt('Ingrese su edad'));


// if ((nombreUsuario !== '') && (edadUsuario !== '')  && (edadUsuario > 18)) { 
//     alert('El nombre ingresado es ' + nombreUsuario + ' y su edad es ' + edadUsuario );
// } 
// else if (nombreUsuario == '') {
//     alert('No ingreso un nombre válido');
// } 
// else if (edadUsuario < 18) {
//     alert('No tiene edad suficiente para ingresar');
// }
// else if (edadUsuario == '') {
//     alert('No ingreso su edad');
// }

// console.log(edadUsuario);


// let pedirSexo = prompt ('Seleccione su sexo F o M o escriba STOP para finalizar');
// let mujeres = 0;
// let hombres = 0;


// while (pedirSexo !== 'STOP') {

// switch (pedirSexo) {
//         case 'F' :
//                 mujeres = mujeres + 1;
//                 alert('Mujeres ingresadas: ' + mujeres + '. Hombres ingresados :' + hombres);
//                 break;
//         case 'f' :
//                 mujeres = mujeres + 1;
//                 alert('Mujeres ingresadas: ' + mujeres + '. Hombres ingresados :' + hombres);
//                 break;
//         case 'm' :
//                 hombres = hombres + 1;
//                 alert('Mujeres ingresadas: ' + mujeres + '. Hombres ingresados :' + hombres);
//                 break;
//         case 'M' :
//                 hombres = hombres + 1;
//                 alert('Mujeres ingresadas: ' + mujeres + '. Hombres ingresados :' + hombres);
//                 break;
//         default :
//                 alert('Algun dato está erroneo');
// }

//         pedirSexo.toLowerCase = prompt ('Seleccione su sexo F o M o escriba STOP para finalizar');

// }

// ------------------------

// FUNCIONES 


//Calcular precio con IVA

// function calcFinalPrice (productPrice) {
//          productPrice = productPrice  * 1.21;
//         return productPrice;
        
// }

// // Imprimir mensaje de productos añadidos
// let msgCart = (product) => {console.log('Los siguientes productos : "' + product + '" fueron añadidos al carrito de compras.')}


// //Mensaje final de compra
// function  msgFinal (cart, total) {
//         console.log('Su carrito contiene: "' + cart + '". El total a abonar es $' + total + ' con IVA incluido.');
// }


// let addProduct = prompt('Ingrese un producto para añadirlo al carrito, presione ENTER para finalizar');
// let cart = '';
// let productPrice = parseInt(prompt('Ingrese el precio del producto o presione ENTER para final'));
// let total = 0;



// while (addProduct !== '') { 

//         cart = cart +  addProduct;
//         total = total + productPrice;

//         msgCart(addProduct);

//         console.log('El precio del producto con IVA es $' + calcFinalPrice(productPrice))
        
//         addProduct = prompt('Ingrese un producto para añadirlo al carrito o presione ENTER para finalizar');
//         productPrice = parseInt(prompt('Ingrese el precio del producto o presione ENTER para finalizar'));

//         if (addProduct == '') {
//                 break;
//         }

// }

// msgFinal(cart, calcFinalPrice(total));


// COMPLEMENTARIO
// Cálculo de IVA del producto, y recargo con tarjeta.
//FUNCIONES


// //SUMAR IVA
// function addIva(price) {
//         price = price * 1.21;
//         // alert('El precio ingresado con IVA es $'  + price);
//         return price;
// }

// //Calculo de interés sobre el precio ingresado, e iva incluido.
// function interestPayment(price) {
//         price = price * 1.36;
//         return price;
// }


// //Si el metodo de pago es tarjeta, agrega recargo. Si es efectivo, solo suma el iva.

// function paymentMethod () {

//         if ((method == 'e' || method == 'E')) {
//                 alert('El total a abonar en efectivo es: $' + addIva(userPrice) + ' con IVA incluido.');

//         } else if ((method == 'T' || method == 't')) {
//                 alert('El total a abonar con tarjeta tiene un recargo del 15%, el precio final es $' + interestPayment(userPrice) + ' con IVA incluido.');
//         }
// }



// let userPrice = parseInt(prompt('Ingrese el precio de su producto'))
// let alerta = alert('El precio ingresado es $' + userPrice );
// let method = prompt ('Si desea abonar en efectivo presione "E" , con tarjeta presione "T" ');

// addIva(userPrice);

// paymentMethod();










////-------------------------------------------


// //Si el metodo de pago es tarjeta, agrega recargo. Si es efectivo, solo suma el iva.

/**
 * Clases
 */
// class Product {

//         constructor(id, type, price, size) {
//         this.id = id;
//         this.type = type;
//         this.price = price;
//         this.size = size;
//         }

//         productIVA() {
//                 this.price = this.price * 1.21;
//                 console.log('El precio del producto ' + this.type.toUpperCase() + ' con IVA es $' + this.price);
//         }

// }

// class CartObj {

//         constructor(id, products) {
//                 this.id = id;
//                 this.products = products;
//         }

//         // getTotal(total) {
//         //         total = this.Product.price;
//         //         return total;
//         //         }
        
//         getTotal() {
//                 let total = 0;
//                 for(let i = 0; i < this.products.length; i++){
//                         total += this.products[i].price;
//                 }
//                 return total;
//         }
// }

// /**
//  * Funciones
//  */
// function paymentMethod (total) {

//         if (method == 1) {
//                 console.log('En efectivo tiene un descuento del 5%. Su total es: $' + (total * 0.95));

//         } else if (method == 2) {
//                 console.log('Con tarjeta tiene un recargo del 5%. Su total es: $' + (total * 1.05) );
//         }
// }

// function deleteLastItem (cart) {
//         cart.pop();
// }

// function quantityItemsAtCart (cart) {
//         console.log('Ha añadido al carrito ' + cart.products.length + ' productos.');
// }

// /**
//  * Inicio de flujo de ejecucion
//  */

// /* Creo los 4 productos */
// const remera = new Product (01, 'remera', 1200, 'M');
// const pantalon =  new Product (02, 'pantalon', 3000, 'S');
// const campera = new Product (03, 'campera', 5000, 'L');

// /* Creo un array de mis productos */
// let arrayProducts = [remera, pantalon, campera];

// /* Creo el carrito vacio */
// let cart = new CartObj(1, []);

// /* El usuario elige lo que desea comprar */
// let productToBuy = parseInt(prompt('Elija el número de producto que desea comprar: \n1 - Remera \n2 - Pantalon \n3 - Campera. \nPresione enter para finalizar'));

// while(!isNaN(productToBuy)) { 
//         if ( productToBuy === 1 ) {            
//                 let selectedProduct = arrayProducts.find( x => x.id === productToBuy)
//                 cart.products.push(selectedProduct);
//         } else if ( productToBuy === 2 ) {
//                 let selectedProduct = arrayProducts.find( x => x.id === productToBuy)
//                 cart.products.push(selectedProduct);
//         } else if ( productToBuy === 3 ) {
//                 let selectedProduct = arrayProducts.find( x => x.id === productToBuy)
//                 cart.products.push(selectedProduct);
//         }
//         else if (productToBuy == 4) {
//                 deleteLastItem(cart.products);
//                 console.log('Se eliminó un producto del carrito');
//         }
//         else {
//                 alert("Ingrese un número válido");
//         }

//         /* El usuario elige lo que desea comprar */
//         productToBuy = parseInt(prompt('Elija el número de producto que desea comprar: \n1 - Remera \n2 - Pantalon \n3 - Campera \n4- Elimina el ultimo producto del carrito \nPresione enter para finalizar'));
// }
// quantityItemsAtCart(cart);
// console.log("El total del carrito es $" + cart.getTotal());
// console.log(cart);

// let method = prompt ('Seleccione su método de pago: \n1 - Efectivo \n2 - Tarjeta');

// paymentMethod(cart.getTotal());



let html = '';

let products = [

    {id:0, description:'Sweatshirt', price: 4000, size: 'M', img: 'img/img1.jpg', class: 'grid1'},
    {id:1, description: 'Cardigan', price: 5500, size: 'U', img: 'img/img2.jpg',  class: 'grid2'},
    {id:2, description: 'Skirt', price: 3800, size: 'S', img: 'img/img3.jpg',  class: 'grid3'},
    {id:3, description: 'Dress', price: 7800, size: 'L', img: 'img/img4.jpg',  class: 'grid4'},
    {id:4, description: 'Blouse', price: 2900, size: 'M', img: 'img/img5.jpg', class: 'grid5'},
    {id:5, description: 'Purse', price: 4900, size:'U', img:'img/img6.jpg', class:'grid6'},

];

//Renderizar productos del array "products"

let container = document.getElementById('home');

products.forEach(product => {

    html +=
    `<article class="${product.class}">
    <img src="${product.img}" alt="${product.id}">
    <h6>${product.description.toUpperCase()}</h6>
    <p>$${product.price}</p>
    <button class="button-buy" value="${product.id}">BUY</button>
    </article>`
    
}); 

container.innerHTML = html;

let cart = [];
console.log(cart, 'cart vacio')

let buyButtons = document.getElementsByClassName('button-buy');
// console.log(buyButtons);

//Bucle botones de comprar
for (const button of buyButtons) {
    button.addEventListener('click', function(event) {
    // console.log('click comprar');


    let selectedProduct = products.find( x => x.id == event.target.value)
    cart.push(selectedProduct);
    console.log(cart, ' carrito dsp del selectedprod');

})};

//Botón de borrar

let deleteButton = document.querySelector('.delete') 

deleteButton.addEventListener('click', function(event) {
    cart.pop();
    console.log(cart, 'dsp del pop')
});

// Boton de checkout
let checkoutButton = document.querySelector('.button-checkout')

checkoutButton.addEventListener('click', function(event) {
    console.log('checkout');
});











