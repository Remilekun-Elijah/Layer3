class Form {
  constructor(formName) {
    this._formName = formName;
    this._form = document.querySelector(this._formName);
    this._name = this._form.name;
    this._number = this._form.number;
    this._street = this._form.street;
    this._office = this._form.office;
  }
  get form() {
    return this._form;
  }
  get name() {
    if (this._name) return document.querySelector(this._formName).name;
    else return 'Please insert a name'
  }
  get number() {
    if (this._number) return document.querySelector(this._formName).number;
    else return 'Please insert a number'
  }
  get street() {
    if (this._street) return document.querySelector(this._formName).street;
    else return 'Please select a street'
  }
  get office() {
    if (this._office) return document.querySelector(this._formName).office;
    else return 'Please insert an office address'
  }

  verify() {

    const check = function (e, con) {
      const checkTag = e.target.parentElement.lastElementChild.firstElementChild;
      e.target.parentElement.lastElementChild.style.visibility = 'visible';
      if (con) {
        checkTag.classList.replace('bold', 'fa-check');
        checkTag.classList.replace('pl-2', 'pl-1')
        checkTag.innerText = '';
        console.log(e.target.value, con);
      } else {
        checkTag.classList.replace('fa-check', 'bold')
        checkTag.classList.replace('pl-1', 'pl-2')
        checkTag.innerText = 'X';
      }
    }

    this.name.addEventListener('keyup', e => check(e, e.target.value.length >= 2));
    this.number.addEventListener('keyup', e => check(e, e.target.value.length == 11 || e.target.value.length == 14));
    this.office.addEventListener('keyup', e => check(e, e.target.value.length > 3));
    this.street.addEventListener('change', e => console.log(e.target.value, e.returnValue));
    const that = this;
    try {
      setInterval(function () {
        // let e = { e: that._street }
        if (that.name.parentElement.lastElementChild.firstElementChild.classList.contains('fa-check') && that.number.parentElement.lastElementChild.firstElementChild.classList.contains('fa-check') && that.office.parentElement.lastElementChild.firstElementChild.classList.contains('fa-check') && that.street.value !== that.street[0].value) {

          that.form.submit.disabled = false;
          that.form.submit.setAttribute("data-target", "#signingUp")
          console.log('Form is all setted up and ready to submit');

        } else that.form.submit.disabled = true;
      }, 1000);

    }
    catch (e) {
      alert(e)
    }
    finally {
      return { submit: this.form.addEventListener('submit', e => { this.submit(e); }) }
    }
  }

  submit(e) {
    console.log('Submitted successfully')
    e.preventDefault();

    // success register modal text
    setTimeout(() => {
      $('#text').fadeToggle(500, () => {
        $('.parent').html( //html
          `
				<p class='animated slideInTop'><i class="fa fa-smile-o text-success fa-3x "></i></p>
				<h3 class="text-success">Successfully Registered! </h3>
			`);
      });
      // remove a padding-right: 15px added by registered modal
      $('body').css('padding-right', '0px');
      $('.card-form').fadeToggle(500, () => {
        // toggle the customers statement at the header
        $('.img1').removeClass('d-none');
        $('.img1').addClass('d-block');
        $('.img1').fadeTo(500, 1);
        //  remove the register form after fading allowing customers review card to make use of the ROW div(class)
        $('#regform').addClass('d-none');
        fetch('../../../assets/templates/locations.js').then(res => res.text()).then(data => $('main').html(data))
        // Work Here 
        // transition(); // user.js:91 Uncaught ReferenceError: transition is not defined
      })
    }, 2000);
    // remove register modal
    setTimeout(() => {
      // remove the registered message plus the dark overlay
      $('.show').remove();
      // make scroll available after removing modal overlay
      $('body').removeClass('modal-open');
    }, 4000)
  }

}
const signup = new Form('#signUp');
signup.verify().submit()

alert('000000');
document.addEventListener('DOMContentLoaded', function () {
  const imgP = document.querySelector('.img1');

  if (window.innerWidth < 992) {
    imgP.parentElement.classList.add('mt-5');

  } else {
    imgP.parentElement.classList.remove('mt-5');
  }
  let i = 0;

  if (localStorage.getItem('user') !== null) {
    document.querySelector('.card-form').remove();
    document.querySelector('.img1').style.opacity = 1;
    document.querySelector('.img1').classList.replace('d-none', 'd-block');
    transition();
  }

  function transition() {
    setInterval(() => {
      i++;
      // console.log(i);
      const imgP = document.querySelector('.img1');
      if (window.innerWidth < 992) {
        imgP.parentElement.classList.add('mt-5 mb-5');
      } else {
        imgP.parentElement.classList.remove('mt-5');
      }
      imageChanger(i);
    }, 4000);
  }

  // work on here
  function imageChanger(iterator) {
    if (iterator == 1) {
      document.querySelector('.img1').classList.remove('d-block');
      $('.img1').fadeOut(400, function () {
        document.querySelector('.img2').classList.replace('d-none', 'd-block');
        $('.img2').fadeTo(400, 1);
      });

    } else if (iterator == 2) {

      document.querySelector('.img2').classList.remove('d-block');
      $('.img2').fadeOut(400, () => {

        document.querySelector('.img3').classList.replace('d-none', 'd-block');
        $('.img3').fadeTo(400, 1);
      });
    } else if (iterator == 3) {
      document.querySelector('.img3').classList.remove('d-block');
      $('.img3').fadeOut(400, () => {

        document.querySelector('.img4').classList.replace('d-none', 'd-block');
        $('.img4').fadeTo(400, 1);
      });

    } else if (iterator == 4) {
      $('.img4').removeClass('d-block');
      $('.img4').fadeOut(400, () => {

        $('.img1').addClass('d-block');
        $('.img1').fadeTo(400, 1);

        $('.img2').addClass('d-none');
        $('.img2').css('opacity', '0');
      });
      i = 0;

    }
  }


  $('#settings').on('click', e => {
    e.preventDefault();
  });

  function hide() {
    // remove form after registeration
    $('.card-form').fadeToggle(299);
    // remove modal-open from body element after registeration
    $('body').removeClass('modal-open');
    // fade out the main modal after registeration
    $('.show').fadeOut(300, () => {
      $('.img1').removeClass('d-none');
      $('.img1').addClass('d-block');
      $('.img1').fadeTo(500, 1);
      setTimeout(() => document.location.reload(), 100);
    });

    transition();
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
        alert('hello')
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
      document.location.href = 'index.html';
      $('#settings').addClass('d-none');
      $('#unregister').addClass('d-none');

      $('#login').addClass('d-block');
      alert('Unregistered Successfully!');
    });
  }
  logout();


  document.addEventListener('click', e => {
    if (e.target != document.querySelector('.nav') && e.target != document.querySelector('nav .container') && e.target != document.querySelector('.navbar')) {
      $('.navbar .collapse').collapse('hide');
      console.log(1)
    }
  });
});