<template>
 <div>
   <menu1></menu1>
           <div id="main-content">
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-12">
                            <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i
                                        class="fa fa-arrow-left"></i></a> Projects List</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="../index.html"><i class="icon-home"></i></a></li>
                                <li class="breadcrumb-item">Projects</li>
                                <li class="breadcrumb-item active">Projects List</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12">
                        <div class="card">
                            <div class="body project_report">
                                <div class="table-responsive">
                                  <button @click="onclickall" class="btn btn-sm btn-outline-success">All projects</button>
                                  <button @click="onclickcompleted" class="btn btn-sm btn-outline-success">Completed projects</button>
                                  <button @click="onclickongoing" class="btn btn-sm btn-outline-success">Ongoing projects</button>
                                    <table class="table table-hover js-basic-example dataTable table-custom m-b-0">
                                            <tr>
                                                <th>Project Name</th>
                                                <th>ClientName</th>
                                                <th>Client Organization</th>
                                                <th>Deadline</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        <tbody>
                                            <tr v-for="(item,id) in  joinarr" v-bind:key="id">
                                                <td class="project-title">
                                                  {{item.projectName}}
                                                </td>
                                                <td>
                                                  {{item.clientFirstName}}
                                                </td>
                                                 <td>
                                                   {{item.clientOrgName}}
                                                </td>

                                                <td>
                                                   {{item.projectDeadline | moment("Do MMMM YYYY")}}
                                                </td>

                                                <td>
                                                  {{item.projectStatus}}
                                                </td>
                                                <td class="project-actions">
                                                    <router-link v-bind:to="'/projectdetails/' + item.projectId" class="btn btn-sm btn-outline-success">View Details</router-link>
                                                    <a @click="ondelete(item.clientId)" href="javascript:void(0);"
                                                        class="btn btn-sm btn-outline-danger"
                                                        title="Delete" data-type="confirm"><i
                                                            class="icon-trash"></i></a>

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
        </div>

    </div>
</template>

<script>
import dashboardclass from '../services/Dashboard'
import projectclass from '../services/project'
export default {
  data:function(){
    return{
      joinarr:[{}],
      clientId:''
    }
  },
  created(){
   if(!this.$route.params.clientid){
   dashboardclass.getAllProject().then(doc=>{
        console.log(doc);
        for(let i=0;i<doc.data.length;i++)
        {

            this.joinarr=doc.data;
            console.log(this.joinarr);
        }
    })
   }
   else{
     projectclass.getprojectbyclientid(this.$route.params.clientid).then(doc=>{
        this.joinarr = doc.data;
     })
   }
  },
  methods:{
      onclickcompleted:function(){
          if(!this.$route.params.clientid){
          projectclass.getprojectBystatus("completed").then(doc=>{
              this.joinarr=doc.data;
          })
          }
          else{
          projectclass.getprojectbyclientidstatus(this.$route.params.clientid,"completed").then(doc=>{
              this.joinarr=doc.data;
          })
        }
      },
      onclickongoing:function(){
      if(!this.$route.params.clientid){
          projectclass.getprojectBystatus("inprogress").then(doc=>{
              this.joinarr=doc.data;
          })
          }
          else{
          projectclass.getprojectbyclientidstatus(this.$route.params.clientid,"inprogress").then(doc=>{
              this.joinarr=doc.data;
          })
        }
      },
      onclickall:function(){
        if(!this.$route.params.clientid){
           dashboardclass.getAllProject().then(doc=>{
            this.joinarr=doc.data;
          })
        }
        else{
          projectclass.getprojectbyclientid(this.$route.params.clientid).then(doc=>{
            this.joinarr = doc.data;
          })
        }
    }
  }
}
</script>

<style scoped>

</style>
