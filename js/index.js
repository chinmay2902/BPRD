function move() {
  if (position <= 4) {
      position++;
  } else {
      position = 0;
  }
  
  moduleOffset =  document.querySelector(".scroll-items").offsetWidth;
  
  filler = document.querySelector("#filler");
  
  filler.style.left = -( position* moduleOffset) + "px";
  
}

setInterval(move, 100);