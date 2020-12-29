import API from './api';

const container = document.querySelector('[data-id="container"]');
const modal = document.querySelector('.modal');
console.log(modal);




console.log('ok');

const url = 'ws://localhost:7070/ws';
const api = new API(url);

const ws = api.getWebSocket();

ws.addEventListener('open', () => {
  console.log('connected');
  // After this we can send messages
  ws.send('hello!');
});

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
