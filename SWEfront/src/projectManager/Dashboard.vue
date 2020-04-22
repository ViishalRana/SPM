<template>
<div>
    <menu1></menu1>
        <div id="main-content">
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-12">
                            <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i
                                        class="fa fa-arrow-left"></i></a> Project Dashboard</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                                <li class="breadcrumb-item active">Dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row clearfix">
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card text-center bg-info">
                            <div class="body">
                                <div class="p-15 text-light">
                                    <h3>{{completedProjectCnt}}</h3>
                                    <span>Completed Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card text-center bg-secondary">
                            <div class="body">
                                <div class="p-15 text-light">
                                    <h3>{{OnGoingProjectCnt}}</h3>
                                    <span>Ongoing Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card text-center bg-warning">
                            <div class="body">
                                <div class="p-15 text-light">
                                    <h3>{{clientcnt}}</h3>
                                    <span>Total Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="card text-center bg-dark">
                            <div class="body">
                                <div class="p-15 text-light">
                                    <h3>{{empcnt}}</h3>
                                    <span>Total Employees</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Work report Chart -->
                <div class="row clearfix">
                    <div class="col-lg-9 col-md-8 col-sm-12">
                        <div class="card">
                            <div class="header">
                                <h2>Work Report</h2>
                            </div>
                            <div class="body">
                                <div id="m_area_chart" class="m-b-20" style="height: 250px;"></div>
                            </div>
                        </div>
                    </div>

                    <div class="card text-center col-lg-3 col-md-4">
                        <div class="body">
                            <h5>Developers </h5>
                            <div class="sparkline-pie m-t-20">6,4,8</div>
                            <div class="stats-report m-b-30">
                                <div class="stat-item">
                                    <h5>Web Developers</h5>
                                    <b class="col-black">{{webDev}}</b>
                                </div>
                                <div class="stat-item">
                                    <h5>App Developers</h5>
                                    <b class="col-black">{{appDev}}</b>
                                </div>
                                <div class="stat-item">
                                    <h5>Testers</h5>
                                    <b class="col-black">{{tester}}</b>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12">
                        <div class="card">
                            <div class="header">
                                <h2>Project List</h2>
                            </div>
                            <div class="body">
                                <div class="table-responsive">
                                    <table class="table m-b-0 table-hover">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th>Project Name</th>
                                                <th>Client Name</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Deadline</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item,id) in joinarr" v-bind:key="id">
                                                <td>
                                                    <h6>{{item.projectName}}</h6>
                                                </td>
                                                <td>
                                                    <h6>{{item.clientOrgName}}</h6>
                                                </td>
                                                <td>
                                                    {{item.projectStartDate | moment("Do MMMM YYYY")}}
                                                </td>
                                                <td>{{item.projectEndDate | moment("Do MMMM YYYY")}} </td>
                                                <td>{{item.projectDeadline | moment("Do MMMM YYYY")}}</td>
                                                <td><strong>{{item.projectStatus}}</strong></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import dashboardclass from '../services/Dashboard'

export default {
  data:function(){
    return{
      emailId:'',
      empcnt:'',
      clientcnt:'',
      completedProjectCnt:'',
      OnGoingProjectCnt:'',
      joinarr:[{}],
      webDev:'',
      appDev:'',
      tester:'',
    }
  },
  created(){
    this.emailId = this.$route.params.email;

    dashboardclass.getEmpcount().then(doc=>{
      this.empcnt = doc.data[0].cnt;
    })

    dashboardclass.getClientcount().then(doc=>{
      this.clientcnt = doc.data[0].cnt;
    })

    dashboardclass.getProjectcount("completed").then(doc=>{
      this.completedProjectCnt = doc.data.length;
    })

    dashboardclass.getProjectcount("inprogress").then(doc=>{
      this.OnGoingProjectCnt = doc.data.length;
    })
    dashboardclass.getAllProject().then(doc=>{
        console.log(doc);
        for(let i=0;i<doc.data.length;i++)
        {

            this.joinarr=doc.data;
            console.log(this.joinarr);
        }
    })

    dashboardclass.getEmployeeType("1").then(doc=>{
        this.webDev=doc.data.length;
    })

    dashboardclass.getEmployeeType("4").then(doc=>{
        this.appDev=doc.data.length;
    })


    dashboardclass.getEmployeeType("2").then(doc=>{
        this.tester=doc.data.length;
    })
  }
}
</script>

<style scoped>

</style>
