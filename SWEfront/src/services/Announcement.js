import http from '../http-common'

class anceclass{
  addannouncement(data){
    console.log(data);
    return http.post("/announcement/",data);
  }
  updateannouncement(item){
    return http.put("/announcement/",item);
  }
  getAllannouncement(){
    return http.get("/announcement/");
  }
  getannouncementbyid(id){
    return http.get("/announcement/"+id);
  }
  deleteAnnouncement(id)
  {
      return http.delete("/announcement/"+id);
  }
}

export default new anceclass();
