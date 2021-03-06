
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
    this.game.load.image('blueflower1','assets/images/socks/blueflower1.png')
    this.game.load.image('blueflower2','assets/images/socks/blueflower2.png')
    this.game.load.image('lily1','assets/images/socks/lily1.png')
    this.game.load.image('lily2','assets/images/socks/lily2.png')
    this.game.load.image('parasols1','assets/images/socks/parasols1.png')
    this.game.load.image('parasols2','assets/images/socks/parasols2.png')
    this.game.load.image('purple1','assets/images/socks/purple1.png')
    this.game.load.image('purple2','assets/images/socks/purple2.png')
    this.game.load.image('clothespile1','assets/images/obstacles/clothespile1.png')
    this.game.load.image('clothespile2','assets/images/obstacles/clothespile2.png')


    this.game.load.image('shockedrobot','assets/images/player/shockedRobot.png')

    this.game.load.image('backstory1','assets/images/cutscenes/backstory1_happyfamily.png')
    this.game.load.image('backstory2','assets/images/cutscenes/backstory2_newshoes.png')
    this.game.load.image('backstory3','assets/images/cutscenes/backstory3_inringdefeat.png')
    this.game.load.image('backstory4','assets/images/cutscenes/backstory4_missingSock.png')
    this.game.load.image('victory1','assets/images/cutscenes/victory.png')
    this.game.load.image('victory2','assets/images/cutscenes/victory2.png')


    this.game.load.image('floor','assets/images/environment/floor2.png')

    this.game.load.image('puddle','assets/images/obstacles/puddle1.png')
    this.load.image('stl', 'assets/logos/stl.png');
    this.game.load.spritesheet('studio', 'assets/logos/studio.png', 128, 128);
    this.game.load.spritesheet('kidrobot','assets/images/player/kidrobot.png',256,340)


    this.game.load.image('exit','assets/images/environment/exit.png')

    this.load.audio('horn', ['assets/sound/Bike_Horn.wav']);

    this.game.load.audio('level-1-music', ['assets/sound/lvl1_music_system_sock.wav']);
    this.game.load.audio('menu-music', ['assets/sound/menu music.wav']);
    //this.game.load.audio('death-music', ['assets/sound/Death_Music.wav']);
    this.game.load.audio('gameover-lose-music', ['assets/sound/Sad_game_over.wav']);
    this.game.load.audio('gameover-win-music', ['assets/sound/VIctory_Theme.wav']);

    this.game.load.audio('backstory1-music', ['assets/sound/Happy_Intro.wav']);
    this.game.load.audio('backstory2-music', ['assets/sound/Happy_Intro_Update.wav']);
    //while it is funnier if the saddest backstory is that his mom can't find a sock, it makes more sense this way
    this.game.load.audio('backstory4-music', ['assets/sound/Sad_intro.wav']);
    this.game.load.audio('backstory3-music', ['assets/sound/Other_music.wav']);

    this.game.load.audio('item-get-music', ['assets/sound/Item_get.wav']);
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
