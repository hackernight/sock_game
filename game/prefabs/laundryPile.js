const SPRITE_SIZE=128;

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class LaundryPile extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, name) {
    if (x+y < 300){
      //don't be in the very top left
      x =x+128;
      y=y+128;
    }

      super(game, x, y, name, 0);
      game.physics.enable(this, Phaser.Physics.ARCADE);
      this.frame = 0;
      console.log("Laundry at " + x + ": " + y);
      var scale = game.rnd.integerInRange(10, 25);
      this.scale.setTo(scale/100,scale/100);
      var rotationangle = game.rnd.integerInRange(-180, 180);
      this.angle = rotationangle;
      //this.body.immovable=true;
      game.add.existing(this);
      //this.body.velocity.y = MAX_SPEED;
      // Set Anchor to the center of your sprite
      this.anchor.setTo(.5);
      this.body.setSize(this.body.width * .9, this.body.height * .9, 10, 10);
      this.body.angle = rotationangle;

}

  //Code ran on each frame of game
  update() {

    if (this.body.velocity.y != 0){
      this.body.velocity.y -= this.body.velocity.y * .1;
    }
    if (this.body.velocity.x != 0){
      this.body.velocity.x -= this.body.velocity.x * .1;
    }

    /*if (this.body.velocity.y!=0){
      this.body.velocity.y = this.body.velocity.y/2;
    }
    if (this.body.velocity.x!=0){
      this.body.velocity.x = this.body.velocity.y/2;
    }*/
  }


}

module.exports = LaundryPile;
