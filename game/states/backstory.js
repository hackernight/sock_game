import BackgroundImage from '../prefabs/backgroundImage'

'use strict';
function Backstory() {}

Backstory.prototype = {
  preload: function () {

  },
  create: function () {
    if (this.game.ba.numberOfSocksMatched == this.game.ba.numberOfSocksThisLevel){
      this.game.ba.level = this.game.ba.level+1;
    }

    var background = this.getBackgroundImage();
    console.log("Background image is " + background)
    new BackgroundImage(this.game, background, .75);

    this.game.levelMusic = this.game.add.audio(this.getBackgroundMusic());
    this.game.levelMusic.volume = this.getBackgroundMusicVolume();

    this.game.levelMusic.play()
    /*var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.titleText = this.game.add.text(this.game.world.centerX,100, 'Backstory', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', { font: '32px Arial', fill: '#ffffff', align: 'center'});
    this.congratsText.anchor.setTo(0.5, 0.5);

    this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionText.anchor.setTo(0.5, 0.5);*/
  },
  update: function () {
    if(this.game.input.activePointer.justPressed()) {

      this.game.ba.numberOfSocksMatched = 0;
      this.game.ba.numberOfSocksThisLevel = this.socksToMatchForLevel(this.game.ba.level);

      if (this.game.ba.level < 5){
        this.game.state.start('play');
        this.game.levelMusic.stop();
      }
      else{
        this.game.ba.win=true;
        this.game.state.start('gameover');
      }
    }
  },
  socksToMatchForLevel: function(level){
    if (level ==5){
      return 4;
    }
    return level;
    /*if (level==1 || level ==2){
      return 1;
    }
    if (level ==3){
      return 2;
    }
    if (level ==4){
      return 3;
    }
    if (level==5){
      return 4;
    }*/
  },
  getBackgroundImage: function(){
    if (this.game.ba.level == 1){
      return 'backstory1';
    }
    if (this.game.ba.level == 2){
      return 'backstory2';
    }
    if (this.game.ba.level == 3){
      return 'backstory3';
    }
    if (this.game.ba.level == 4){
      return 'backstory4';
    }
    if (this.game.ba.level == 5){
      return 'victory1';
    }
  },
  getBackgroundMusic: function(){
    if (this.game.ba.level == 1){
      return 'backstory1-music';
    }
    if (this.game.ba.level == 2){
      return 'backstory2-music';
    }
    if (this.game.ba.level == 3){
      return 'backstory3-music';
    }
    if (this.game.ba.level == 4){
      return 'backstory4-music';
    }
    if (this.game.ba.level == 5){
      return 'gameover-win-music';
    }
  },
  //rebalancing is for chumps
  getBackgroundMusicVolume: function(){
    if (this.game.ba.level == 1){
      return 0.25; //deafening...
    }
    if (this.game.ba.level == 2){
      return .25;
    }
    if (this.game.ba.level == 3){
      return .25;
    }
    if (this.game.ba.level == 4){
      return .25;
    }
    if (this.game.ba.level == 5){
      return .25;
    }
  }
};
module.exports = Backstory;
