// document.addEventListener("DOMContentLoaded",()=>{
  const settings = document.createElement('section');
  settings.id = 'settings';
  settings.innerHTML = `  
  <div class="modal fade" id="logoutModal">
			<div class="modal-dialog modal-dialog-centerd animated swing">
				<div class="modal-content">
					<div class="modal-body text-center">
						<h3>Are you sure ?</h3>
					</div>
					<div class="modal-footer">
						<button data-dismiss='modal' class="btn pull-left">Not yet</button>
						<button class="btn btn-danger pull-right" id='logout' data-dismiss="modal">Yes sure!</button>
					</div>
				</div>
			</div>
    </div>

  <div class="modal fade h-100 w-100" id="updateModal">
			<div class="modal-dialog animated bounceInUp">
				<div class="modal-content">
					<div class="modal-header bg-danger">
						<h4 class="modal-title text-white">Profile</h4>
						<button data-dismiss="modal" class="fa close text-white font-weight-bold">
							&times;
						</button>
					</div>
					<div class="modal-body ">
						<div class=" card">
							<div class="card-header">
								<ul class="nav nav-tabs card-header-tabs">
									<li class="nav-item">
										<a href="#" class="nav-link active text-danger" style="color:#dc3545 !important" id="info"> Your info</a>
									</li>
									<li class="nav-item">
										<a href="#" id="orders" class="nav-link text-danger" style="color:#dc3545 !important">Orders</a>
									</li>
								</ul>
							</div>
							<div class="mb-4 mx-3">
								<!-- info start -->
								<div class="card-body bg-danger text-center mt-4" id="infoPanel">
									<h3 class="text-white"><i class="fa fa-user fa-2x "></i> </h3>
									<p class="text-white"> Update your information</p>
									<form>
										<!-- Name -->
										<div class="form-group">
											<input type="text" placeholder="Name" id='updateName' class="form-control form-control-lg" required>
											<p id="NameMsg"></p>
										</div>
										<!-- Email -->
										<div class="form-group">
											<input type="email" placeholder="Email Address" id='updateEmail' class="form-control form-control-lg"
											 required>
											<p id="EmailMsg"></p>
										</div>
										<!-- Number -->
										<div class="form-group">
											<input type="tel" placeholder="Phone Number" class="form-control form-control-lg" id='updateNumber' required>
											<p id="NumberMsg"></p>
										</div>

										<input type="submit" class="btn btn-block btn-outline-light form-control" value="Update" id='updateSubmit'
										 data-target="#" data-toggle="modal" data-backdrop="static" disabled>
									</form>
								</div>
								<!-- info Ends -->

								<!-- orders start -->
								<div class="card-body  mt-1" id="orderPanel">
									<div class="container">
										<h4 class="text-dark"> Your Orders (3)</h4>
										<hr>
										<ol class="mb-4">
											<li>Order <a href='#' class="text-warning font-weight-bold ">32156</a></li>
											<li>Order <a href="#" class="text-warning font-weight-bold ">33267</a></li>
											<li>Order <a href="#" class="text-warning font-weight-bold ">34145</a></li>
										</ol>
										<p class="text-muted">Coming Soon...</p>
									</div>

								</div>
								<!-- orders Ends -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  `;

  document.querySelector('body').insertBefore(settings, document.querySelector("#mobile-header"))
// })