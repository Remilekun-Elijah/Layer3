
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
    setInterval(function () {
      // let e = { e: that._street }
      if (that.name.parentElement.lastElementChild.firstElementChild.classList.contains('fa-check') && that.number.parentElement.lastElementChild.firstElementChild.classList.contains('fa-check') && that.office.parentElement.lastElementChild.firstElementChild.classList.contains('fa-check') && that.street.value !== that.street[0].value) {

        that.form.submit.disabled = false;
        that.form.submit.setAttribute("data-target", "#signingUp")
        console.log('Form is all setted up and ready to submit');
      } else that.form.submit.disabled = true;
    }, 1000);
    return { submit: this.form.addEventListener('submit', e => this.submit(e)) }
  }

  submit(e) {
    console.log('Submitted successfully')
    e.preventDefault();
    ;
    // registering modal text
    setTimeout(() => {
      // $('#text').fadeToggle(1);
      // $('body').removeClass('modal-open')
    }, 1500);
    // success register modal text


    setTimeout(() => {
      $('#text').fadeToggle(1999);
      $('.parent').html( //html
        `
				<p class='animated slideInTop'><i class="fa fa-smile-o text-success fa-3x "></i></p>
				<h3 class="text-success">Successfully Registered! </h3>
			`);
    }, 2000);
    // remove register modal nd form
    // setTimeout(() => {
    //Work here: REmove Modal
    $('#signingUp').fadeToggle(250, () => {
      // $('body').removeClass('modal-open')
      $('.card-form').fadeToggle(2010)

    })

    // }, 4000);
    //   const details = {
    //     name: $name.val(),
    //     email: $email.val(),
    //     number: $number.val()
    //   };
    //   localStorage.setItem('user', JSON.stringify(details));
  }

}
const signup = new Form('#signUp');
// console.log(signup);

signup.verify().submit()


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
      // const imgP = document.querySelector('.img1');
      if (window.innerWidth < 992) {
        // imgP.parentElement.classList.add('mt-5');
      } else {
        // imgP.parentElement.classList.remove('mt-5');
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

  function register() {
    // $('#signUpSubmit').on('click', signUp);
  }
  register();




  // form verification
  function verifyForm(name, email, number, submit, callback) {

    function inputChecker(element, condition, el, text, callback) {
      $(el).css('text-shadow', '-1px -1px 7px #aaa');
      $(el).css('box-shadow', '10px 4px 20px 0px rgba(0, 0, 0, 0.2)');

      if (condition) {
        setTimeout(() => {
          element.css('border', '0px solid transparent');
          $(el).text('');

        }, 2000);

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

      if (name.val() && email.val().includes('@') && email.val().includes('.') && number.val() && number.val().length === 11 || number.val().length === 14) {

        submit.prop('disabled', false);

        callback;
      } else {
        submit.prop('disabled', true);

      }
    }

    name.on('keyup', () => {
      inputChecker(name, name.val(), '#infoPanel #NameMsg', 'Please fill out this field');

    });;

    email.on('keyup', () => {

      inputChecker(email, email.val().includes('@') && email.val().includes('.'), '#infoPanel #EmailMsg', 'Please use a valid email');
    });
    let v, b;
    number.on('keyup', () => {
      if (!isNaN(Number(number.val()))) {

        inputChecker(number, number.val() && number.val().length === 11 || number.val().length == 14, '#infoPanel #NumberMsg', `Number is incorrect`, function () {
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
            $('#infoPanel #NumberMsg').text(`Number must be less than ${number.val().length}`);
          }

        });
      } else {
        $('#infoPanel #NumberMsg').text(`This field must contain only numbers`);
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
    if (e.target != document.querySelector('nav #user') && e.target != document.querySelector('nav .container') && e.target != document.querySelector('.navbar')) {
      // $('.navbar .collapse').collapse('hide');
    }
  });
});