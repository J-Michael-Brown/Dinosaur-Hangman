import $ from 'jquery';


class Hangman {

  constructor() {
    let word;
    $.ajax({
      url: 'http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1',
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        word = response[0][0];
      },
      error: function() {
        word = false;
      }
    });

  }

}
export { Hangman };
