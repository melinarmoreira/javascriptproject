
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

    let row = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = `<img class="imgcart" src="${product.img}" alt="${product.id}">`;
    row.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = product.description;
    row.appendChild(td);

    // td = document.createElement('td');
    // td.innerHTML = 1;
    
    // row.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = product.price;
    row.appendChild(td);

    td = document.createElement('td');
    // td.innerHTML = `<button class='delete' value="${product.id}"><img class="deletepic" src="img/deletepng.png"></button>`;
    td.innerHTML = `<img class ="delete" src="img/deletepng.png" type="button" value ="${product.id}">`
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

    $(".containergrid").css("filter", "none");
    $(".form").slideDown(1500);

        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price;
            console.log(total);
        }


    if (total === 0 || cart.length === 0) {
        swal("Oops!", "No tienes productos en tu carrito!", "error");
    } else {
        $('.cuotas').append(`
        <select name="cuota" id="select">
        <option value="$${total} en 1 pago de ${total}" class="option1" name="option"> 1 pago de $${total} sin interés </option>
        <option value="$${total} en 3 pagos de ${total/3}" class="option2" name="option"> 3 pagos de $${total/3} sin interés </option>
        <option value="$${total} en 12 pagos de ${total/12}" class="option3" name="option"> 12 pagos de $${total/12} sin interés </option>
        </select>`
        );
    }

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


    if (name === '') {
        swal("Oops!", "Ingrese un nombre valido", "error");
    }
    else if (email === '') {
        swal("Oops!", "Ingrese un mail valido", "error");

    }
    else if (cvv.length !== 3) {

        swal("Oops!", "Ingrese un codigo de seguridad valido", "error");
    } else {

        swal({
            title: "PAGO APROBADO #076!",
            text: 'Gracias por tu compra, ' + JSON.parse(sessionStorage.getItem('username').toUpperCase()) + '!\n' + 'En unos minutos llegara un comprobante a ' + sessionStorage.getItem('email'),
            icon: "success",
            button: "OK",
        });

    }


    

});


let emptyButton = document.querySelector('.empty-cart');
emptyButton.addEventListener('click', function() {


    accumulator = 0;
    renderAccumulator(accumulator);

    if (cart.length === 0) {

        swal({

            title: "Oops!",
            text: "No tienes items en tu carrito",
            icon: "error",
            button: "OK",

        })
        
        $(".containercart").slideUp(1000);
        $(".containergrid").css("filter", "none")
        clicks--;;
        cart = [];
        accumulator = 0;
        renderAccumulator(accumulator);

    } else {
            cart = [];

            let td = document.getElementsByTagName('td');
    
            for (const td1 of td) {
                    td1.parentNode.remove();
            }
            
            // let noItems = document.querySelector('#noItems');
            // let pItems = document.createElement('p');
            // noItems.appendChild(pItems);
    

            accumulator = 0;
            renderAccumulator(accumulator);
    }
});


let clicks = 0;

$('.cartlogo').on('click', function() 

{

    if (clicks===0){
        $(".containercart").slideDown(1000);
        $(".containercart").css("position", "absolute");
        $(".containercart").css("z-index", "1");
        $(".containergrid").css("filter", "blur(5px)");
        clicks++;
        // $(".containergrid").css("position", "relative")
    } else {
        $(".containercart").slideUp(1000);
        $(".containergrid").css("filter", "none")
        clicks--;
    }
});
    

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });


$('#cartMenu').on('click', function(e){

    if (clicks===0){
        $(".containercart").slideDown(1000);
        $(".containercart").css("position", "absolute");
        $(".containercart").css("z-index", "1");
        $(".containergrid").css("filter", "blur(5px)");
        clicks++;
        // $(".containergrid").css("position", "relative")
    } else {

        $(".containercart").slideUp(1000);
        $(".containergrid").css("filter", "none")
        clicks--;
    }
});





