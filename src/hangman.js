class Hangman {

  constructor(word) {
    this.word = word;
    this.buildHidden();
  }

  buildHidden(word = this.word){
    let hiddenWord = [];
    word.split('').forEach(function() {
      hiddenWord.push('-');
    });
    this.hiddenWordArray = hiddenWord;
    return this.hiddenWordArray;
  }

  guess(letter) {
    let original = this.word.split('');
    let newGuess = this.hiddenWordArray;
    original.forEach(function(originalLetter, originIndex) {
      if (letter == originalLetter) {
        newGuess[originIndex] = originalLetter;
      }
    });
    this.hiddenWordArray = newGuess;
    if (this.hiddenWordArray.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }
}
export { Hangman };
