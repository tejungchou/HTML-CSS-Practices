const music = document.getElementById("audio");
var isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        music.pause();
    } else {
        music.play();
    }
};
music.onplaying = function() {
    isPlaying = true;
};
music.onpause = function() {
    isPlaying = false;
};

