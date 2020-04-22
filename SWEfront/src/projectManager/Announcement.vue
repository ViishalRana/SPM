<template>
<div>
  <menu1></menu1>
        <div id="main-content">
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-12">
                            <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i
                                        class="fa fa-arrow-left"></i></a> Add Announcement</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="../index.html"><i class="icon-home"></i></a></li>
                                <li class="breadcrumb-item">Announcement</li>
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
                                        <button @click="onclickview" class="btn btn-sm btn-outline-success"><b>VIEW All ANNOUNCEMENTS</b></button><br><br>
                                        <div class="form-group">    
                                            <textarea cols="100" rows="3"  placeholder="Announcement Title" v-model="ann.announcementTitle"></textarea>
                                        </div>
                                        <div class="form-group">    
                                            <textarea cols="100" rows="10"  placeholder="Write Your Announcements Here !!! *" v-model="ann.announcementMessage"></textarea>
                                        </div>
                                    </div>  
                                </div>
                                <button type="button" @click="onaddannouncement" class="btn btn-primary">POST ANNOUNCEMENT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </div>

</template>

<script>
import anceclass from '../services/Announcement'
export default {
  data:function(){
    return{
      ann:{
        announcementTitle:"",
        announcementMessage:"",
      }
    }
  },
  methods:{
    onaddannouncement:function(){
      anceclass.addannouncement(this.ann).then(doc=>{
          alert("Announcement Successfully Posted");
          console.log(doc.data);
          this.client = '';
        }).catch(err=>{
          alert("Something problem");
        })
    },
    onclickview:function(){
        this.$router.push({path:'/announcementview/'});
    }
  }
}
</script>

<style scoped>

</style>
