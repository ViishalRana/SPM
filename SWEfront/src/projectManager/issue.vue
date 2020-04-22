<template>
  <div>
    <menu1></menu1>
    <div id="main-content" class="taskboard">
        <div class="container-fluid">
            <div class="block-header">
                <div class="row">
                    <div class="col-lg-6 col-md-8 col-sm-12">
                        <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i class="fa fa-arrow-left"></i></a> Issues</h2>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                            <li class="breadcrumb-item">Dashboard</li>
                            <li class="breadcrumb-item active">Issues</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row clearfix">
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <div class="body text-center">
                            <div class="sparkline-pie">5,3,2</div>
                            <h3 class="m-b-0 m-t-10">2078</h3>
                            <span >Total Tickets</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <div class="body text-center">
                            <input type="text" class="knob2" value="50" data-width="90" data-height="90" data-thickness="0.15"  data-fgColor="#00ca70">
                            <h3 class="m-b-0 m-t-10">1278</h3>
                            <span>Resolve</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <div class="body text-center">
                            <input type="text" class="knob2" value="30" data-width="90" data-height="90" data-thickness="0.15"  data-fgColor="#4b78b8">
                            <h3 class="m-b-0 m-t-10">521</h3>
                            <span>Pending</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="card">
                        <div class="body text-center">
                            <input type="text" class="knob2" value="20" data-width="90" data-height="90" data-thickness="0.15"  data-fgColor="#ffbf00">
                            <h3 class="m-b-0 m-t-10">978</h3>
                            <span>Responded</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2>Support & Ticket List</h2>
                            <ul class="header-dropdown">
                                <li><a class="tab_btn" href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Weekly">W</a></li>
                                <li><a class="tab_btn" href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Monthly">M</a></li>
                                <li><a class="tab_btn active" href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="Yearly">Y</a></li>
                                <li class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul class="dropdown-menu dropdown-menu-right animated bounceIn">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another Action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="body">
                            <div class="table-responsive">
                                <table class="table table-hover js-basic-example dataTable table-custom m-b-0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Assign By</th>
                                            <th>Assign to</th>
                                            <th>Email</th>
                                            <th>Subjects</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>231</td>
                                            <td>Airi Satou</td>
                                            <td>Angelica Ramos</td>
                                            <td>airi@example.com</td>
                                            <td>New Code Update</td>
                                            <td><span class="badge badge-default">Pending</span></td>
                                            <td>24-04-2018</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                                <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>235</td>
                                            <td>Brenden Wagner</td>
                                            <td>Ashton Cox</td>
                                            <td>airi@example.com</td>
                                            <td>New Code Update</td>
                                            <td><span class="badge badge-success">Complete</span></td>
                                            <td>24-04-2018</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                                <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>236</td>
                                            <td>Bradley Greer</td>
                                            <td>Cara Stevens</td>
                                            <td>airi@example.com</td>
                                            <td>New Code Update</td>
                                            <td><span class="badge badge-success">Complete</span></td>
                                            <td>24-04-2018</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                                <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>245</td>
                                            <td>Cara Stevens</td>
                                            <td>Airi Satou</td>
                                            <td>airi@example.com</td>
                                            <td>New Code Update</td>
                                            <td><span class="badge badge-default">Pending</span></td>
                                            <td>24-04-2018</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                                <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>248</td>
                                            <td>Airi Satou</td>
                                            <td>Angelica Ramos</td>
                                            <td>airi@example.com</td>
                                            <td>New Code Update</td>
                                            <td><span class="badge badge-success">Complete</span></td>
                                            <td>24-04-2018</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                                <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>250</td>
                                            <td>Jenette Caldwell</td>
                                            <td>Hermione Butler</td>
                                            <td>airi@example.com</td>
                                            <td>New Code Update</td>
                                            <td><span class="badge badge-warning">New</span></td>
                                            <td>24-04-2018</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                                <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>260</td>
                                            <td>Paul Byrd</td>
                                            <td>Michael Bruce</td>
                                            <td>airi@example.com</td>
                                            <td>New Code Update</td>
                                            <td><span class="badge badge-warning">New</span></td>
                                            <td>24-04-2018</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                                <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>261</td>
                                            <td>Lael Greer</td>
                                            <td>Martena Mccray</td>
                                            <td>airi@example.com</td>
                                            <td>New Code Update</td>
                                            <td><span class="badge badge-warning">New</span></td>
                                            <td>24-04-2018</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                                <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>262</td>
                                            <td>Airi Satou</td>
                                            <td>Angelica Ramos</td>
                                            <td>airi@example.com</td>
                                            <td>New Code Update</td>
                                            <td><span class="badge badge-warning">New</span></td>
                                            <td>24-04-2018</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                                <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>278</td>
                                            <td>Airi Satou</td>
                                            <td>Angelica Ramos</td>
                                            <td>airi@example.com</td>
                                            <td>New Code Update</td>
                                            <td><span class="badge badge-default">Pending</span></td>
                                            <td>24-04-2018</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                                <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>278</td>
                                            <td>Airi Satou</td>
                                            <td>Angelica Ramos</td>
                                            <td>airi@example.com</td>
                                            <td>New Code Update</td>
                                            <td><span class="badge badge-default">Pending</span></td>
                                            <td>24-04-2018</td>
                                            <td>
                                                <button type="button" class="btn btn-sm btn-outline-secondary" title="Edit"><i class="fa fa-edit"></i></button>
                                                <button type="button" class="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i class="fa fa-trash-o"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!-- Add New Task -->
<div class="modal fade" id="addcontact" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="title" id="defaultModalLabel">Add New Task</h6>
            </div>
            <div class="modal-body">
                <div class="row clearfix">
                    <div class="col-12">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Task no.">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Job title">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <textarea class="form-control" placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div class="col-12">
                        <select class="form-control show-tick m-b-10">
                            <option>Select Team</option>
                            <option>John Smith</option>
                            <option>Hossein Shams</option>
                            <option>Maryam Amiri</option>
                            <option>Tim Hank</option>
                            <option>Gary Camara</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <label>Range</label>
                        <div class="input-daterange input-group" data-provide="datepicker">
                            <input type="text" class="form-control" name="start">
                            <span class="input-group-addon"> to </span>
                            <input type="text" class="form-control" name="end">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Add</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">CLOSE</button>
            </div>
        </div>
    </div>
</div>
   </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.taskboard1
{
    margin-left:100px;
}
</style>
