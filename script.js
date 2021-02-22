
sounds.forEach((sound, idx) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
 
  btn.innerText = sound;
 
  btn.addEventListener("click", () => {
    stopSongs();
 
    document.getElementById(sound).play();
  });
 
  document.getElementById("buttons").appendChild(btn);
 
  window.addEventListener("keyup", (e) => {
    if (e.code == `Numpad${idx}`) {
      stopSongs();
      document.getElementById(sound).play();
    }
  });
});