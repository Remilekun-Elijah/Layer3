document.addEventListener('DOMContentLoaded',()=>{
let tag = document.createElement('section');

tag.innerHTML = `
<div class="bg-white shadow-lg border-top border-danger border-sm px-2 py-2 text-secondary " style="border-top-width: 5px !important; width: 200px;" id="alert">
<p class="fa fa-pull-left">
   <b class="fa fa-remove" id="remove-alert"></b> 
</p>
<p class="fa fa-pull-right font-weight-bold">   Deleted Successfully </p>
</div>
`;

document.querySelector('body').appendChild(tag, document.querySelector('#navigation'));

$("#remove-alert").on('click', e=>{
  $("#alert").css("right","-30%");

  if(window.innerWidth <= 768){
    $("#alert").css("right","-60%");
  }
  console.log(e.target.parentElement.parentElement)
});

})