import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(function(timeupdate) {
  localStorage.setItem(STORAGE_KEY, timeupdate.seconds);
}, 1000));

const savedTime = localStorage.getItem(STORAGE_KEY);

if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime)).catch(function(error) {
    console.error('Помилка при встановленні часу: ' + error);
  });
}
