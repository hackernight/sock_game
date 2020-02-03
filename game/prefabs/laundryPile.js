const SPRITE_SIZE=128;

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class LaundryPile extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, name) {
      super(game, x, y, name, 0);
      game.physics.enable(this, Phaser.Physics.ARCADE);
      this.frame = 0;
      console.log("Laundry at " + x + ": " + y);
      this.scale.setTo(.1,.1);
      //this.body.immovable=true;
      game.add.existing(this);
      //this.body.velocity.y = MAX_SPEED;
      // Set Anchor to the center of your sprite
      this.anchor.setTo(.5);

}

  //Code ran on each frame of game
  update() {
    if (this.body.velocity.y!=0){
      this.body.velocity.y = this.body.velocity.y/2;
    }
    if (this.body.velocity.x!=0){
      this.body.velocity.x = this.body.velocity.y/2;
    }
  }


}

module.exports = LaundryPile;
