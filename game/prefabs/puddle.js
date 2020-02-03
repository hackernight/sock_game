const SPRITE_SIZE=128;

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Puddle extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, name) {
    if (x+y < 300){
      //don't be in the very top left
      x =x+128;
      y=y+128;
    }
      super(game, x, y, 'puddle', 0);
      game.physics.enable(this, Phaser.Physics.ARCADE);
      this.frame = 0;
      var scale = game.rnd.integerInRange(10, 25);
      this.scale.setTo(scale/100,scale/100);
      this.angle = game.rnd.integerInRange(-5, 5);
      this.body.immovable=true;
      game.add.existing(this);
      //this.body.velocity.y = MAX_SPEED;
      // Set Anchor to the center of your sprite
      this.anchor.setTo(.5);
      this.body.setSize(this.body.width * .9, this.body.height * .9, 10, 10);

}



}

module.exports = Puddle;
