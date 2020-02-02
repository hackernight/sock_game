
const SPRITE_SIZE= 128;
const MAX_VELOCITY = 250;
const ACCELERATION = 25;

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class RockyRobot extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, y, frame) {
      //y = y - (SPRITE_SIZE / 2)
      //y = y + 300
      super(game, SPRITE_SIZE, y, 'rocky', frame);

      this.scale.setTo(2,2)
      console.log("Beep Boop I am Bot")
      game.physics.enable(this, Phaser.Physics.ARCADE);
      this.frame = 0;
      game.add.existing(this);
      // Set Anchor to the center of your sprite
      this.anchor.setTo(.5);

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
    //if (this.animations.currentAnim.name =="throw" && this.animations.currentAnim.isPlaying==true){
      //this.body.velocity.x = 0;
      //console.log('current anim: ', this.animations.currentAnim.name, ', isplaying = ', this.animations.currentAnim.isPlaying)
      //return;
    // } else {
    //   this.digging.stop()
    }
    /*if (this.game.global.input.player.one.left.isDown)
    {

      if (this.animations.currentAnim.name !="run" || this.animations.currentAnim.isPlaying==false){
        this.animations.play("run");
      }

      if (this.facing == 'right'){
        // Invert scale.x to flip left/right
        this.scale.x *= -1;
        this.facing = 'left';
      }
      this.body.velocity.x -= ACCELERATION
      this.body.velocity.x = Math.max(this.body.velocity.x, -MAX_VELOCITY)
    }
    else if (this.game.global.input.player.one.right.isDown)
    {
      // if(!this.walkingSound.isPlaying){
      //   this.walkingSound.play()
      // }
      //
      if (this.animations.currentAnim.name !="run" || this.animations.currentAnim.isPlaying==false){
        this.animations.play("run");
      }
      if (this.facing == 'left'){
        // Invert scale.x to flip left/right
        this.scale.x *= -1;
        this.facing = 'right';
      }

      this.body.velocity.x += ACCELERATION
      this.body.velocity.x = Math.min(this.body.velocity.x, MAX_VELOCITY)
    }
    else
    {
        if (this.body.velocity.x > 0) {
          this.body.velocity.x -= ACCELERATION
        } else if (this.body.velocity.x < 0) {
          this.body.velocity.x += ACCELERATION
        }
       if (this.animations.currentAnim.name =="run" && this.animations.currentAnim.isPlaying==true && this.body.velocity.x ==0){
         this.animations.currentAnim.stop();
       }
    }
    if (this.left < 0 || this.right > this.game.width + this.width) {
      this.body.velocity.x = 0
    }*/
  }




}

module.exports = RockyRobot;
