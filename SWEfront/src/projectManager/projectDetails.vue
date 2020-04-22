<template>
  <div>
    <menu1></menu1>
        <div id="main-content" class="profilepage_1">
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-12">
                            <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i
                                        class="fa fa-arrow-left"></i></a> Project Details</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="../index.html"><i class="icon-home"></i></a></li>
                                <li class="breadcrumb-item">Projects</li>
                                <li class="breadcrumb-item active">Project Details</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="row clearfix">
                    <div class="col-lg-4 col-md-12">
                        <div class="card">
                            <div class="body">
                                <h5>{{projectarr.projectName}}</h5>
                                <p>
                                    {{projectarr.projectDescription}}
                                </p>
                                <div class="progress-container progress-info m-b-25">
                                    <span class="progress-badge">Project Status</span>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="60"
                                            aria-valuemin="0" aria-valuemax="100" style="width: 78%;">
                                            <span class="progress-value">78%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="body">
                                <ul class=" list-unstyled basic-list">
                                    <li>Started:<span class="badge-purple badge">{{projectarr.projectStartDate | moment("Do MMMM YYYY")}}</span></li>
                                    <li>Deadline:<span class="badge-dang badge ">{{projectarr.projectDeadline | moment("Do MMMM YYYY")}}</span></li>
                                    <li>Status<span class="badge-info badge">{{projectarr.projectStatus}}</span></li>
                                    <li>Team Size:<span class="badge-danger badge">{{teamarr[0].teamSize}}</span></li>

                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <div class="header">
                                <h2>Team Members</h2>
                            </div>

                            <div class="body">
                                <div class="w_user">
                                    <img class="rounded-circle" v-bind:src="'http://localhost:3000/images/Employees/' + leaderdetail.empProfile" alt="">
                                    <div class="wid-u-info">
                                        <h5>{{leaderdetail.empFirstName}}</h5>
                                        <span>{{leaderdetail.empEmailId}}</span>
                                        <p class="text-muted m-b-0">Team Leader</p>
                                    </div>
                                    <hr>
                                </div>
                                <ul class="right_chat list-unstyled mb-0">
                                    <li class="online" v-for="(item,id) in teamarr" v-bind:key="id">
                                        <a href="javascript:void(0);">
                                            <div class="media">
                                                <img class="media-object " v-bind:src="'http://localhost:3000/images/Employees/' + item.empProfile" alt="">
                                                <div class="media-body">
                                                    <span class="name">{{item.empFirstName}}</span>
                                                    <span class="message">{{item.workAreaType}}</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>


                    </div>
                    <div class="col-lg-8 col-md-12">
                        <div class="card">
                            <div class="header">
                                <h2>Project Announcements</h2>
                            </div>
                            <div class="body">
                                <div class="form-group" style="margin-top: -2em;">
                                    <textarea rows="3" class="form-control no-resize"
                                        placeholder="Type Message Here..."></textarea>
                                </div>
                                <div class="post-toolbar-b">
                                    <button class="btn btn-warning">Make Announcement</button>
                                </div>
                            </div>
                        </div>


                        <div class="card">
                            <div class="body">
                                    <div class="timeline-item danger">
                                    <span class="date">04 Jun 2018</span>
                                    <h6>Project Reports</h6>
                                    <span>By: <a href="javascript:void(0);" title="Fidel Tonn">Fidel Tonn</a></span>
                                    <div class="msg">
                                        <ul class="list-unstyled">
                                            <li class="mb-2">
                                                <span>Design Bug</span>
                                                <div class="progress progress-xs">
                                                    <div class="progress-bar progress-bar-danger" role="progressbar"
                                                        aria-valuenow="17" aria-valuemin="0" aria-valuemax="100"
                                                        style="width: 17%;"></div>
                                                </div>
                                            </li>
                                            <li class="mb-2">
                                                <span>UI UX Design Task</span>
                                                <div class="progress progress-xs">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="83"
                                                        aria-valuemin="0" aria-valuemax="100" style="width: 83%;"></div>
                                                </div>
                                            </li>
                                            <li class="mb-2">
                                                <span>Developer Task</span>
                                                <div class="progress progress-xs">
                                                    <div class="progress-bar progress-bar-success" role="progressbar"
                                                        aria-valuenow="49" aria-valuemin="0" aria-valuemax="100"
                                                        style="width: 49%;"></div>
                                                </div>
                                            </li>
                                            <li class="mb-2">
                                                <span>QA (Quality Assurance)</span>
                                                <div class="progress progress-xs">
                                                    <div class="progress-bar progress-bar-warning" role="progressbar"
                                                        aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"
                                                        style="width: 33%;"></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="timeline-item dark">
                                    <span class="date">05 Jun 2018</span>
                                    <h6>Project on Goinng</h6>
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
import projectclass from '../services/project';
import teamclass from '../services/Team';
export default
{
  data:function(){
    return{
      projectId:'',
      projectDescription:'',
      projectName:'',
      projectDomain:'',
      projectStartDate:'',
      projectEndDate:'',
      projectDeadline:'',
      projectStatus:'',
      projectarr:{},
      teamarr:[{}],
      leaderdetail:{},
    }
  },
  created(){
    this.projectId=this.$route.params.projectId;
    console .log(this.projectId)
    projectclass.getprojectByID(this.projectId).then(doc=>{
        this.projectarr=doc.data[0];
    })

    teamclass.getteamByprojectID(this.projectId).then(doc=>{
        console.log(doc.data)
        for(let i=0;i<doc.data.length;i++)
        {

            if(doc.data[i].leaderId==doc.data[i].empId)
            {
                this.leaderdetail=doc.data[i];
                console.log(this.leaderdetail);
            }
            else
            {
                this.teamarr=doc.data;

                console.log(this.teamarr);
            }
        }

    })
  }
}
</script>

<style scoped>
.highlight {
            background-color: #f8f9fa;
            padding: 20px;
        }

        .highlight pre code {
            font-size: inherit;
            color: #212529;
        }

        .nt {
            color: #2f6f9f;
        }

        .na {
            color: #4f9fcf;
        }

        .s {
            color: #d44950;
        }

        pre.prettyprint {
            background-color: #eee;
            border: 0px;
            margin: 0;
            padding: 20px;
            text-align: left;
        }

        .atv,
        .str {
            color: #05AE0E;
        }

        .tag,
        .pln,
        .kwd {
            color: #3472F7;
        }

        .atn {
            color: #2C93FF;
        }

        .pln {
            color: #333;
        }

        .com {
            color: #999;
        }
</style>
