<template>
<div>
  <menu1></menu1>
   <div id="main-content" class="profilepage_1">
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-12">
                            <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i
                                        class="fa fa-arrow-left"></i></a>{{clientName}}</h2>
                            <ul class="breadcrumb">

                            </ul>
                        </div>

                    </div>
                </div>

                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12">
                        <div class="card">
                            <div class="body">
                                <h5>Ongoing Projects </h5>

                                <div class="row clearfix">
                                    <div class="col-lg-3 col-md-6 col-sm-12"  v-for="(item,id) in projectOngoing" v-bind:key="id">
                                        <div class="card border">
                                            <div class="body text-left pro-img">
                                                <img class="mx-auto d-block mb-3" src="../assets/images/projects/01.png"
                                                    alt="">
                                                <h6 class="project-title text-primary mb-3"><a
                                                        href="project-detail.html">{{item.projectName}}</a></h6>
                                                <p>{{item.projectDescription}}</p>
                                                    <div class="project_progress progress progress-xs">
                                                        <div class="progress-bar" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style="width: 48%;"></div>
                                                    </div>
                                                    <small>Completion with: 48%</small>
          <button @click="onprojectdetails(item.projectId)" class="button button1">Project Details</button>


                                            </div>
                                        </div>
                                    </div>
                              </div>


                            </div>
                        </div>

                    </div>

                </div>


                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12">
                        <div class="card">
                            <div class="body">
                                <h5>Completed Projects </h5>

                                <div class="row clearfix">
                                    <div class="col-lg-3 col-md-6 col-sm-12"  v-for="(item,id) in projectCompleted" v-bind:key="id" >
                                        <div class="card border">
                                            <div class="body text-left pro-img">
                                                <img class="mx-auto d-block mb-3" src="../assets/images/projects/01.png"
                                                    alt="">
                                                <h6 class="project-title text-primary mb-3"><a
                                                        href="project-detail.html">{{item.projectName}}</a></h6>
                                                <p><strong>Lorem Ipsum is</strong> simply dummy text of the printing and
                                                    typesetting
                                                    industry.</p>
                                                    <div class="project_progress progress progress-xs">
                                                        <div class="progress-bar" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                    </div>

                                                    <small>Completion with: 100%</small>
          <button @click="onprojectdetails(item.empId)" class="button button1">View Projects</button>


                                            </div>
                                        </div>
                                    </div>


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
import project from '../services/project'
import emp from '../services/employee'
import employee from '../services/employee'
export default {
  data:function(){
    return{
      projectOngoing:[{}],
      projectCompleted:[{}],
      clientName:''
    }
  },
  created(){

    employee.getempbyid(this.$route.params.empId).then(doc=>{
      this.clientName = doc.data[0].empFirstName + " " +  doc.data[0].empLastName
    })

    project.getprojectbyempid(this.$route.params.empId).then(doc=>{
          for(let i=0;i<doc.data.length;i++){
            if(doc.data[i].projectStatus == "inprogress"){
              this.projectOngoing.push(doc.data[i]);
            }
            else if(doc.data[i].projectStatus == "completed"){
              this.projectCompleted.push(doc.data[i]);
            }
          }
    })
    this.projectOngoing.splice(0,1);
    this.projectCompleted.splice(0,1);

  },
  methods:{
    onprojectdetails:function(id){
              this.$router.push({path:'/projectdetails/' + id});
    }
  }
}
</script>

<style scoped>
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 3px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 10px 1px 10px 30px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: white;
  color: black;
  border: 2px solid #4CAF50;
}
.button1:hover {
    background-color: #4CAF50;
    color: white;
  }

</style>
