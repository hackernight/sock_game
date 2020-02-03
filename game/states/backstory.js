import BackgroundImage from '../prefabs/backgroundImage'

'use strict';
function Backstory() {}

Backstory.prototype = {
  preload: function () {

  },
  create: function () {

    var background = this.getBackgroundImage();
    console.log("Background image is " + background)
    new BackgroundImage(this.game, background);

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
      this.game.ba.level = this.game.ba.level+1;
      if (this.game.ba.level < 6){
        this.game.state.start('play');
      }
      else{
        this.game.ba.win=true;
        this.game.state.start('gameover');
      }
    }
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
  }
};
module.exports = Backstory;
