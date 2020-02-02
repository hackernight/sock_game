
'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('kidrobot', 'assets/images/player/kidrobot.png');

    //this.load.image('blueflower1', 'assets/blueflower1.png');
    this.game.load.image('blueflower1','../assets/images/socks/blueflower1.png')

    this.load.image('stl', 'assets/logos/stl.png');
    this.game.load.spritesheet('studio', 'assets/logos/studio.png', 128, 128);
    this.game.load.spritesheet('kidrobot','assets/images/player/kidrobot.png',256,512,4)
  
    this.load.audio('horn', ['assets/sound/Bike_Horn.wav']);

  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('splashscreen');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;
