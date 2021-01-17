/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-cycle */
// import { container } from './app';

export default class API {
  constructor(url) {
    this.url = url;
    this.serverResponse;
    this.userNickname;
    this.type;
    this.response;
    this.user;
  }


  getWebSocket() {
    return new WebSocket(this.url);
  }

  responseHandler(e) {
    //console.log(e.data);
    this.response = JSON.parse(e.data);
    this.type = this.response.type;
    //console.log(type);
    if (this.type === 'error') {
      this.serverResponse = this.response.text;
      console.log(this.serverResponse);
    } else if (this.type === 'users list') {
      this.serverResponse = this.response.users;
      console.log(this.serverResponse);
    } else if (this.type === 'user added') {
      this.serverResponse = this.response.users;
      console.log(this.serverResponse);
    } else if (this.type ==='message') {
      if (this.response.name === this.userNickname) this.user = true;
      this.serverResponse = this.response;
      console.log(this.serverResponse);
    }
  }

  nicknameValid(e) {
    if (this.type === 'nickname is valid') {
      this.userNickname = this.response.nickname;
      console.log(this.userNickname);
    }
  }

}
