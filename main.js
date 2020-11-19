const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    //  SOUNDS
    const sounds = document.querySelectorAll('.sound-picker button');
    // TIME DISPLAY 
    const timeDisplay = document.querySelector('.time-display');
    // GET THE LENGTH OFF THE OUTLINE
    const outlineLength = outline.getTotalLength();
    // DURATION
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    // PLAY SOUNDS
    play.addEventListener('click', () => {
        checkPlaying(song);
    });
    
    // CREATE A FUNCTION SPECIFIC TO STOP AND PLAY THE SOUNDS
    const checkPlaying = song => {
    if(song.paused) {
        song.play();
        video.play();
        play.src = 'images/pause.svg';
    } else {
        song.pause();
        video.pause();
        play.src = 'images/play.svg'
    }
}
};




app();