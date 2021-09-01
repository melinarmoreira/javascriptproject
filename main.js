
//render contador

function renderAccumulator(accumulator) {
    let contadorRender = document.getElementById('contador');
    contadorRender.innerHTML = `<p class="contador-style">
                                ${accumulator}
                                </p>`;
}



$(document).ready( function() {

    //Renderizar nombre

        swal("Bienvenido/a, ingrese su nombre para comprar:", {
        content: "input",
        })

        .then((value) => {
        sessionStorage.setItem('username', JSON.stringify(value));
        let renderUserName = JSON.parse(sessionStorage.getItem('username'));

        let welcome = document.querySelector('.welcome');
        let pname = document.createElement('p');
        welcome.appendChild(pname);
        pname.innerHTML = `Signed as ${renderUserName.toUpperCase()}`; 

    })

})

//Funcion que renderiza el carrito
function renderCart (product) {

    let cartindex = document.querySelector('table');
    // console.log(cartindex);

    let row = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = `<img class="imgcart" src="${product.img}" alt="${product.id}">`;
    row.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = product.description;
    row.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = 1;
    
    row.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = product.price;
    row.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = `<button class='delete' value="${product.id}">X</button>`;
    row.appendChild(td);

    cartindex.appendChild(row);
}

function renderDelete () {
    let cartindex = document.querySelector('table');
    let row = document.querySelector('tr');
    cartindex.removeChild(row);
}




let products = [

    {id:0, description:'Sweatshirt', price: 4000, size: 'M', img: 'img/img1.jpg', class: 'grid1'},
    {id:1, description: 'Cardigan', price: 5500, size: 'U', img: 'img/img2.jpg',  class: 'grid2'},
    {id:2, description: 'Skirt', price: 3800, size: 'S', img: 'img/img3.jpg',  class: 'grid3'},
    {id:3, description: 'Dress', price: 7800, size: 'L', img: 'img/img4.jpg',  class: 'grid4'},
    {id:4, description: 'Blouse', price: 2900, size: 'M', img: 'img/img5.jpg', class: 'grid5'},
    {id:5, description: 'Purse', price: 4900, size:'U', img:'img/img6.jpg', class:'grid6'},

];

//Renderizar productos del array "products"
let html = '';
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
let accumulator = 0;
console.log(cart, 'Su carrito está vacio');

let buyButtons = document.getElementsByClassName('button-buy');
    //Bucle botones de comprar
for (const button of buyButtons) {



        button.addEventListener('click', function (event) {
            //Agregar al carrito productos y renderizarlos
                let selectedProduct = products.find( x => x.id == event.target.value);
                cart.push(selectedProduct);
                renderCart(cart[cart.length - 1]);
                accumulator ++;
                
                renderAccumulator(accumulator);
                
                //Eliminar productos del cart, y renderizarlo
                let deleteButton = document.getElementsByClassName("delete");

                    for(const button1 of deleteButton) {
                    
                            button1.addEventListener('click', function (e) {

                                        e.stopImmediatePropagation();
                            
                                        let deletedProduct = products.find( x => x.id == e.target.value);

                                        cart.splice(cart.indexOf(deletedProduct), 1);
                                        e.target.parentNode.parentNode.remove();

                                        accumulator --;
                                        renderAccumulator(accumulator);
                })}
        })

}

// Boton de checkout
// let checkoutButton = document.querySelector('.button-checkout');
let total = 0;
$(".button-checkout").one( "click", function (e) {

        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price;
            console.log(total);
        }

    let divTotal = document.getElementById('total');
    let pTotal = document.createElement('p');
    divTotal.appendChild(pTotal);

    if (total === 0 || cart.length === 0) {
        swal("Oops!", "No tienes productos en tu carrito!", "error");
    } else {
        pTotal.innerHTML = `<p>El total a abonar es $${total}</p>`;
    }

        $('.cuotas').append(`
        <select name="cuota" id="select">
        <option value="$${total} en 1 pago de ${total}" class="option1" name="option"> 1 pago de $${total} sin interés </option>
        <option value="$${total} en 3 pagos de ${total/3}" class="option2" name="option"> 3 pagos de $${total/3} sin interés </option>
        <option value="$${total} en 12 pagos de ${total/12}" class="option3" name="option"> 12 pagos de $${total/12} sin interés </option>
        </select>`
        );
});



$('.submit').on("click", function(e) {

    e.preventDefault();

    let name = document.getElementById('input-name').value;
    JSON.stringify(sessionStorage.setItem('name', name));
    let email = document.getElementById('input-email').value;
    sessionStorage.setItem('email', email);
    let option = document.querySelector('option[name="option"]:checked').value;
    sessionStorage.setItem('option', option);
    let cvv = document.getElementById('input-cvv').value;


    if (name == '') {

        $('.form').append(`<p>Ingrese un nombre válido </p>`);

    }
    else if (email == '') {

        $('.form').append(`<p>Ingrese un mail válido </p>`);

    }
    else if (cvv.length !== 3) {

        $('.form').append(`<p>Ingrese un codigo de seguridad válido</p>`)
    }


      swal({
        title: "PAGO APROBADO #076!",
        text: 'Gracias por tu compra, ' + JSON.parse(sessionStorage.getItem('username').toUpperCase()) + '!\n' + 'En unos minutos llegara un comprobante a ' + sessionStorage.getItem('email'),
        icon: "success",
        button: "OK",
      });

});


let emptyButton = document.querySelector('.empty-cart');
emptyButton.addEventListener('click', function() {

    cart = [];

    let td = document.getElementsByTagName('td');

        for (const td1 of td) {
            td1.parentNode.remove();
        }
        
        
        let noItems = document.querySelector('#noItems');
        let pItems = document.createElement('p');
        noItems.appendChild(pItems);
        pItems.innerText = `No hay items en el carrito`;
        

        accumulator = 0;
        renderAccumulator(accumulator);
});







