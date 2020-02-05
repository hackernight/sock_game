
import BackgroundImage from '../prefabs/backgroundImage'
const LostSock = require('../prefabs/lostSock');
'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {

    new BackgroundImage(this.game, 'floor', 1.75);

    this.makeSomeSocks();
    this.makeSomeSocks();
    this.makeSomeSocks();


    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'kidrobot');
    this.sprite.anchor.setTo(0.5, 0.5);

    this.titleText = this.game.add.text(this.game.world.centerX, 300, 'Rocky Socky Roboty', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    //this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Match the socks and leave the dryer!', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    //this.instructionsText.anchor.setTo(0.5, 0.5);

    this.levelMusic = this.game.add.audio('menu-music')
    this.levelMusic.loopFull(0.15)

    this.sprite.angle = -20;
    this.game.add.tween(this.sprite).to({angle: 20}, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
  },
  makeSomeSocks: function(){
    for (let i =1; i<5; i++){
      var lostSock = new LostSock(this.game, this.game.rnd.integerInRange(1, this.game.width),
                            this.game.rnd.integerInRange(1, this.game.height),
                            this.game.ba.sockImageName(i) + "2", 1, .5);
      var lostSock2 = new LostSock(this.game, this.game.rnd.integerInRange(1, this.game.width),
                            this.game.rnd.integerInRange(1, this.game.height),
                            this.game.ba.sockImageName(i) + "1", 1, .5);
    }
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('backstory');
    }
  }
};

module.exports = Menu;
