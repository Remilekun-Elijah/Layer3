document.addEventListener('DOMContentLoaded',()=>{
  const addToCart = document.createElement('section');
  addToCart.id='priceSelectionModal';
  addToCart.innerHTML = `
  <div class="modal fade" id="priceModal">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content border-0 rounded card el">
      <div class="modal-header">
        <!-- dynamically generating TEXT here -->
        <h3 class="modal-title text-secondary" id="food-name"> <i class="fa fa-cutlery fa-1x"></i></h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="text-danger">&times;</span>
        </button>


      </div>
      <div class="modal-body pt-0">
        <div class="pt-2">
          <!-- dynamically generating TEXT here -->
          <p class="text-muted text-truncate" id="food-desc">
          </p>
        </div>
        <div class="d-flex justify-content-around fa fa-2x my-4">

          <button class="fa fa-minus-circle border-0 bg-transparent text-secondary" id='modal-minus'></button>
          <!-- dynamically generating TEXT here -->
          <span class="per">1</span>
          <i class="fa fa-plus-circle text-danger" id='modal-plus'></i>

        </div>
        
      </div>
      <div class="modal-footer">
        <button id='add-to-cart' type="button" class="btn  btn-outline-secondary" data-dismiss="modal">Add
          to Basket
          <strong id='' class="fa text-danger font-weight-bold food-amount disabled"></strong>
        </button>

      </div>

    </div>
  </div>
</div>
  `;
document.querySelector('body').appendChild(addToCart);
})