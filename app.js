window.onload = function () {
    console.clear();
    var cart = document.querySelector("#cart");
    const buy = document.querySelectorAll("#buy");
    var num = cart.textContent;
    
    buy.forEach( (card) => {
        card.addEventListener("click", addToCart);

    function addToCart(e) {

        
        // cart.textContent = Number(1);
        // cart.textContent = add();
        
        
        if( cart.textContent){
            if( e.target.textContent){
                num = (Number(cart.textContent) + 1);
                cart.textContent = ' '+num;
            console.log(e.target.firstElementChild);
            console.log
        }
        }
        else{ 
            console.log(typeof cart)
            cart = 1;
        }
        
        }
    })

};
