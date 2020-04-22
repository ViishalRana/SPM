<template>
  <div>
    <menu1></menu1>
         <div id="main-content">
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-12">
                            <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i
                                        class="fa fa-arrow-left"></i></a> Update Client</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="../index.html"><i class="icon-home"></i></a></li>
                                <li class="breadcrumb-item">Clients</li>
                                <li class="breadcrumb-item">View Clients</li>
                                <li class="breadcrumb-item active">Update client</li>
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
                                            <input type="text" class="form-control" placeholder="First Name *" v-model="clientArr.clientFirstName">
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Middle Name"  v-model="clientArr.clientMiddleName">
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name"  v-model="clientArr.clientLastName">
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Email ID *"  v-model="clientArr.clientEmailId">
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Mobile No"  v-model="clientArr.clientContactNo">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Organization"  v-model="clientArr.clientOrgName">
                                        </div>
                                    </div>
                                    <div class="col-md-11 col-sm-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Address"  v-model="clientArr.clientAddress">
                                        </div>
                                    </div>



                                </div>
                                <button type="button" @click="Onupdate" class="btn btn-primary">Update</button>
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
        clientid:'',
        clientArr:{}
      }
    },
    created(){
      this.clientid = this.$route.params.clientid;
      client.getClientById(this.clientid).then(doc=>{
        this.clientArr = doc.data[0];
        console.log(this.clientArr);
      })
    },
    methods:{
      Onupdate:function(){
        client.updateclient(this.clientArr).then(doc=>{
          console.log(doc.data);
          alert("updated");
          this.$router.push("/viewclient");
        })
      }
    }

}
</script>
