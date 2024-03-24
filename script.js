let speaker = document.querySelector(".speaker");

speaker.addEventListener("click" , ()=>{
   let audio = new Audio("./audio/audio.mp3");
   audio.play();
})