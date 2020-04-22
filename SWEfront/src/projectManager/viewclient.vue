<template>
  <div>
    <menu1></menu1>
   <div id="main-content">
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-12">
                            <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i
                                        class="fa fa-arrow-left"></i></a> Clients List</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="../index.html"><i class="icon-home"></i></a></li>
                                <li class="breadcrumb-item">Clients</li>
                                <li class="breadcrumb-item active">View Client</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12">
                        <div class="card">
                            <div class="body project_report">
                                <div class="table-responsive">
                                  <input type="text" id="myInput" placeholder="Search for names.." title="Type in a name">
                                    <table class="table table-hover js-basic-example dataTable table-custom m-b-0">
                                            <tr>
                                                <th>ClientFullName</th>
                                                <th>EmailId</th>
                                                <th>ContactNo</th>
                                                <th>Organization</th>
                                                <th>Address</th>
                                            </tr>
                                        <tbody>
                                            <tr v-for="(item,id) in  clientArr" v-bind:key="id">
                                                <td class="project-title">
                                                  {{item.clientFirstName}} {{item.clientMiddleName}} {{item.clientLastName}}
                                                </td>
                                                <td>
                                                  {{item.clientEmailId}}
                                                </td>
                                                 <td>
                                                   {{item.clientContactNo}}
                                                </td>

                                                <td>
                                                   {{item.clientOrgName}}
                                                </td>

                                                <td>
                                                  {{item.clientAddress}}
                                                </td>
                                                <td class="project-actions">
                                                    <router-link v-bind:to="'/updateclient/' + item.clientId" class="btn btn-sm btn-outline-success"><i
                                                            class="icon-pencil"></i></router-link>
                                                    <button @click="ondetails(item.clientId)" class="button button1">View Projects</button>
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
import client from '../services/client'
export default {
  data:function(){
    return{
      clientArr:[{}]
    }
  },
  created(){
    client.getAllClient().then(doc=>{
      this.clientArr = doc.data;
    })
  },
  methods:{
    ondelete:function(id){
      for(let i=0;i<this.clientArr.length;i++){
        if(this.clientArr[i].clientId == id )
        {
          this.clientArr.splice(i,1);

        }
      }
    },
    ondetails:function(id){
       this.$router.push({path:'/projectview/' + id});
    }
  }
}
</script>

<style scoped>
#myInput {
  background-image: url('/css/searchicon.png');
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 30%;
  font-size: 15px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 3px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 2px 1px;
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
