const SPRITE_SIZE=128;

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class LostSock extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, name, socknum, scale) {
      super(game, x, y, name, 0);
      this.sockNum = socknum;
      game.physics.enable(this, Phaser.Physics.ARCADE);
      this.scale.setTo(scale,scale);
      var rotationangle = game.rnd.integerInRange(-180, 180);
      this.angle = rotationangle;
      this.frame = 0;
      game.add.existing(this);
      //this.body.velocity.y = MAX_SPEED;
      // Set Anchor to the center of your sprite
      this.anchor.setTo(.5);

}

sockNumber(){
  return this.sockNum;
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
