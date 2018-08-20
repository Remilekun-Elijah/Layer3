window.onload = function () {
    console.clear();
    var cart = document.querySelector("#cart");
    const buy = document.querySelectorAll("#buy");

    buy.forEach( (card) => {
        card.addEventListener("click", addToCart);

    function addToCart() {

        
        // cart.textContent = Number(1);
        // cart.textContent = add();
        

        if( typeof cart.textContent == Number){
            cart.textContent = (cart.textContent+1);
            console.log(cart.textContent +1);
        }
        else{ 
            console.log(typeof cart)
            cart.textContent = 1;
        }
        
        }
    })

};
