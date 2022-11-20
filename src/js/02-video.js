import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
  localStorage.setItem('videoplayer-current-time', Math.floor(e.seconds));
}

let time = localStorage.getItem('videoplayer-current-time');

if (time) {
  player.setCurrentTime(time);
}
