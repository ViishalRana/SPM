<template>
 <div>
   <menu1></menu1>
           <div id="main-content">
            <div class="container-fluid">
                <div class="block-header">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-12">
                            <h2><a href="javascript:void(0);" class="btn btn-xs btn-link btn-toggle-fullwidth"><i
                                        class="fa fa-arrow-left"></i></a> Announcement List</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="../index.html"><i class="icon-home"></i></a></li>
                                <li class="breadcrumb-item">Announcements</li>
                                <li class="breadcrumb-item active">View Announcement</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12">
                        <div class="card">
                            <div class="body project_report">
                                <div class="table-responsive">
                                    <table class="table table-hover js-basic-example dataTable table-custom m-b-0">
                                            <tr>
                                                <th>Actions</th>
                                                <th>Announcement Title</th>
                                                <th>Announcement Content</th>
                                                <th>Announcement Date</th>
                                                <th>Announcement Time</th>
                                            </tr>
                                        <tbody>
                                            <tr v-for="(item,id) in  ancearr" v-bind:key="id">
                                                <td class="project-actions">
                                                    <router-link v-bind:to="'/updateannouncement/' + item.announcementId" class="btn btn-sm btn-outline-success"><i class="icon-pencil"></i></router-link>
                                                    <a @click="ondelete(item.announcementId)" href="javascript:void(0);"
                                                        class="btn btn-sm btn-outline-danger"
                                                        title="Delete" data-type="confirm"><i
                                                            class="icon-trash"></i></a>
                                                </td>
                                                <td class="project-title">
                                                  <b>{{item.announcementTitle}}</b>
                                                </td>
                                                <td class="project-title">
                                                  {{item.announcementMessage}}
                                                </td>
                                                <td>
                                                  {{item.announcementTime | moment("Do MMMM YYYY")}}
                                                </td>
                                                <td>
                                                  {{item.announcementTime | moment("HH:mm:ss")}}
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
import anceclass from '../services/Announcement'
export default {
  data:function(){
    return{
      ancearr:[{}],
      announcementId:''
    }
  },
  created(){
   
   anceclass.getAllannouncement().then(doc=>{
        console.log(doc);
        for(let i=0;i<doc.data.length;i++)
        {
            this.ancearr=doc.data;
            console.log(this.ancearr);
        }
    })
   },
  methods:{
     ondelete:function(id)
     {
         anceclass.deleteAnnouncement(id).then(doc=>{
             console.log(doc);
             for(let i=0;i<this.ancearr.length;i++){
                if(this.ancearr[i].announcementId == id )
                {
                    this.ancearr.splice(i,1);
                }
      }
         })
     }
  }
}
</script>

<style scoped>

</style>
