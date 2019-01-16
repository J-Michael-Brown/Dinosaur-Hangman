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
  });

});
