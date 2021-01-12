import API from './api';

const container = document.querySelector('[data-id="container"]');
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.form_button');
const inputForm = document.querySelector('.form_input');
const addForm = document.querySelector('.add_form');
const url = 'ws://localhost:7070/ws';
const api = new API(url);
const ws = api.getWebSocket();

modal.addEventListener('submit', (e) => {
  e.preventDefault();
  //console.log(inputForm.value);
  const msg = { type: 'nickname', nickname: inputForm.value };
  const data = JSON.stringify(msg)
  console.log(msg)
  addForm.reset();
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(data);
    } else {
    // Reconnect
    }
  
});



console.log('ok');



/*
ws.addEventListener('open', () => {
  console.log('connected');
  // After this we can send messages
  ws.send('hello!');
});
*/
ws.addEventListener('message', (evt) => {
  // handle evt.data
  console.log(evt.data);
  
});

ws.addEventListener('close', (evt) => {
  console.log('connection closed', evt);
  // After this we can't send messages
});

ws.addEventListener('error', () => {
  console.log('error');
});

