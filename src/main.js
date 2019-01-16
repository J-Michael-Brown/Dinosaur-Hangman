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
      console.log('use API');
      let hangman = new Hangman(response[0][0].toLowerCase());
      showGame(hangman);
      $('#game-area').show();
      runGame(hangman);
    },
    error: function() {
      $('#error-message').text('There was a problem proccessing your API.');
    }
  });
  function showGame(hangman) {
    $('#guess-word-letters').empty();
    hangman.hiddenWordArray.forEach(function(letter) {
      $('#guess-word-letters').append(`<li class="letter">${letter}</li>`);
    });
    $('#guessed-letters').empty();
    hangman.guessedLetters.sort().forEach(function(letter) {
      $('#guessed-letters').append(`<li class="letter">${letter}</li>`);
    });
    if(hangman.checkWin()) {
      console.log('a winner is you!');
      $('#wiki-link').html(`<a href="https://en.wikipedia.org/wiki/${hangman.word}">${hangman.word}</a>`);
    }
  }

  function runGame(hangman) {
    $('#player-input').keyup(function(event) {
      event.preventDefault();
      const playerGuess = $('#player-input').val();
      const correct = hangman.guess(playerGuess);
      showGame(hangman);
      if (correct) {
        console.log(`${playerGuess} is correct!`);
      } else {
        console.log(`${playerGuess} is incorrect!`);
      }
      $('#player-input').val('');
    }).change();
  }
});
