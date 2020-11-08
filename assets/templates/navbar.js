const navs = document.createElement("nav");
navs.id = 'navigation';

function nav(home, location) {
    if (document.location.href.includes('location')) {
        home = '../index.html';
        location = ''

    } else {
        location = 'location/';
        home = 'index.html'
    };
    navs.innerHTML = `<nav class="navbar navbar-expand-sm bg-danger shadow-lg stickey-top">
                <div class="container">
                    <a href="${home}" class=" navbar-brand" style='text-shadow: 2px 2px 2px #000'> <i class="fa fa-cutlery text-dark" style='font-size: 30px;'></i>
                        <b class="text-white">Layer3</b><b class="text-white">-</b><b class="text-white">Food</b></a>
                    <button class="navbar-toggler py-2 border border-dark" style="border-width: 2px; border-style: double; background: #fff; color: #dc3545;"
                     data-toggle="collapse" data-target="#navbar">
                        <span>Menu</span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item">
                                <a href="${location}moshood.html" class="nav-link">Moshood</a>
                            </li>
                            <li class="nav-item">
                                <a href="${location}landmark.html" class="nav-link">Landmark</a>
                            </li>
                            <li class="nav-item">
                                <a href="${location}jide-oki.html" class="nav-link">Jide Oki</a>
                            </li>
    
                            <li class="nav-item dropdown ml-md-5 ">
                                <a href="#" class="nav-link dropdown-toggle" id="user" data-toggle="dropdown">Guest</a>
                                <div class="dropdown-menu">
                                    <a href="${home}" class="dropdown-item text-danger" id="login"><i class="fa fa-user-plus"></i> Register</a>
                                    <a href="#" class="dropdown-item d-none text-danger" id="settings" data-target="#updateModal" data-toggle="modal"><i class="fa fa-cog"></i> Settings</a>
                                    <a href="#" class="dropdown-item d-none text-danger" id="unregister" data-target="#logoutModal" data-toggle="modal">
                                        <i class="fa fa-user-times"></i> Unregister</a>
                                </div>
                            </li>
    <!--Delete this below line --->
                          <!--  <li class="nav-item dropdown ml-md-5 ">
                                <a href="#" class="nav-link dropdown-toggle" id="user" data-toggle="dropdown">Window</a>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item fa fa-cog text-danger" id="info"> </a>
                                    <a class="dropdown-item fa fa-cog text-danger" id="info"> </a>
                                    <a class="dropdown-item fa fa-cog text-danger" id=""> </a>
                                </div>
                            </li>

                            -->
                        </ul>
                    </div>
                </div>
            </nav>`;

    document.querySelector('body').insertBefore(navs, document.getElementById('logoutModal'));

}
nav();