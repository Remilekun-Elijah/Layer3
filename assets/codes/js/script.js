document.addEventListener('DOMContentLoaded', function () {

  // window.setInterval(function(){alert(+1)}, 500);
  "use strict";
  document.getElementById('cartCheckout').disabled = true;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../assets/codes/js/food.json", true);

  function getFile(url, locationName, location, locationFood) {
    if (document.location.href.includes(url)) {
      document.getElementById('location-name').innerText = locationName;
      document.querySelector('ol .active').innerText = locationName;
      document.getElementById('location').innerText = location;

      locationFood.food.forEach(place => {
        displayJson(place.name, place.img, place.price, place.desc, place.min);
      });
      if ($('.breadcrumb .active').text().includes('Moshood Olugbani')) {
        $('.breadcrumb .active').text($('.breadcrumb .active').text().replace('Olugbani', ''))
      }
    }
  }

  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {

      // $("#cart").show('fast');
      $("#cart").removeClass('d-none');
      $("#cart").addClass('d-block');
      $("#cart").removeClass('d-block');
      $("#infoMsg").addClass('d-none');

      console.log('success', this.status, this.statusText, this.readyState, 'done: ' + this.DONE);
      let res = JSON.parse(this.response);
      getFile('law-school', res.location[0].lawschool.name, res.location[0].lawschool.location, res.location[0].lawschool);

      getFile('landmark', res.location[1].landmark.name, res.location[1].landmark.location, res.location[1].landmark);

      getFile('jide-oki', res.location[2].jideoki.name, res.location[2].jideoki.location, res.location[2].jideoki);
      getFile('moshood', res.location[3].moshood.name, res.location[3].moshood.location, res.location[3].moshood);

    }


  }
  xhr.onprogress = () => {
    console.log('loading', xhr.status, xhr.statusText, xhr.readyState);
    $('#cart').addClass('d-none');
    // $('#cart').hide();
    $('#infoMsg').text("Loading items...");
    $('#infoMsg').addClass('text-secondary');

  };
  xhr.onerror = () => {
    console.log('error', xhr.status, xhr.readyState, this.statusText);
    $('#infoMsg').text("Looks like something went wrong...");
    $('#infoMsg').addClass('text-danger');
    $('#cart').hide();
    $("#reload").removeClass('d-none');
    $("#reload").addClass('d-inline');
    $("#reload").on('click', () => document.location.reload());
  };
  xhr.send();

  function displayJson(name, imgSrc, price, desc, min) {
    const card = document.createElement('div'),
      cardBody = document.createElement('div'),
      flexImgDiv = document.createElement('div'),
      cardFooter = document.createElement('div');
    card.classList = "card mb-5 rounded shadow-lg";
    cardBody.classList.add("card-body");
    flexImgDiv.classList = "d-flex flex-row justify-content-between align-items-center";

    // child element variable tags
    const img = document.createElement("img"),
      foodName = document.createElement("h3"),
      p = document.createElement('p'),
      btn = document.createElement("button");

    // minimum amount
    foodName.id = min;
    // food image section
    img.height = "100";
    img.width = "150";
    img.classList = 'mr-md-4 rounded';
    img.src = imgSrc;
    img.alt = `Picture of ${name}`;

    // food name section
    foodName.classList = "card-title text-danger h3";
    foodName.innerText = name;

    // food description
    p.classList = "card-text";
    p.id = "food-desc";
    p.innerText = desc;

    // card footer section
    cardFooter.classList = "card-foote custom-hr";

    // button in footer
    btn.classList = "btn btn-danger btn-md";
    btn.style.borderRadius = '0';
    btn.id = 'buy';
    btn.type = "button";
    btn.value = '1';
    btn.setAttribute("data-target", "#priceModal");
    btn.setAttribute("data-toggle", "modal");
    if (price == 0) btn.innerText = `Free`;
    else {
      btn.innerText = `Buy for ₦${price}`;
    }

    // append button to card footer div
    cardFooter.appendChild(btn);

    flexImgDiv.appendChild(img);
    flexImgDiv.appendChild(foodName);

    cardBody.appendChild(flexImgDiv);
    cardBody.appendChild(p);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    document.getElementById('render-here').appendChild(card);
  }

  setInterval(() => {
    if (document.querySelector('.tooltip')) $('.tooltip').remove()
  }, 5000)

  function cartResponsiveness() {

    const cart = document.querySelector('#cart');
    const cartBody = document.querySelector('#cart-body');
    try {
      document.querySelectorAll("#render-here h3").forEach(h3 => {
        if (h3.textContent == 'Beans') {
          document.querySelectorAll('#cart-inner-body #food-name').forEach(food => {
            if (!food.textContent.includes('Rice')) {
              // console.log('NO RICE!!!');
              h3.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.textContent = 'Buy for ₦100'
            } else if (food.textContent.includes('Rice')) {
              // console.log('RICE!!');
              h3.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.textContent = 'Buy for ₦50';
              if (food.textContent == 'Beans') console.log(food);
            }
          });
          if (document.querySelector('#cart-inner-body #food-name') == undefined) h3.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.textContent = 'Buy for ₦100'
        }
      });

    }
    catch (err) {
      console.log(err)
    }

    if (window.innerWidth < 767) {
      document.querySelectorAll('.rounded').forEach(r => r.width = '110');
      // add class for styling mobile view
      cart.classList.add('collapseHeight');
      // stop cart from sticking to navbar
      cart.classList.remove('sticky-top');
      // make cart stick to bottom
      cart.classList.replace('pull-right', 'fixed-bottom');
      // determin carts height based on screen resolution
      cartBody.style.maxHeight = window.innerHeight;
      // buy buttons become wider on the X-axis
      document.querySelectorAll('#buy').forEach(btn => btn.classList.remove('btn-lg'));
      document.querySelectorAll('#buy').forEach(btn => btn.classList.add('btn-block'));
    } else if (window.innerWidth > 767) {
      //make the cart stick to the navbar if scroll to it position
      cart.classList.add('sticky-top');
      // stops cart from sticking to the bottom and pulled it right
      cart.classList.replace('fixed-bottom', 'pull-right');
      // show cart from the collapse class added
      cart.classList.add('show');

      cartBody.style.maxHeight = '400px';
      // buy button become small
      document.querySelectorAll('#buy').forEach(btn => btn.classList.remove('btn-block'));
      document.querySelectorAll('#buy').forEach(btn => btn.classList.add('btn-md'));

    }


    if (window.innerWidth > 768) {
      /***** DRAGGABLE CART DIV******/
      document.querySelectorAll('.bigCartWrapper').forEach((wrapper, index) => {

        wrapper.draggable = true;
        wrapper.id = index + 'index';

        wrapper.addEventListener("dragstart", e => {
          
          if (e.target.className.includes('bigCartWrapper')) {
            e.target.classList.add('animated');
            e.target.classList.add('shake');
            e.dataTransfer.setData('src', e.target.id);
          }

        });

        wrapper.addEventListener('dragend', e => {

          e.target.classList.remove('animated');
          e.target.classList.remove('shake');
          document.getElementById('trash').style.fontSize = '1.5rem';
          document.getElementById('trash').style.opacity = '.5';

        });

      });

      // replacing item position on d cart > cart body
      document.getElementById('cart-body').addEventListener('drop', e => {
        if (e.target.id == 'cart-body') {
          e.preventDefault();
          e.target.appendChild(document.getElementById(e.dataTransfer.getData('src')));
        }
      });
      document.getElementById('cart-body').addEventListener('dragover', e => e.preventDefault());

      // deleting item > Trash Can
      document.getElementById('trash').addEventListener('dragover', e => {
        e.preventDefault();
        e.target.style.fontSize = '25px';
        e.target.style.opacity = '1';

      });

      document.getElementById('trash').addEventListener('drop', e => {
        e.preventDefault();
        $('.tooltip').remove();
        document.getElementById(e.dataTransfer.getData('src')).remove();
        $("#alert").css("right", "10%");
        setTimeout(() => $("#alert").css("right", "-30%"), 3000);
        if (document.getElementById('cart-inner-body').childElementCount == 1) {

          document.getElementById('total-panel').classList.replace('d-block', 'd-none');
          $('#empty-text').show();
          $('#checkout-amount').text('');
        } else if (document.getElementById('cart-inner-body').childElementCount > 1) {
          totalPriceCalc();
        }
        totalPriceCalc();
      });
    }

    // amount and icons element parent on the cart down to > amount element itsef
    document.querySelectorAll('#cart-amount-wrapper .naira').forEach(el => {
      if (el.firstElementChild.id == '1') {

        // disable the minus icon on the cart if user is ordering just ONE item of each food
        el.parentElement.firstElementChild.disabled = true;
        el.parentElement.firstElementChild.classList.replace('text-danger', 'text-secondary');
        if (el.firstElementChild.textContent == 'Free') {
          // $(el).parent().text('');
          el.parentElement.children[2].disabled = true;
          el.parentElement.children[2].classList.replace('text-danger', 'text-secondary');
        }

      }

    });

  }


  cartResponsiveness();

  window.setInterval(cartResponsiveness, 500);

  // price modal minus button monitor
  function foodAmountValidator(callback) {
    let per = document.querySelector('.per'),
      minus = document.querySelector('#priceModal #modal-minus');
    if (parseInt(per.textContent) < 2) {
      minus.disabled = true;
      minus.classList.replace('text-danger', 'text-secondary');
      minus.style.cursor = 'not-allowed';
    } else {
      minus.disabled = false;
      minus.classList.replace('text-secondary', 'text-danger');
      minus.style.cursor = 'pointer';
      callback();
    }
  }
  foodAmountValidator();

  // grab info from BUY button to Price modal
  function displayFoodDetailsOnModal(e) {

    if (e.target.id === 'buy') {

      // get food name, food description and food price from d DOM
      const foodName = e.target.parentElement.parentElement.firstElementChild.firstElementChild.children[1].textContent,
        foodDesc = e.target.parentElement.parentElement.firstElementChild.children[1].textContent,
        foodUrl = e.target.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.src,
        // remove unwanted string from food price
        foodPrice = e.target.parentElement.parentElement.lastElementChild.firstElementChild.innerText.replace(`Buy for ₦`, '');

      document.querySelector('#priceModal .food-amount').setAttribute('id', foodUrl);
      // set price modal amount number to number
      document.querySelector('.per').textContent = e.target.parentElement.parentElement.lastElementChild.firstElementChild.value;
      document.querySelector('.per').textContent = parseInt(document.querySelector('.per').textContent);
      document.querySelector('.per').id = parseInt(e.target.parentElement.parentElement.firstElementChild.firstElementChild.children[1].id);
      // check the minus price modal btn if its less dan 2 so it stays disabled interacting with the plus btn
      foodAmountValidator();

      if (e.target.textContent === 'Free') {

        // setTimeout(() => {
        console.log(e.target.textContent);
        $("#add-to-cart strong").text('Free');
        $('#modal-plus').css('cursor', 'not-allowed');

        document.getElementById('modal-plus').setAttribute('disabled', 'disabled');
        document.getElementById('modal-plus').classList.replace('text-danger', 'text-secondary');
        // }, 1000)
      } else {
        document.getElementById('modal-plus').removeAttribute('disabled');
        document.getElementById('modal-plus').classList.replace('text-secondary', 'text-danger');
        document.querySelector('#priceModal .food-amount').innerHTML = `₦${foodPrice}`;
      }

      // show food name and description on the price modal
      // return (
      document.querySelector('#priceModal #food-name').innerText = foodName;
      document.querySelector('#priceModal #food-desc').innerText = foodDesc;


      // )
    }
  }
  document.getElementById('render-here').addEventListener('click', displayFoodDetailsOnModal);

  // price modal plus and minus
  const priceModalAmount = () => {
    const plus = document.querySelector('#priceModal #modal-plus'),
      minus = document.querySelector('#priceModal #modal-minus');

    let per = document.querySelector('.per');

    function add(e) {

      if (e.target.getAttribute('disabled') == null) {
        per.innerText = parseInt(document.querySelector('.per').innerText) + 1;
        let amount = parseFloat(document.querySelector('#priceModal .food-amount').innerText.replace('₦', ''));
        document.querySelector('#priceModal .food-amount').innerText = `₦${amount + parseInt(document.querySelector('.per').id)}`;
      }
      // enabled the minus button wen clicked
      foodAmountValidator();
      plus.style.cursor = 'pointer';

    }
    plus.addEventListener('click', add);

    function subtract() {
      function minus() {
        per.innerText = parseInt(document.querySelector('.per').innerText) - 1;
        let amount = parseFloat(document.querySelector('#priceModal .food-amount').innerText.replace('₦', ''));
        document.querySelector('#priceModal .food-amount').innerText = `₦${amount - parseInt(document.querySelector('.per').id)}`;

      }

      foodAmountValidator(minus());

    }
    minus.addEventListener('click', subtract);
  };
  priceModalAmount();


  // add food from price modal to cart
  function addToCart(e) {

    const flexDiv = document.createElement('div'),
      bigCartWrapper = document.createElement('div'),
      img = document.createElement('img'),
      foodName = document.createElement('strong'),
      amountWrapper = document.createElement('strong'),
      amount = document.createElement('strong'),
      minus = document.createElement('button');

    let plus = document.createElement('button'),
      naira = document.createElement('span'),
      hr = document.createElement('hr');

    flexDiv.className = 'd-flex justify-content-between align-items-center';
    flexDiv.id = 'cart-wrapper';
    img.width = '100';
    img.height = '90';
    img.alt = '';
    img.id = 'food-img';
    img.className = 'rounded-circle';
    foodName.classList.add('text-truncate');
    foodName.id = 'food-name';

    minus.classList = 'fa fa-minus-circle text-danger border-0 bg-transparent';
    minus.style.cursor = 'pointer';
    minus.id = 'minus';

    naira.classList = 'font-weight-bold text-danger naira';
    naira.innerHTML = '&#8358;';
    naira.id = document.querySelector('.per').id;


    plus.classList = 'fa fa-plus-circle text-danger border-0 bg-transparent';
    plus.style.cursor = 'pointer';
    plus.id = 'plus';

    hr.classList.add('custom-hr');
    amountWrapper.id = 'cart-amount-wrapper';
    $(amountWrapper).append(minus);
    amount.className = 'cartAmount';


    bigCartWrapper.className = 'bigCartWrapper';



    setTimeout(() => $('[data-toggle="tooltip"]').tooltip(), 100);

    if (window.innerWidth > 1024) {
      // setTimeout(() => $('[data-toggle="tooltip"]').tooltip(), 100);
      bigCartWrapper.setAttribute('data-toggle', 'tooltip');
      bigCartWrapper.setAttribute('data-placement', 'top');
      bigCartWrapper.title = 'Drag to Trash Can to dispose';
    } else if (window.innerWidth <= 1024) {

      bigCartWrapper.setAttribute('data-toggle', 'tooltip');
      bigCartWrapper.setAttribute('data-placement', 'top');
      bigCartWrapper.title = 'Swipe Left/Right to dispose';

      $('#trash').on('click', (e) => {
        // setTimeout(() => $('[data-toggle="tooltip"]').tooltip(), 100);

        //   document.getElementById('trash').setAttribute('data-toggle', 'tooltip');
        // document.getElementById('trash').setAttribute('data-placement', 'top');
        // document.getElementById('trash').title = 'Swipe Left/Right to dispose';


        console.log(e.target);
      })

    }

    if (e.target.id == 'add-to-cart') {
      $('#empty-text').hide();
      // show total panel when one or more item is added to the cart
      if (document.getElementById('cart-inner-body').childElementCount >= 1) {
        document.getElementById('total-panel').classList.replace('d-none', 'd-block');
      }
      // get food image url from modal(add to cart button - price element id) > cart image url
      img.src = e.target.parentElement.firstElementChild.firstElementChild.id;
      // get food name from modal > cart food name
      foodName.textContent = e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent;
      // get the numbers of food from modal > cart price id
      amount.id = e.target.parentElement.previousElementSibling.children[1].children[1].textContent;
      // get price from modal > cart price
      amount.innerHTML = e.target.parentElement.firstElementChild.firstElementChild.textContent.replace('₦', '');

      if (isNaN(parseInt(amount.textContent))) {
        naira.innerHTML = '';
        amount.className = 'free';
      }
      naira.appendChild(amount);
      amountWrapper.appendChild(naira);

      amountWrapper.appendChild(plus);

      img.alt = `picture of ${foodName.textContent}`;
      flexDiv.appendChild(img);
      flexDiv.appendChild(foodName);
      flexDiv.appendChild(amountWrapper);

      bigCartWrapper.appendChild(flexDiv);
      bigCartWrapper.appendChild(hr);
      document.getElementById('cart-inner-body').appendChild(bigCartWrapper);



      document.querySelector('#cartCollapse #view-cart-icon').classList = ' fa fa-shopping-basket text-danger animated bounce';
      setTimeout(function () {
        document.querySelector('#cartCollapse #view-cart-icon').classList.remove('bounce');
        document.querySelector('#cartCollapse #view-cart-icon').classList.remove('text-danger');
      }, 1000);


      totalPriceCalc();

    } else if (e.target.classList.contains('food-amount')) {
      $('#empty-text').hide();
      // show total panel when one or more item is added to the cart
      if (document.getElementById('cart-inner-body').childElementCount >= 1) {
        document.getElementById('total-panel').classList.replace('d-none', 'd-block');
      }
      // get food image url from modal(add to cart button - price element id) > cart image url
      img.src = e.target.parentElement.parentElement.firstElementChild.firstElementChild.id;

      // get food name from modal > cart food name
      foodName.textContent = e.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.textContent;

      // get the numbers of food from modal > cart price id
      amount.id = e.target.parentElement.parentElement.previousElementSibling.children[1].children[1].textContent;

      // get price from modal > cart price
      amount.innerHTML = e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent.replace('₦', '');

      if (isNaN(parseInt(amount.textContent))) {
        console.log(isNaN(parseInt(amount.textContent)));
        naira.innerHTML = '';
        amount.className = 'free';
      }
      naira.appendChild(amount);
      amountWrapper.appendChild(naira);

      amountWrapper.appendChild(plus);


      flexDiv.appendChild(img);
      flexDiv.appendChild(foodName);
      flexDiv.appendChild(amountWrapper);

      bigCartWrapper.appendChild(flexDiv);
      bigCartWrapper.appendChild(hr);
      document.getElementById('cart-inner-body').appendChild(bigCartWrapper);


      document.querySelector('#cartCollapse #view-cart-icon').classList = ' fa fa-shopping-basket text-danger animated bounce';
      setTimeout(function () {
        document.querySelector('#cartCollapse #view-cart-icon').classList.remove('bounce');
        document.querySelector('#cartCollapse #view-cart-icon').classList.remove('text-danger');
      }, 1000);


      totalPriceCalc();
    }
    setTimeout(touch, 500);
  }
  document.querySelector('.el').addEventListener('click', addToCart);

  function touch() {
    document.querySelectorAll('.bigCartWrapper').forEach(tag => {
      let start, move, timeb4;

      $(tag).on('touchstart', e => {
        start = Math.round(e.touches[0].pageX);
        tag.style.position = 'relative';
        timeb4 = Math.ceil(e.timeStamp);

      });
      $(tag).on('touchmove', e => {

        move = Math.round(e.touches[0].pageX);
        if (e.timeStamp - timeb4 > 200) {
          tag.style.left = move - start + 'px';

        }
        console.log(Math.ceil(e.timeStamp) - timeb4);
        console.log("move: ", move, "start: ", start, move - start, "timestart: ", timeb4, "timenow: ", e.timeStamp, e.timeStamp - timeb4);
        if (e.timeStamp - timeb4 > 200) {
          if (move - start > 150 || move - start < -150) {

            tag.remove();
            tag.style.display = 'none';

            $('.tooltip').remove();
            $("#alert").css("right", "10%");

            if (document.getElementById('cart-inner-body').childElementCount < 2) {

              document.getElementById('total-panel').classList.replace('d-block', 'd-none');
              $('#empty-text').show();
              $('#checkout-amount').text('');
            } else if (document.getElementById('cart-inner-body').childElementCount != 0) {
              totalPriceCalc();
            }
            totalPriceCalc();
          }
        }
        // console.log(tag);
      });
      $(tag).on('touchend', e => {
        tag.style.left = '0';
        start = 0;
        move = 0;
        timeb4 = 0;
        setTimeout(() => $("#alert").css("right", "-60%"), 3000);

      });


    });
  }

  function cartPricePlus(e) {
    let amount,
      amountEl,
      minAmount;
    try {
      if (e.target.parentElement.children[1].firstElementChild.className == 'cartAmount') {
        amount = parseInt(e.target.parentElement.children[1].firstElementChild.textContent),
          amountEl = e.target.parentElement.children[1].firstElementChild,
          minAmount = parseInt(e.target.parentElement.children[1].firstElementChild.id);
      }
    } catch (err) {
      // console.log(err)
    }

    function plus() {
      if (e.target.id === 'plus') {
        amountEl.textContent = amount + parseInt(e.target.parentElement.children[1].id);
        amountEl.id = minAmount + 1;
        e.target.parentElement.firstElementChild.disabled = false;
        e.target.parentElement.firstElementChild.classList.replace('text-secondary', 'text-danger');

        totalPriceCalc();
      } else {

      }
    }
    plus();

    function minus() {
      if (e.target.id === 'minus') {
        amountEl.textContent = amount - parseInt(e.target.parentElement.children[1].id);
        amountEl.id = minAmount - 1;

        if (parseInt(e.target.parentElement.children[1].firstElementChild.id) < 2) {
          e.target.disabled = true;
          e.target.classList.replace('text-danger', 'text-secondary');

          totalPriceCalc();
        } else {
          e.target.disabled = false;
        }

      }
    }
    minus();

  }
  document.getElementById('cart-inner-body').addEventListener('click', cartPricePlus);

  function totalPriceCalc() {
    try {
      let ar = document.querySelectorAll('.cartAmount'),
        br = [];
      ar.forEach(arr => br.push(parseFloat(arr.textContent)));
      var re = br.reduce((a, b, c) => {
        c = a + b;
        return c;
      });

      $('#total-fee').text(`₦${re}`);

      var total = $('#total-fee').text(),
        delivery = $('#delivery-fee').text(),
        total = parseFloat(total.replace('₦', '')),
        delivery = parseFloat(delivery.replace('₦', ''));
      $('#checkout-amount').text(`₦${total + delivery}`);
      $('#cartCheckout').prop('disabled', false);
    } catch (err) {
      if (err) {
        console.log(err);

        $('#checkout-amount').text('');
        $('#total-fee').text('0');
        $('#cartCheckout').prop('disabled', true);
      }
    }

  }
  let $name = $('#checkOutName'),
    $number = $('#checkOutNumber'),
    $email = $('#checkOutEmail');

  function proceed() {
    if (localStorage.getItem('user') !== null) {

      const $user = JSON.parse(localStorage.getItem('user'));

      $name.val($user.name);
      $email.val($user.email);
      $number.val($user.number);
      document.querySelector('#checkOutBtn').disabled = false;
    } else {
      document.querySelector('#checkOutBtn').disabled = true;
    }
  }
  proceed();

  // form verification
  function verifyForm(name, email, number, submit, callback) {

    function inputChecker(element, condition, el, text, callback) {
      $(el).css('text-shadow', '-1px -1px 7px #aaa');
      $(el).css('box-shadow', '10px 4px 20px 0px rgba(0, 0, 0, 0.2)');

      if (condition) {
        setTimeout(() => {
          element.css('border', '0px solid transparent');
          $(el).text('');

        }, 100);

      } else if (!condition) {
        //  alert(email.val());
        element.css('border', '0px solid transparent');
        $(el).text('Checking...');
        $(el).css('color', 'white');
        setTimeout(() => {
          element.css('border', '1px solid #de2525');
          // submit.prop('disabled', true);
          $(el).text(text);
          $(el).css('color', 'white');


        }, 2000);

      }
      let int;
      if (name.val() && email.val().includes('@') && email.val().includes('.') && number.val() && number.val().length === 11 || number.val().length === 14) {

        submit.prop('disabled', false);
        callback();
        int = setTimeout(() => $(el).text(''), 1500);
        console.log('int: ' + int);
      } else {
        clearTimeout(int);
        submit.prop('disabled', true);

      }
    }

    name.on('keyup', () => {
      inputChecker(name, name.val(), '#NameMsg', 'Please fill out this field');

    });

    email.on('keyup', () => {

      inputChecker(email, email.val().includes('@') && email.val().includes('.'), '#EmailMsg', 'Please use a valid email');
    });
    let v, b;
    number.on('keyup', () => {
      if (!isNaN(Number(number.val()))) {

        inputChecker(number, number.val() && number.val().length === 11 || number.val().length == 14, '#NumberMsg', `Number is incorrect`, function () {
          if (number.val().length == 11) {
            b = number.val();
            console.log('b: ' + b);
          } else if (b == undefined) {
            b = '000000000';
          }

          if (number.val()[0] == '2' && number.val()[1] == '3' && number.val()[2] == '4' && number.val().length == 13) {
            number.val(`+${number.val()}`);
            alert(number.val());

          }
          if (number.val()[0] !== '+' && number.val()[0] !== '2' && number.val()[1] !== '3' && number.val()[2] !== '4' && number.val().length == 14) {

            number.val('+23' + b);
            number.val(number.val().replace(`${number.val()[3]}`, '4'));

            v = number.val();
          }

          if (number.val().length > 14) {
            number.val(v);
            $('#NumberMsg').text(`Number must be less than ${number.val().length}`);
          }


        });
      } else {
        $('#NumberMsg').text(`This field must contain only numbers`);
      }
    });

    if ($('#updateSubmit')) submit.on('click', callback);
  }

  // settings
  function settings() {

    // Updating Info > Form Input Variables
    const $name = $('#updateName'),
      $email = $('#updateEmail'),
      $number = $('#updateNumber'),
      $submit = $('#updateSubmit');

    // Update local storage with Form Inputs if User has signed up earlier
    if (localStorage.getItem('user') !== null) {
      const user = JSON.parse(localStorage.getItem('user'));

      $name.val(user.name);
      $email.val(user.email);
      $number.val(user.number);
      $('#user').text(user.name);
    } else { }
    // Updating local storage with Form Inputs Ends

    // Info Panel variables
    const $info = $('#info'),
      $orders = $('#orders');
    let $infoPanel = $('#infoPanel'),
      $orderPanel = $('#orderPanel');

    // Order List Panel Switching
    $orderPanel.fadeOut(400);
    $orders.on('click', e => {
      if (document.getElementById('orderPanel').style.display == 'none') {
        $infoPanel.fadeToggle('fast', () => $orderPanel.fadeToggle(400));
        $('.active').removeClass('active');
        $(e.target).addClass('active');
      }
    });
    // Order List Panel Switching Ends

    // Updating Info Panel Switching
    $info.on('click', e => {
      if (document.getElementById('infoPanel').style.display == 'none') {
        $orderPanel.fadeToggle('fast', () => $infoPanel.fadeToggle(400));
        $('.active').removeClass('active');
        $(e.target).addClass('active');
      }
    });
    // Updating Info Panel Switching Ends

    // Updating Info > Form Verification
    verifyForm($('#updateName'), $('#updateEmail'), $number, $submit, e => {

      e.preventDefault();

      const details = {
        name: $.trim($name.val()),
        email: $.trim($email.val()),
        number: $.trim($number.val())
      };
      localStorage.setItem('user', JSON.stringify(details));
      setTimeout(() => {
        alert('Updated!');
        $submit.prop('disabled', true);

        if (localStorage.getItem('user') !== null) {
          const user = JSON.parse(localStorage.getItem('user'));

          $('#checkOutName').val(user.name);
          $('#checkOutEmail').val(user.email);
          $('#checkOutNumber').val(user.number);

          $name.val(user.name);
          $email.val(user.email);
          $number.val(user.number);
          $('#user').text(user.name);
        } else { }
      }, 1000);
    });

    // Updating Info > Form Verification Ends

    // Updating Info > Double Checking Form
    $submit.on('click', e => {
      if ($name.val() !== '' && $number.val() !== '' && $email.val() !== '') {

      }
    });
    // Updating Info > Double Checking Form Ends

  }
  settings();


  // Unregister
  function logout() {
    //
    if (localStorage.getItem('user') !== null) {
      $('#login').addClass('d-none');
      $('#settings').removeClass('d-none');
      $('#unregister').removeClass('d-none');
    } else {
      $('#login').removeClass('d-none').addClass('d-block');
    }

    // Unregister with YES SURE! button
    $('#logout').on('click', () => {
      localStorage.removeItem('user');
      document.location.href = '../index.html';
      $('#settings').addClass('d-none');
      $('#unregister').addClass('d-none');

      $('#login').addClass('d-block');
      alert('Unregistered Successfully!');
    });
  }
  logout();

  // Grab cart item and append it to the message box
  $('#cartCheckout').on('click', () => {
    let arr = [],
      result = ' ';
    let nodelist = document.querySelectorAll(`.bigCartWrapper #cart-wrapper`);
    nodelist.forEach(node => {
      let obj = {
        name: node.children[1].textContent,
        price: node.children[2].children[1].firstElementChild.textContent
      };
      arr.push(obj);
    });

    arr.forEach(ar => {
      result += `
      \n\t${ar.name}: ${ar.price}\n`;
    });
    result += `
    Delivery Fee: ${$('#delivery-fee').text()};
    Total Price: ${$('#checkout-amount').text()};
    Location: ${$('#location-name').text()}`;
    console.log(result);
    document.getElementById("checkOutMsg").value = result;
  });


  document.addEventListener('click', e => {
    if (e.target != document.querySelector('nav #user') && e.target != document.querySelector('nav .container') && e.target != document.querySelector('.navbar')) {
      $('.navbar .collapse').collapse('hide');
    }
  });

});