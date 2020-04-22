import http from '../http-common';

class teamclass{

  getteamByprojectID(projectId){
    return http.get("/team/"+projectId);
  }
}

export default new teamclass();
