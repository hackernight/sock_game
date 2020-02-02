'use strict';
import Boot from './states/boot';
import Play from './states/play';
import Menu from './states/menu';
import Preloader from './states/preload';
import Gameover from './states/gameover';

//global variables
var BootState, GameoverState, MenuState, PlayState, PreloadState, game;
window.onload = function () {
  game = new Phaser.Game(800, 600, Phaser.AUTO, 'rockysocky');

  // Game States
  
  game.state.add('boot', new Boot());
  
  game.state.add('gameover', new Gameover());
  
  game.state.add('menu', new Menu());
  
  game.state.add('play', new Play());
  
  game.state.add('preload', new Preloader());
  

  game.state.start('boot');
};