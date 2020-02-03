
const SPRITE_SIZE= 128;
const MAX_VELOCITY = 250;
const ACCELERATION = 25;

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class RockyRobot extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame) {
      //y = y - (SPRITE_SIZE / 2)
      //y = y + 300
      super(game, x, y, 'kidrobot', frame);


      console.log("Beep Boop I am Bot")
      game.physics.enable(this, Phaser.Physics.ARCADE);
      this.frame = 0;
      this.scale.setTo(.25,.25);
      game.add.existing(this);
      // Set Anchor to the center of your sprite
      this.anchor.setTo(.5);
      this.body.setSize(120, 300, 45, 10);
      this.facing = 'left';
//dino-chuck-roar
      //this.wallCollisionSound = this.game.add.audio('wall-bump')
      //this.wallCollisionSound.volume = .7
      //this.sockGetSound = this.game.add.audio('sock-get')
      //this.sockGetSound.volume = 1


      //this.animations.add('walk', [0,1,2,3,4,5,6,7], 10, false);
      //this.animations.add('throw', [8,9,10,11,12,13,14,15], 20, false);

      //this.facing = 'right';
      // Invert scale.x to flip left/right
      this.scale.x *= -1;
  }

  playWallCollisionSound(){
    //if(!this.wallCollisionSound.isPlaying){
    //  this.wallCollisionSound.play()
    //}
  }

  playSockGetSound(){
    //if(!this.sockGetSound.isPlaying){
    //  this.sockGetSound.play()
    //}
  }
  //Code ran on each frame of game
  update() {
    this.bringToTop()

    if (this.movingLeft())
    {

      //if (this.animations.currentAnim.name !="run" || this.animations.currentAnim.isPlaying==false){
      //  this.animations.play("run");
      //}

      if (this.facing == 'right'){
        // Invert scale.x to flip left/right
        this.scale.x *= -1;
        this.facing = 'left';
      }
      this.body.velocity.x -= ACCELERATION
      this.body.velocity.x = Math.max(this.body.velocity.x, -MAX_VELOCITY)
    }
    if (this.movingRight())
    {
      // if(!this.walkingSound.isPlaying){
      //   this.walkingSound.play()
      // }
      //
      //if (this.animations.currentAnim.name !="run" || this.animations.currentAnim.isPlaying==false){
      //  this.animations.play("run");
      //}
      if (this.facing == 'left'){
        // Invert scale.x to flip left/right
        this.scale.x *= -1;
        this.facing = 'right';
      }

      this.body.velocity.x += ACCELERATION
      this.body.velocity.x = Math.min(this.body.velocity.x, MAX_VELOCITY)
    }
    if (this.movingUp())
    {
          this.body.velocity.y -= ACCELERATION
          this.body.velocity.y = Math.max(this.body.velocity.y, -MAX_VELOCITY)
    }
    if (this.movingDown())
    {
          this.body.velocity.y += ACCELERATION
          this.body.velocity.y = Math.min(this.body.velocity.y, MAX_VELOCITY)
    }
    if (!this.movingDown() && !this.movingUp()){
      //lose vertical velocity
      if (this.body.velocity.y > 0) {
        this.body.velocity.y -= ACCELERATION
      } else if (this.body.velocity.y < 0) {
        this.body.velocity.y += ACCELERATION
      }
    }
    if (!this.movingRight() && !this.movingLeft()){
      //lose horizontal velocity
          if (this.body.velocity.x > 0) {
            this.body.velocity.x -= ACCELERATION
          } else if (this.body.velocity.x < 0) {
            this.body.velocity.x += ACCELERATION
          }
    }

    /*if (this.left < 0 || this.right > this.game.width + this.width) {
      this.body.velocity.x = 0
    }
    if (this.top < 0 || this.bottom > this.game.width + this.width) {
      this.body.velocity.y = 0
    }*/
  }

movingUp(){
  return (this.game.input.keyboard.isDown(Phaser.Keyboard.UP) || this.game.input.keyboard.isDown(Phaser.Keyboard.W));
}
movingDown(){
  return (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN) || this.game.input.keyboard.isDown(Phaser.Keyboard.S));
}
movingRight(){
  return(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) || this.game.input.keyboard.isDown(Phaser.Keyboard.D));
}
movingLeft(){
  return(this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) || this.game.input.keyboard.isDown(Phaser.Keyboard.A));
}

}

module.exports = RockyRobot;
