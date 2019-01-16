import { Hangman } from './../src/hangman.js';

describe('Hangman', function() {
  let dinosaur;
  beforeEach(function(){
    dinosaur = new Hangman('dinosaur');
  });

  describe('buildHidden', function() {
    it('should split a word into an array of dashes.', function() {
      expect(dinosaur.buildHidden()).toEqual(["-","-","-","-","-","-","-","-"]);
    });
  });

  describe('guess', function() {
    beforeEach(function(){
      dinosaur = new Hangman('dinosaur');
      console.log(dinosaur.hiddenWordArray.join(''));
    });
    it('should return a true statement if the letter guessed exists in the original word.', function() {
      expect(dinosaur.guess("d")).toEqual(true);
      expect(dinosaur.hiddenWordArray).toEqual(["d","-","-","-","-","-","-","-"]);
    });
    it('should return a false statement if the letter guessed does not exists in the original word.', function() {
      expect(dinosaur.guess("q")).toEqual(false);
      expect(dinosaur.hiddenWordArray).toEqual(["-","-","-","-","-","-","-","-"]);
    });
    it('should return true if you guess a letter twice', function() {
      expect(dinosaur.guess('u')).toEqual(true);
      expect(dinosaur.guess('u')).toEqual(true);//still true
    });
    it('should update the property "guessedLetters" when a letter is guessed.', function() {
      dinosaur.guess('a');
      expect(dinosaur.guessedLetters).toContain('a');
    });
    it('should not update the property "guessedLetters" when a letter is guessed more than once.', function() {
      dinosaur.guess('a');
      expect(dinosaur.guessedLetters).toEqual(['a']);
      dinosaur.guess('b');
      expect(dinosaur.guessedLetters).toEqual(['a','b']);
      dinosaur.guess('a');
      expect(dinosaur.guessedLetters).toEqual(['a','b']);
    });
  });

  describe('checkWin', function() {
    it('should check to see if all letters have been guessed.',function() {
      expect(dinosaur.checkWin()).toEqual(false);
      dinosaur.guess('d');
      dinosaur.guess('i');
      dinosaur.guess('n');
      dinosaur.guess('o');
      dinosaur.guess('s');
      dinosaur.guess('a');
      dinosaur.guess('u');
      dinosaur.guess('r');
      expect(dinosaur.checkWin()).toEqual(true);
    });
  });

});
