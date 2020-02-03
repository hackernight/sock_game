class BackgroundImage extends Phaser.Sprite {

  constructor(game, pic, scale) {


    super(game, game.world.centerX, game.world.centerY, pic)
    //this.bg = new TextBackground(game, game.world.centerY)
    this.target = game.world.centerY - 10
    this.anchor.setTo(0.5)
    game.add.existing(this)
    this.scale.setTo(scale, scale);

    /*this.events.onDestroy.add(() => {
      this.bg.remove()
    })*/
  }

  /*update() {
    this.y += (this.target - this.y) * 0.1
    this.scale.x += Math.cos(this.game.time.time * 1/500) * 1/1000
    this.scale.y += Math.cos(this.game.time.time * 1/500) * 1/1000
  }*/

}

export default BackgroundImage
