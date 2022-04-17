//Audio Files
const clap = new Audio("sounds/clap.wav");
const hihat = new Audio("sounds/hihat.wav");
const kick = new Audio("sounds/kick.wav");
const openhat = new Audio("sounds/openhat.wav");
const boom = new Audio("sounds/boom.wav");
const ride = new Audio("sounds/ride.wav");
const snare = new Audio("sounds/snare.wav");
const tom  = new Audio("sounds/tom.wav");
const tink = new Audio("sounds/tink.wav");

window.addEventListener('keydown', function(e) {
    let input = e.key;
    switch (input) {
        case input = 'a':
          clap.play()
          break;
        case input = 's':
          hihat.play()
          break;
        case input = 'd':
          kick.play()
          break;
        case input = 'f':
          openhat.play()
          break;
        case input = 'g':
          boom.play()
          break;
        case input = 'h':
          ride.play()
          break;
        case input = 'j':
          snare.play()
          break;
        case input = 'k':
          tom.play()
          break;
        case input = 'l':
          tink.play()
          break;
        
      }
})


