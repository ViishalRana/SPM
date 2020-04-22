import http from '../http-common'

class empclass{
  getallemp(){
      return http.get("/employee/");
  }
  getempbyid(id){
    return http.get("/employee/" + id)
  }
}

export default new empclass();
