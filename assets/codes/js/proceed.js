document.addEventListener("DOMContentLoaded",()=>{
const proceed = document.createElement('section');
proceed.innerHTML = `
		<!-- checkout -->
		<div class="modal fade h-100 w-100 bg-dark" id="checkoutModal">
			<div class="modal-dialog animated bounceInLeft">
				<div class="modal-content">
					<div class="modal-header">
						<h3 class="card-title">Please select a payment method</h3>
						<button data-dismiss="modal" class="close">
							<span class="text-danger">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<button data-target="#prepaid" data-toggle="collapse" class="btn btn-block ">Prepaid
							<i class="fa fa-question-circle" id='' data-placement='top' data-toggle="tooltip" title="Pay with cash in advance"></i>
						</button>
						<div class="collapse show " id="prepaid">
							<form action="https://formspree.io/remilekunelijah21997@gmail.com" name="prepaid" method="POST" class="text-center">
								<!-- name -->
								<div class="container">
							
									<div class="form-group mt-3">
										<div class="input-group">
											<div class="input-group-prepend mx-auto">
												<div class="input-group-text bg-danger text-white">
													<i class="fa fa-user"></i>
												</div>
												<input type="text" id="checkOutName" style="border-radius:0px !important;" class="form-control text-white bg-dark"
												 name="Name" readonly>
											</div>
										</div>
									</div>

									<!-- email -->
									<div class="form-group mt-3">
										<div class="input-group">
											<div class="input-group-prepend mx-auto">
												<div class="input-group-text bg-danger text-white ">
													<i class="fa fa-envelope" style="border-radius:0px !important"></i>
												</div>
												<input type="email" id="checkOutEmail" class="form-control text-white bg-dark" name="email" style="border-radius:0px !important;"
												 readonly>
											</div>
										</div>
									</div>

									<!-- number -->
									<div class="form-group mt-3 mb-0 pb-0">
										<div class="input-group">
											<div class="input-group-prepend mx-auto">
												<div class="input-group-text bg-danger text-white">
													<i class="fa fa-phone"></i>
												</div>
												<input type="tel" id="checkOutNumber" style="border-radius:0px !important;" class="form-control text-white bg-dark"
												 name="Number" readonly >
											</div>
										</div>
									</div>
									<textarea name="password" type="text" class=" mx-0 px-0 form-control" id="checkOutMsg" style="opacity:0; height: 15px;"></textarea>
									<p class="mt-0 pt-0" id='proceed-info'>Not your info ? <a href='#' class="mb-3 mt-0  pt-0 text-danger" data-dismiss="modal" data-target="#updateModal"
										 data-toggle="modal" id="checkoutUpdateBtn">Update Info</a></p>
									<div class="form-group mt-3">
										<textarea name="message"  class="form-control bg-dark text-white" rows="10" placeholder="Add a message body"></textarea>
									</div>
									<button type="submit" id="checkOutBtn" class="btn btn-danger btn-block">Proceed</button>
								</div>
							</form>
						</div>
					</div>

				</div>
			</div>
		</div>
`;
document.querySelector('body').appendChild(proceed);
});

