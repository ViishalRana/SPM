<template>
 <div class="theme-orange">
       <div class="page-loader-wrapper">
        <div class="loader">
            <div class="m-t-30"><img src="http://www.wrraptheme.com/templates/lucid/hr/html/assets/images/logo-icon.svg"
                    width="48" height="48" alt="Lucid">
            </div>
            <p>Please wait...</p>
        </div>
       </div>

    <div id="wrapper">

        <nav class="navbar navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-btn">
                    <button type="button" class="btn-toggle-offcanvas"><i class="lnr lnr-menu fa fa-bars"></i></button>
                </div>

                <div class="navbar-brand">
                    <a href="index.html"><img style="height:40px; width:70px;" src="../assets/images/logo.png" alt="Lucid Logo"
                            class="img-responsive logo"></a>
                </div>

                <div class="navbar-right">

                    <div id="navbar-menu">
                        <ul class="nav navbar-nav">
                            <!-- <li class="dropdown">
                                <a href="javascript:void(0);" class="dropdown-toggle icon-menu" data-toggle="dropdown">
                                    <i class="icon-bell"></i>
                                    <span class="notification-dot"></span>
                                </a>
                                <ul class="dropdown-menu notifications animated shake">
                                    <li class="header"><strong>You have 4 new Notifications</strong></li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="media">
                                                <div class="media-left">
                                                    <i class="icon-info text-warning"></i>
                                                </div>
                                                <div class="media-body">
                                                    <p class="text">Campaign <strong>Holiday Sale</strong> is nearly
                                                        reach budget limit.</p>
                                                    <span class="timestamp">10:00 AM Today</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="media">
                                                <div class="media-left">
                                                    <i class="icon-like text-success"></i>
                                                </div>
                                                <div class="media-body">
                                                    <p class="text">Your New Campaign <strong>Holiday Sale</strong> is
                                                        approved.</p>
                                                    <span class="timestamp">11:30 AM Today</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="media">
                                                <div class="media-left">
                                                    <i class="icon-pie-chart text-info"></i>
                                                </div>
                                                <div class="media-body">
                                                    <p class="text">Website visits from Twitter is 27% higher than last
                                                        week.</p>
                                                    <span class="timestamp">04:00 PM Today</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="media">
                                                <div class="media-left">
                                                    <i class="icon-info text-danger"></i>
                                                </div>
                                                <div class="media-body">
                                                    <p class="text">Error on website analytics configurations</p>
                                                    <span class="timestamp">Yesterday</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="footer"><a href="javascript:void(0);" class="more">See all
                                            notifications</a></li>
                                </ul>
                            </li> -->
                            <li><router-link to="/announcement"><button class="btn btn-warning">Make Announcement</button></router-link></li>
                            <li><span class="icon-menu"><router-link to="/"><i class="icon-login"></i></router-link></span></li>
                        </ul>
                    </div>


                </div>
            </div>
        </nav>



        <div id="left-sidebar" class="sidebar">
            <div class="sidebar-scroll">
                <div class="user-account">
                    <router-link to="/profile"><img src="../assets/images/user.png" class="rounded-circle user-photo" alt="User Profile Picture"></router-link>
                    <div class="dropdown">
                        <span>Welcome,</span><br>
                        <strong>Jessica Doe(Project Manager)</strong>
                    </div>

                    <hr>

                </div>

                <!-- Nav tabs -->
                <ul class="nav nav-tabs">
                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#project_menu">Menu</a></li>
                </ul>

                <!-- Tab panes -->

                <div class="tab-content p-l-0 p-r-0">

                    <div class="tab-pane animated fadeIn active" id="project_menu">
                        <nav class="sidebar-nav">
                            <ul class="main-menu metismenu ">
                                <li><router-link to="/dashboard"><i class="icon-speedometer"></i><span
                                            class="active">Dashboard</span></router-link></li>
                                <li>    
                                    <a href="#Projects" class="has-arrow"><i
                                            class="icon-list"></i><span>Projects</span></a>
                                    <ul>
                                        <li><router-link to="/addproject">Add Projects</router-link></li>
                                        <li><router-link to="/projectview">View Projects</router-link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#Clients" class="has-arrow"><i
                                            class="icon-user"></i><span>Clients</span></a>
                                    <ul>
                                        <li><router-link to="/addclient">Add Client</router-link></li>
                                        <li><router-link to="/viewclient">View Client</router-link></li>
                                        <!-- <li><a href="#">View Clients List</a></li> -->
                                    </ul>
                                </li>

                                <li><a href="#Employees" class="has-arrow"><i
                                            class="icon-users"></i><span>Employees</span></a>
                                    <ul>
                                        <li><router-link to="/employeeview">View Employee</router-link></li>
                                    </ul>
                                </li>
                                <!-- <li><a href="#!"><i class="icon-tag"></i>Taskboard</a></li> -->
                               <li><router-link to="/issues"><i class="icon-screen-tablet"></i><span
                                            class="active">Issue</span></router-link></li>
                             </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>
