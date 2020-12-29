/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-cycle */
// import { container } from './app';

export default class API {
  constructor(url) {
    this.url = url;
  }

  getWebSocket() {
    return new WebSocket(this.url);
  }
/*
  load(evt) { // метод для загрузки сообщений
    const data = JSON.parse(evt.data).field[0]; // получаем данные из ответа сервера
    const elem = document.createElement('div');
    elem.setAttribute('class', 'msg');
    if (data.type === 'freekick') {
      elem.innerHTML = `<span>&#10071 &#10071</span><span>${data.msg}</span>`;
    } else if (data.type === 'goal') {
      elem.innerHTML = `<span>&#9917</span><span>${data.msg}</span>`;
    } else {
      elem.innerHTML = `<span></span><p>${data.msg}</p>`;
    }
    container.scrollBy(0, 9999999); // прокручиваем страницу до последнего сообщения
    container.appendChild(elem);
  }
*/
}
