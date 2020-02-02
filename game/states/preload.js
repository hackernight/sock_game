
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
    this.game.load.image('blueflower2','../assets/images/socks/blueflower2.png')
    this.game.load.image('lily1','../assets/images/socks/lily1.png')
    this.game.load.image('lily2','../assets/images/socks/lily2.png')
    this.game.load.image('clothespile1','../assets/images/obstacles/clothespile1.png')
    this.game.load.image('clothespile2','../assets/images/obstacles/clothespile2.png')

    this.load.image('stl', 'assets/logos/stl.png');
    this.game.load.spritesheet('studio', 'assets/logos/studio.png', 128, 128);
    this.game.load.spritesheet('kidrobot','assets/images/player/kidrobot.png',256,512)

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
