/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-cycle */
// import { container } from './app';

export default class API {
  constructor(url) {
    this.url = url;
    this.serverResponse;
    this.type;
  }

  getWebSocket() {
    return new WebSocket(this.url);
  }

  responseHandler(e) {
    //console.log(e.data);
    const response = JSON.parse(e.data);
    this.type = response.type;
    //console.log(type);
    if (this.type === 'error') {
      this.serverResponse = response.text;
      console.log(this.serverResponse);
    } else if (this.type === 'users list') {
      this.serverResponse = response.users;
      console.log(this.serverResponse);
    } else if (this.type === 'user added') {
      this.serverResponse = response.users;
      console.log(this.serverResponse);
    }
  }
}
