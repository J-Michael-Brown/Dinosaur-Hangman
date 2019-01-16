import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hangman } from './hangman.js';

let hangman = new Hangman();

document.addEventListener('readystatechange', event => {
  if ((event.target.readyState === 'interactive') || (event.target.readyState === 'ready')) {
    loadGame();
    setInterval(() => {
      hangman.timer--;
      document.getElementById('timer').innerHTML = hangman.timer;}, 1000);
  }

  function loadGame() {
    buildUI();
  }
});

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
xhr.done(function(data) { console.log("success got data", data); });
