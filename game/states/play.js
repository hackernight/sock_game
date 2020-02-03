

const UnpairedSock = require('../prefabs/unpairedSock');
const LaundryPile = require('../prefabs/laundryPile');
const LostSock = require('../prefabs/lostSock');
const RockyRobot = require('../prefabs/rockyrobot');
const Exit = require('../prefabs/exit');
const Puddle = require('../prefabs/puddle');

const unpairedSockInterval = 64;


var laundryList = [];
var puddleList = [];
var lostSock1;
var lostSock2;
var robotKid;
var exit;

var playerLaneY;
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {

      this.generateSocksToMatch();
      this.generateExit();
      this.generatePuddles();
      this.generateLaundry();
      this.generateLostSocks();

      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      robotKid = new RockyRobot(this.game, 130, 130);
      //this.sprite = this.game.add.sprite(this.game.width/2, this.game.height/2, 'kidrobot');
      //robotKid = true;

      this.game.physics.arcade.enable(robotKid);
      robotKid.body.collideWorldBounds = true;
      robotKid.body.bounce.setTo(1,1);
      //robotKid.body.velocity.x = this.game.rnd.integerInRange(-500,500);
      //robotKid.body.velocity.y = this.game.rnd.integerInRange(-500,500);

    },
    update: function() {
      this.game.physics.arcade.overlap(lostSock1, robotKid, this.collideSock1, null, this);
      this.game.physics.arcade.overlap(lostSock2, robotKid, this.collideSock2, null, this);
      this.game.physics.arcade.overlap(exit, robotKid, this.collideExit, null, this);

      for (const laundry of laundryList) {
        this.game.physics.arcade.collide(robotKid, laundry)
        for (const laundry2 of laundryList) {
          this.game.physics.arcade.collide(laundry2, laundry)
        }
      }
      for (const puddle of puddleList) {
        this.game.physics.arcade.overlap(robotKid, puddle, this.loseGame, null, this)

        for (const laundry2 of laundryList) {
          this.game.physics.arcade.collide(puddle, laundry2)
        }
      }
    },
    generateSocksToMatch: function(){
      var sock1 = new UnpairedSock(this.game, 30, 50, 'blueflower1');
      var sock2 = new UnpairedSock(this.game, 30 + unpairedSockInterval, 50, 'lily1');
    },
    generateLaundry: function(){
      var maxTileslong = (this.game.width/64)-1;
      var maxTileshigh = (this.game.height/64)-1;

      laundryList=[];
      var laundryCount=20;
      for (let i =0; i<laundryCount; i++){
        var sprite = 'clothespile1'
        if (i%2==0) {
          sprite = 'clothespile2';
        }
          var laundry = new LaundryPile(this.game, 64*this.game.rnd.integerInRange(1, maxTileslong),
                                 64*this.game.rnd.integerInRange(2, maxTileshigh),
                                 sprite);
          laundryList.push(laundry);
        }


    },
    generatePuddles: function(){
      var maxTileslong = (this.game.width/64)-1;
      var maxTileshigh = (this.game.height/64)-1;

      puddleList=[];
      var puddleCount=3;
      for (let i =0; i<puddleCount; i++){
          var puddle = new Puddle(this.game, 64*this.game.rnd.integerInRange(1, maxTileslong),
                                 64*this.game.rnd.integerInRange(2, maxTileshigh));
          puddleList.push(puddle);
        }


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
    generateExit: function(){
      var maxTileslong = (this.game.width/64)-1;
      var maxTileshigh = (this.game.height/64)-1;
      exit = new Exit(this.game, this.game.width-64,
                             64*this.game.rnd.integerInRange(2, maxTileshigh));

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
    },
    collideExit: function(exit, rocky){
      this.game.state.start('backstory');
    },
    loseGame: function(exit, rocky){
      this.game.ba.lose=true;
      this.game.state.start('gameover');
    }
  };

  module.exports = Play;
