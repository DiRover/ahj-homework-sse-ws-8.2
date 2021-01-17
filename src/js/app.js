import API from './api';

const container = document.querySelector('[data-id="container"]');
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.form_button');
const inputForm = document.querySelector('.form_input');
const addForm = document.querySelector('.add_form');
const usersList = document.querySelector('.list');
const chatForm = document.querySelector('.chat_form');
const inputChat = document.querySelector('.chat_input');
const url = 'ws://localhost:7070/ws';
const api = new API(url);
const ws = api.getWebSocket();
let serverResponse;
/*
window.addEventListener('load', () => {
  console.log('page loaded');
  const msg = { type: 'get users' };
  const data = JSON.stringify(msg);
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(data);
  } else {
    // Reconnect
  }
})
*/

modal.addEventListener('submit', (e) => {
  e.preventDefault();
  //console.log(inputForm.value);
  const msg = { type: 'add user', nickname: inputForm.value };
  const data = JSON.stringify(msg);
  addForm.reset();
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(data);
    } else {
    // Reconnect
  }
  
});

inputChat.addEventListener('change', (e)=> {
  //e.preventDefault();
  console.log(e);
})

console.log('ok');



ws.addEventListener('open', () => {
  console.log('connected');
  // After this we can send messages
  const msg = { type: 'get users' };
  const data = JSON.stringify(msg);
  ws.send(data);
});

ws.addEventListener('message', (e) => {
  // handle evt.data
  api.responseHandler(e);
  if (api.type === 'user added') {
    console.log(api.serverResponse);
    modal.classList.add('hidden');
    usersList.innerHTML='';
    api.serverResponse.forEach((user) => {
      const el = document.createElement('tr');
      el.innerHTML = `<td>${user}</td>`;
      usersList.append(el);
    })
  } else if (api.type === 'users list') {
    console.log(api.serverResponse);
    usersList.innerHTML='';
    api.serverResponse.forEach((user) => {
      const el = document.createElement('li');
      el.innerHTML = `${user}`;
      usersList.append(el);
    })
  }
});

ws.addEventListener('close', (e) => {
  console.log('connection closed', e);
  // After this we can't send messages
});

ws.addEventListener('error', () => {
  console.log('error');
});

