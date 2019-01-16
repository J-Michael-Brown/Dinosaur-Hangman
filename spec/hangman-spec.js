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
    it('should return a true statement if the letter guessed in the array is true.', function() {
      expect(dinosaur.guess("q")).toEqual(false);
      expect(dinosaur.hiddenWordArray).toEqual(["-","-","-","-","-","-","-","-"]);
      expect(dinosaur.guess("d")).toEqual(true);
      expect(dinosaur.hiddenWordArray).toEqual(["d","-","-","-","-","-","-","-"]);
    });
  });

});
