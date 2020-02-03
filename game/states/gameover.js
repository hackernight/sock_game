import BackgroundImage from '../prefabs/backgroundImage'
'use strict';
function GameOver() {}

GameOver.prototype = {
  preload: function () {

  },
  create: function () {

    var backgroundImage;
    if (this.game.ba.lose==true){
      backgroundImage = "";
    }
    if (this.game.ba.win==true){
      backgroundImage = "victory2"
    }
    new BackgroundImage(this.game, backgroundImage);
    //reset variables, either condition
    this.game.ba.level=1;
    this.game.ba.win = false;
    this.game.ba.lose = false;
  },
  update: function () {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('menu');
    }
  }
};
module.exports = GameOver;
