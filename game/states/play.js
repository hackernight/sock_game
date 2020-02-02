

const UnpairedSock = require('../prefabs/unpairedSock');

var playerLaneY;
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {


      var height = this.game.height
      playerLaneY = height - 50;
      var sock1 = new UnpairedSock(this.game, playerLaneY, 0);


      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.sprite = this.game.add.sprite(this.game.width/2, this.game.height/2, 'kidrobot');
      this.sprite.inputEnabled = true;

      this.game.physics.arcade.enable(this.sprite);
      this.sprite.body.collideWorldBounds = true;
      this.sprite.body.bounce.setTo(1,1);
      this.sprite.body.velocity.x = this.game.rnd.integerInRange(-500,500);
      this.sprite.body.velocity.y = this.game.rnd.integerInRange(-500,500);

      this.sprite.events.onInputDown.add(this.clickListener, this);
    },
    update: function() {

    },
    clickListener: function() {
      this.game.state.start('gameover');
    }
  };

  module.exports = Play;
