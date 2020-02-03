
'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.ba = {
    level: 1,
    win: false,
    lose: false,
    numberOfSocksThisLevel: 1,
    numberOfSocksMatched: 0,
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
    }
    
  }
    this.game.state.start('preload');
  }
};

module.exports = Boot;
