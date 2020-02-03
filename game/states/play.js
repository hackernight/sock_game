

const UnpairedSock = require('../prefabs/unpairedSock');
const LaundryPile = require('../prefabs/laundryPile');
const LostSock = require('../prefabs/lostSock');
const RockyRobot = require('../prefabs/rockyrobot');
const Exit = require('../prefabs/exit');
const Puddle = require('../prefabs/puddle');

const unpairedSockInterval = 64;


var laundryList = [];
var puddleList = [];
var sockList=[];
var robotKid;
var exit;

var playerLaneY;
  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {

      this.generateExit();
      this.generatePuddles();
      this.generateLaundry();
      this.generateSocks();

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
      for (const sock of sockList) {
        this.game.physics.arcade.overlap(robotKid, sock, this.collideSock, null, this)
      }
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
    generateSocks: function(){
      sockList=[];
      this.generateSockPair(1);

      if (this.game.ba.numberOfSocksThisLevel > 1){
        this.generateSockPair(2);
      }
      if (this.game.ba.numberOfSocksThisLevel > 2){
        this.generateSockPair(3);
      }
      if (this.game.ba.numberOfSocksThisLevel > 3){
        this.generateSockPair(4);
      }
    },
    generateSockPair: function(sockNumber){

      var maxTileslong = (this.game.width/64)-1;
      var maxTileshigh = (this.game.height/64)-1;
      var sock = new UnpairedSock(this.game, 30 + (unpairedSockInterval * (sockNumber -1)), 50, this.sockImageName(sockNumber) + "1");
      var lostSock = new LostSock(this.game, 64*this.game.rnd.integerInRange(1, maxTileslong),
                            64*this.game.rnd.integerInRange(2, maxTileshigh),
                            this.sockImageName(sockNumber) + "2", sockNumber);

     sockList.push(lostSock);
    },
    sockImageName: function(num){
      if (num==1){
        return 'blueflower';
      }
      if (num==2){
        return 'lily';
      }
      if (num==3){
        return 'parasols';
      }
      if (num==4){
        return 'purple';
      }
    },
    generateLaundry: function(){
      var maxTileslong = (this.game.width/64)-1;
      var maxTileshigh = (this.game.height/64)-1;

      laundryList=[];
      var laundryCount=5 * this.game.ba.level;
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
      var puddleCount=this.game.ba.level - 1;
      for (let i =0; i<puddleCount; i++){
          var puddle = new Puddle(this.game, 64*this.game.rnd.integerInRange(1, maxTileslong),
                                 64*this.game.rnd.integerInRange(2, maxTileshigh));
          puddleList.push(puddle);
        }


    },
    generateExit: function(){
      var maxTileslong = (this.game.width/64)-1;
      var maxTileshigh = (this.game.height/64)-1;
      exit = new Exit(this.game, this.game.width-64,
                             64*this.game.rnd.integerInRange(2, maxTileshigh));

    },
    collideSock: function(rocky,socky ){
      console.log("Hit a sock, " + sockList.length + " socks in the list");

      for (let i=sockList.length-1; i>=0; i--){
        let mysock = sockList[i];
          console.log("checking mysock number " + mysock.sockNumber() + ", socky number is " + socky.sockNumber());
        if (socky.sockNumber()== mysock.sockNumber()){
          console.log("it was sock index " + i);

          var sock1 = new UnpairedSock(this.game, 35 + (unpairedSockInterval * (mysock.sockNumber() -1)), 55,
                                      this.sockImageName(mysock.sockNumber()) + "1");

          this.game.ba.numberOfSocksMatched += 1;
          socky.destroy();

          //sockList.splice(i,1);
        }
      }


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
