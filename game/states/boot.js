
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
    numberOfSocksMatched: 0
  }
    this.game.state.start('preload');
  }
};

module.exports = Boot;
