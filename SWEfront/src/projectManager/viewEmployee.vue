<template>
<div>
  <menu1></menu1>
        <div id="main-content">
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-12">
                            <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i
                                        class="fa fa-arrow-left"></i></a> Employee</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html"><i class="icon-home"></i></a></li>
                                <li class="breadcrumb-item active">Employee / View Employee</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div class="row clearfix">
                    <div class="tab-content" id="option-tabContent">
                        <div class="tab-pane fade show active" id="pills-option1" role="tabpanel"
                            aria-labelledby="pills-option1-tab">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-sm-12"  v-for="(item,id) in empArr" v-bind:key="id">
                                    <div class="card">
                                        <div class="body text-center">
                                            <div class="team-lead">
                                                <img class="rounded-circle img-thumbnail mx-auto d-block mb-2"
                                                 style="height:150px; width:120px;"   v-bind:src="'http://localhost:3000/images/Employees/' + item.empProfile" alt="">
                                                <h6 class="project-title text-primary mb-2 font-15">{{item.empFirstName}} {{item.empMiddleName}} {{item.empLastName}}
                                                </h6>
                                                <p class="font-13">{{item.workAreaType}}</p>
                                             <div class="mb-3 team-language">
                                                <span class="badge badge-default">Java</span>
                                                <span class="badge badge-default">HTML/CSS</span>
                                                <span class="badge badge-default">C#</span>
                                                <span class="badge badge-default">Swift</span>
                                            </div>
                                            <p class="font-13">{{item.empEmailId}}</p>
                                            </div>
                                            <p class="pt-0 mb-0 font-16"><small><a> {{item.empContactNo}} </a> </small></p>
                                            <p class="pt-0 mb-0 font-16">
                                            <button @click="onprojectdetails(item.empId)" class="button button1">View Projects</button>
                                            </p>
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
                </div>

            </div>
        </div>

    </div>

</template>

<script>
import emp from '../services/employee'
export default {
  data:function(){
    return{
      empArr:[{}]
    }
  },
  created(){
    emp.getallemp().then(doc=>{
        this.empArr = doc.data;
    })
  },
  methods:{
    onprojectdetails:function(id){
        this.$router.push({path:'/empprojectdetails/' + id});
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
  margin: 10px 1px;
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
