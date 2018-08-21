window.onload = function () {
    console.clear();

    // var html = document.querySelector('html'), body = document.querySelector("body");

    var cart = document.querySelector("#cart");
    const buy = document.querySelectorAll("#buy");
    let cartItem = document.createElement('div');
        

        var span = document.createElement('span');
        let num = span.textContent;
        let containerDiv = this.document.createElement('div');
        containerDiv.classList = 'pt-1 pr-3 pb-1 pl-0';
    
    buy.forEach( card => {
        
    var addToCart = e => {
        if(cart.textContent){
            if( e.target.textContent){
                num = (Number(span.textContent) + 1);
                
                span.textContent = ' '+num;
                span.style.color = 'limegreen';
                cart.style.cursor = "pointer";
                cart.appendChild(span);

                var targets = e.target.parentElement.parentElement.firstElementChild.firstElementChild;
                // console.log(targets);
                let number = document.getElementById('number');
                console.log(e.target.parentElement.parentElement.nextElementSibling.children[2].firstElementChild);
                console.log(number)
                // create & add element to cart for each clicked item
                var div = document.createElement('div'), img = document.createElement('img'), del = document.createElement('span');

                let details, money = e.target.parentElement.parentElement.nextElementSibling.children[2].firstElementChild.innerText, ul = document.createElement('ul');
                details = `
                    <li class='mr-5'><i class='fa fa-map-marker'></i> Law School</li>
                    <li><i class='fa fa-money text-danger'> ${money} </i></li>
                `;
                ul.innerHTML = details;
                ul.classList = ' d-flex  flex-row mt-4 text-secondary';
                
                div.classList = 'd-flex flex-row';
                img.src = targets.src;
                img.alt = targets.alt;
                img.style.width = '18%';
                img.style.height = '20%';
                img.style.borderRadius = "90%";
                del.classList = 'fa fa-remove ml-lg-5 pl-5 mt-lg-4';
                
                div.append(img);
                div.append(del);                
                var div_style = div.style;
                
                div_style.background = '#bbb';
                div_style.marginBottom = '5px';
                div.insertBefore(ul, del);
                
                // cartItem.style.display = 'none';
                cartItem.classList.replace("show","hide");

                containerDiv.append(div);            
            }
            else{
                alert('error');
            }
        }
        else{ 
            console.log(typeof cart.textContent);
            cart.textContent = 1;
        }
        
        };
        card.addEventListener("click", addToCart);    

        
    });
    
    cartItem.appendChild(containerDiv);
        // show/hide cart items when user clicks the cart icon
        
        cartItem.style.width = '100%';
        cartItem.style.marginTop = '1em';
        
        
        // cartItem.style.float = 'right';

        cartItem.classList = 'bg-secondary';
        // cartItem.style.display = 'none';
    var page1 = document.querySelector("#page1"); 
    var page2 = document.querySelector("#page2"); 

    page1.classList = ' hide';
    page1.appendChild(cartItem);

            var showCart = () => {
                // tweaking pages
                if(page1.className.includes('hide')){
                    page1.classList.replace("hide","show");
                    
                    page2.classList = ' clap-in';
                    
                    
                    console.log(cartItem.childElementCount);
                
                    
                }else if(page1.className.includes('show')){
                    page1.classList.replace("show", "hide");
                    page2.classList = ' clap-out';
                
                }
                
            };
        cart.addEventListener('click', showCart);
};
