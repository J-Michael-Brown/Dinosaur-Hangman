import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hangman } from './hangman.js';

$(document).ready(function() {
  $.ajax({
    url: 'http://dinoipsum.herokuapp.com/api/',
    type: 'GET',
    data: {
      format: 'json',
      paragraphs: '1',
      words: '1'
    },
    success: function(response) {
      console.log(response[0][0]);
    },
    error: function() {
      console.log('api call failed.');
    }
  });
  // let hangman = new Hangman();
  // if (hangman.word){
  // } else {
  //   // $('#error-message').text('');
  // }
  //   if ((event.target.readyState === 'interactive') || (event.target.readyState === 'ready')) {
  //     loadGame();
  //     setInterval(() => {
  //       hangman.timer--;
  //       document.getElementById('timer').innerHTML = hangman.timer;}, 1000);
  //   }
  //
  //   function loadGame() {
  //     buildUI();
  //   }
  // });
  //
  // var xhr = $.get("http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1");
  // xhr.done(function(data) { console.log("success got data", data);
});
