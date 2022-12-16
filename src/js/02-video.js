import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const throttledPlay = throttle((event) => {
  localStorage.setItem('videoplayer-current-time', event.seconds); 
  // створює новий, або оновлює вже існуючий запис у сховищі
  // throttle контролює кількість разів, яку функція може бути викликана протягом 1c
}, 1000);
player.on('timeupdate', throttledPlay);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
// відновлення відтворення зі збереженої позиції
