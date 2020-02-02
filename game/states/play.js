

const UnpairedSock = require('../prefabs/unpairedSock');
const LaundryPile = require('../prefabs/laundryPile');
const LostSock = require('../prefabs/lostSock');

const unpairedSockInterval = 64;

var laundry1;
var laundry2;
var laundry3;
var lostSock1;
var lostSock2;

var playerLaneY;
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {

      this.generateSocksToMatch();
      this.generateLaundry();
      this.generateLostSocks();

      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.sprite = this.game.add.sprite(this.game.width/2, this.game.height/2, 'kidrobot');

      this.sprite.animations.play('walk',10, true);
      this.sprite.inputEnabled = true;

      this.game.physics.arcade.enable(this.sprite);
      this.sprite.body.collideWorldBounds = true;
      this.sprite.body.bounce.setTo(1,1);
      this.sprite.body.velocity.x = this.game.rnd.integerInRange(-500,500);
      this.sprite.body.velocity.y = this.game.rnd.integerInRange(-500,500);

      this.sprite.events.onInputDown.add(this.clickListener, this);
    },
    update: function() {
      this.game.physics.arcade.overlap(lostSock1, this.sprite, this.collideSock1, null, this);
      this.game.physics.arcade.overlap(lostSock2, this.sprite, this.collideSock2, null, this);
    },
    clickListener: function() {
      this.game.state.start('gameover');
    },
    generateSocksToMatch: function(){
      var sock1 = new UnpairedSock(this.game, 30, 50, 'blueflower1');
      var sock2 = new UnpairedSock(this.game, 30 + unpairedSockInterval, 50, 'lily1');
    },
    generateLaundry: function(){
      var maxTileslong = (this.game.width/64)-1;
      var maxTileshigh = (this.game.height/64)-1;


      laundry1 = new LaundryPile(this.game, 64*this.game.rnd.integerInRange(1, maxTileslong),
                             64*this.game.rnd.integerInRange(2, maxTileshigh),
                             'clothespile1');
     laundry2 = new LaundryPile(this.game, 64*this.game.rnd.integerInRange(1, maxTileslong),
                            64*this.game.rnd.integerInRange(2, maxTileshigh),
                            'clothespile1');
      laundry3 = new LaundryPile(this.game, 64*this.game.rnd.integerInRange(1, maxTileslong),
                             64*this.game.rnd.integerInRange(2, maxTileshigh),
                             'clothespile1');
    },
    generateLostSocks: function(){
      var maxTileslong = (this.game.width/64)-1;
      var maxTileshigh = (this.game.height/64)-1;
      lostSock1 = new LostSock(this.game, 64*this.game.rnd.integerInRange(1, maxTileslong),
                             64*this.game.rnd.integerInRange(2, maxTileshigh),
                             'blueflower2');
     lostSock2 = new LostSock(this.game, 64*this.game.rnd.integerInRange(1, maxTileslong),
                            64*this.game.rnd.integerInRange(2, maxTileshigh),
                            'lily2');

    },
    collideSock1: function(socky, rocky){
      console.log("Hit a sock");
      lostSock1.destroy();
      var sock1 = new UnpairedSock(this.game, 35, 55, 'blueflower1');

    },
    collideSock2: function(socky, rocky){
      console.log("Hit a sock");
      lostSock2.destroy();
      var sock2 = new UnpairedSock(this.game, 35 + unpairedSockInterval, 55, 'lily1');
    }
  };

  module.exports = Play;
