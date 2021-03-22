const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.classList.add('mb-0');
(function(location){
  if(document.location.href.includes('location')) location='';
  else location = 'location/';

  footer.innerHTML = `
  
		<section class="bg-danger pt-3 mt-5 text-center clearfix footer mb-0 pb-0">
    <div class="container ">
      <div class="row bottom">
        <div class="col-sm-6 mb-3">
          <h3 class="text-white">
            <i class="fa fa-link"></i> Quick Links
          </h3>
          <hr style="width:170px; " class="pb-3">
          <div class="">
            <p class="pl-3">
              <a class='white-text' href="${location}moshood">Moshood</a>
            </p>
            <p class="pl-3">
              <a class="white-text" href="${location}landmark">Landmark</a>
            </p>
            <p class=" pl-3">
              <a class="white-text" href="${location}jide-oki">Jide Oki</a>
            </p>
            <p class=" pl-3">
              <a class="white-text" href="${location}law-school">Law School</a>
            </p>
          </div>
        </div>

        <div class="col-sm-6">
          <h3 class="text-white pb-0">
            <i class="fa fa-address-book"></i> Contact
          </h3>
          <hr style="width:170px; " class="pb-3">
          <div>
            <p class="pl-3 white-text">
              <i class="fa fa-address-card"></i><a class="white-text" href="https://www.google.com/maps/@6.430388,3.439322,3a,75y,225.62h,69.35t/data=!3m6!1e1!3m4!1syZulQ7NLcadXsIxCYHrHKA!2e0!7i13312!8i6656?hl=en">
                No <sup>106</sup> Ajose Adeogun VI, Lagos NG</a>
            </p>
            <p class=" white-text">
              <i class="fa fa-envelope-o mb-4"></i> <a class='white-text' href="mailto:remilekunelijah21997@gmail.com">Remilekunelijah21997@gmail.com</a>
            </p>

            <p class="phone white-text">
              <i class="fa fa-phone col-lg-offset-2"></i> +2348119690228
            </p>
          </div>
        </div>
      </div>

      <div class="container mt-5 pb-2">
        <p class="white-text"> Coded with <i class="fa fa-html5"></i> and <i class="fa fa-coffee"></i>
          by <a style="text-decoration: underline; color: white; font-weight: bolder;" href="http://github.com/Remilekun-Elijah"
           class="text-center">Remilekun Elijah.</a></p>
      </div>

    </div>
  </section>

  <div class="container-fluid social shadow-lg text-danger" style="font-size: 30px; margin-bottom:0px;">

    <a href="http://facebook.com/remilekun.jnr" class="  text-danger"><i class="fa fa-facebook-square "></i></a>
    <a href="http://twitter.com/RemilekunElijah" class=" text-danger "><i class="fa fa-twitter-square "></i></a>
    <a href="http://instagram.com/Remilekun_Elijah_jnr" class="  text-danger"><i class="fa fa-instagram "></i></a>
    <a href="http://linkedin.com/in/Remilekun-Elijah" class="  text-danger"><i class="fa fa-linkedin-square "></i></a>
    <a href="http://github.com/Remilekun-Elijah" class="  text-danger"><i class="fa fa-github-square"></i></a>
    <a href="http://pinterest.com/remilekune/" class=" text-danger "><i class="fa fa-pinterest-square "></i></a>
    <a href="https://plus.google.com/108341172364313337187" class="  text-danger"><i class="fa fa-google-plus-square "></i></a>
    <a href="mailto:remilekunelijah21997@gmail.com" class="  text-danger"><i class="fa fa-envelope "></i></a>
  </div>

  <footer class="shadow-lg bg-danger text-white my-auto align-items-center" style=" font-size: 17px; padding-top:5px; padding-bottom:0px; height:40px;">
    <p class="text-white text-center mb-0 py-0">&copy; 2018 - 2020 All rights reserved </p>
  </footer>
  `;


  document.querySelector('body').appendChild(footer);
})();