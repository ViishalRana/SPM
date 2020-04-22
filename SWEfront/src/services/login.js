import http from '../http-common';

class loginclass{
  getEmpByEmailPassword(emailid,password){
    return http.get("/employee/" + emailid + "/" + password);
  }
  getpassword(emailid){
    return http.get("/getpassword/" + emailid);
  }
  sendmail(item){
    return http.post("/sendmail",item);
  }
}

export default new loginclass();
