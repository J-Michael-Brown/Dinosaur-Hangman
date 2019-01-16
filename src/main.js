import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hangman } from './hangman.js';

$(document).ready(function() {
  let word;
  $("body").onLoad(function() {
    $.ajax({
      url: 'http://dinoipsum.herokuapp.com/api/',
      type: 'GET',
      data: {
        format: 'json',
        paragraphs: '1',
        words: '1'
      },
      success: function(response) {
        word = response[0][0];
        runGame(word);
      },
      error: function() {
        $('#error-message').text('There was a problem proccessing your API.');
      }
    });
  });

  function runGame(word) {
    let hangman = new Hangman(word);
    debugger;
  }
});
