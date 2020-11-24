const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    const video = document.querySelector('.vid-container video');

    //  SOUNDS

    const sounds = document.querySelectorAll('.sound-picker button');

    // TIME DISPLAY 

    const timeDisplay = document.querySelector('.time-display');
    const timeSelect = document.querySelectorAll('.time-select button');

    // GET THE LENGTH OFF THE OUTLINE

    const outlineLength = outline.getTotalLength();

    // DURATION

    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;  // chertochki for svg form (risovanie formy figury)
    outline.style.strokeDashoffset = outlineLength; //opredeljaet mestopolozhenie vdolj pyti svg

    //PICK DIFFERENT SOUNDS

    sounds.forEach(sound => {
        sound.addEventListener('click', function() {
            song.src = this.getAttribute('data-sound');
            video.src = this.getAttribute('data-video');
            checkPlaying(song);
        });
    });

    // PLAY SOUNDS

    play.addEventListener('click', () => {
        checkPlaying(song);
    });
    
    //SELECT TIMES

    timeSelect.forEach(option => {
        option.addEventListener('click', function() {
            fakeDuration = this.getAttribute('data-time');
            timeDisplay.textContent =`${Math.floor(fakeDuration / 60)}:${Math.floor(fakeDuration % 60)} `;
        });
    });



    // CREATE A FUNCTION SPECIFIC TO STOP AND PLAY THE SOUNDS AND VIDEOS

    const checkPlaying = song => {
    if(song.paused) {
        song.play();
        video.play();
        play.src = 'images/pause.svg';
    } else {
        song.pause();
        video.pause();
        play.src = 'images/play.svg';
    }
    };



  // ANIMATED CIRCLE TO TIMES
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

        // ANIMATE CIRCLE

        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

        // ANIMATE THE TEXT
if (seconds < 10 && minutes < 10 ) {
    timeDisplay.textContent = `${0}${minutes}:${0}${seconds}`;
} else {
        timeDisplay.textContent = `${minutes}:${seconds}`;}
        if(currentTime >=fakeDuration) {
            song.pause();
            song.currentTime = 0;
            play.src = 'images/play.svg';
            video.pause();
        }

    };
};

// RUN FUNCTION

app();

