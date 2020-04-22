import http from '../http-common';

class projectclass{

  getprojectByID(projectId){
    return http.get("/projectbyid/"+projectId);
  }
  getprojectBystatus(status){
      return http.get("/project1/"+status);
  }
  getprojectbyclientid(clientid){
    return http.get("/projectbyclientid/" + clientid);
  }
  getprojectbyclientidstatus(clientid,status){
    return http.get("/projectbyclientid/" + clientid + "/" + status);
  }
  getprojectbyempid(empid,status){
    return http.get("/projectbyempid/" + empid);
  }
}

export default new projectclass();
