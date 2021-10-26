
import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

var onUpdateTime = function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds.toString())
};

player.on('timeupdate', throttle(onUpdateTime, 1000));

const localCurrentTime = localStorage.getItem("videoplayer-current-time")

player.setCurrentTime(localCurrentTime).then(function(seconds){
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});