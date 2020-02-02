const SPRITE_SIZE=128;

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class UnpairedSock extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, name) {
      super(game, x, y, name, 0);
      this.scale.setTo(.25,.25);
      this.frame = 0;
      game.add.existing(this);
      //this.body.velocity.y = MAX_SPEED;
      // Set Anchor to the center of your sprite
      this.anchor.setTo(.5);

}

//Unpaired socks will wiggle a little
  update() {
    this.angle = 30 + Math.sin(this.game.time.time * 1/500) * 5
  }


}

module.exports = UnpairedSock;
