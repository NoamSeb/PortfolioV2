const speakOn = document.querySelector('.speakerOn');
const speakMute = document.querySelector('.speakerMute');
const cursorRounded = document.querySelector('.rounded');

const moveCursor = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}

window.addEventListener('mousemove', moveCursor)
// document.addEventListener('DOMContentLoaded', function() {
//     const video = document.getElementById('myVideo');
//     const scene3D = document.getElementById('canvas');

//     video.addEventListener('ended', function() {
//       fadeOutVideo();
//       fadeIn3Dscene();
//     });
  
//     function fadeOutVideo() {
//       video.classList.add('video-fade-out');
//     }
  
//     function fadeIn3Dscene() {
//       scene3D.classList.add('scene-fade-in');
//     }
// });

var sound = new Howl({
    src: ['medias/song/Whitesand - Eternity.mp3'],
    loop: true,
    volume: 0.7
});
speakMute.addEventListener('click', ()=>{
    speakOn.style.display="block";
    speakMute.style.display="none";
    sound.play();
    console.log("Unmuted");
})
speakOn.addEventListener('click', ()=>{
    speakOn.style.display="none";
    speakMute.style.display="block";
    sound.stop();
    console.log("Muted");
})