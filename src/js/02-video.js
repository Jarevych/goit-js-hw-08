import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
  console.log('played the video!');
});

player.on('timeupdate', throttle(function(timeupdate) {
  localStorage.setItem("videoplayer-current-time", timeupdate.seconds);
}, 1000));

const savedTime = localStorage.getItem("videoplayer-current-time");

console.log(savedTime);

if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime)).catch(function(error) {
    console.error('Помилка при встановленні часу: ' + error);
  });
}
