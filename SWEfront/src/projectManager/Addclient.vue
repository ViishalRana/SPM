<template>
<div>
  <menu1></menu1>
        <div id="main-content">
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-12">
                            <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i
                                        class="fa fa-arrow-left"></i></a> Add Clients</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="../index.html"><i class="icon-home"></i></a></li>
                                <li class="breadcrumb-item">Clients</li>
                                <li class="breadcrumb-item active">Add</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="row clearfix">
                    <div class="col-12">
                        <div class="card">
                            <div class="body">
                                <div class="row clearfix">
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name *" v-model="client.clientFirstName">
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Middle Name" v-model="client.clientMiddleName">
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name" v-model="client.clientLastName">
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Email ID *" v-model="client.clientEmailId">
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Mobile No" v-model="client.clientContactNo">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Organization" v-model="client.clientOrgName">
                                        </div>
                                    </div>
                                    <div class="col-md-11 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Address" v-model="client.clientAddress">
                                        </div>
                                    </div>



                                </div>
                                <button type="button" @click="onaddclient" class="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </div>

</template>

<script>
import clientclass from '../services/client'
export default {
  data:function(){
    return{
      client:{
        clientFirstName:"",
        clientMiddleName:"",
        clientLastName:"",
        clientEmailId:"",
        clientContactNo:"",
        clientOrgName:"",
        clientAddress:""
      }
    }
  },
  methods:{
    onaddclient:function(){
      clientclass.addclient(this.client).then(doc=>{
          alert("client added");
          console.log(doc.data);
          this.client = '';
        }).catch(err=>{
          alert("Something problem");

        })
    }
  }
}
</script>

<style scoped>

</style>
