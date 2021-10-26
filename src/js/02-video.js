

    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

var onUpdateTime = function (data) {

      localStorage.setItem("videoplayer-current-time", data.seconds.toString())};  

player.on('timeupdate', onUpdateTime);

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