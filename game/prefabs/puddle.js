const SPRITE_SIZE=128;

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Puddle extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, name) {
      super(game, x, y, 'puddle', 0);
      game.physics.enable(this, Phaser.Physics.ARCADE);
      this.frame = 0;
      this.scale.setTo(.1,.1);
      this.body.immovable=true;
      game.add.existing(this);
      //this.body.velocity.y = MAX_SPEED;
      // Set Anchor to the center of your sprite
      this.anchor.setTo(.5);

}



}

module.exports = Puddle;
