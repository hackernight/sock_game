const SPRITE_SIZE=128;

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class LostSock extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, name) {
      super(game, x, y, name, 0);
      game.physics.enable(this, Phaser.Physics.ARCADE);
      this.scale.setTo(.10,.10);
      this.frame = 0;
      game.add.existing(this);
      //this.body.velocity.y = MAX_SPEED;
      // Set Anchor to the center of your sprite
      this.anchor.setTo(.5);

}

  //Code ran on each frame of game
  /*update() {
    if (this.body.y < this.eggLane){
      this.body.velocity.y += 10;
    }
    else {
      this.body.velocity.y = 0;
      this.body.y = this.eggLane;
    }
  }*/


}

module.exports = LostSock;
