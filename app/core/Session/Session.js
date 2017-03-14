class Session {
  constructor() {
    this.userId = window.sessionStorage.userId;
    this.token = window.sessionStorage.token;
  };

  update(userId, token) {
    this.userId = userId;
    this.token = token;
    this.updateStorage();
  };

  destroy(){
    this.userId = undefined;
    this.token = undefined;
    this.deleteStorage();
  }

  deleteStorage(){
    delete window.sessionStorage.userId;
    delete window.sessionStorage.token;
  }

  updateStorage() {
    window.sessionStorage.userId = this.userId;
    window.sessionStorage.token = this.token;
  };
}


let appSeesion = new Session();
module.exports = appSeesion;
