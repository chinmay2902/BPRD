let time, wnTime;
function openCard(elem) {
  let x = document.getElementsByClassName("s2-card-div");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(elem).style.display = "block";
  clearTimeout(time)
  divScroll(elem)
}

function divScroll(elem) {
  let isPaused = false;
  let x = document.getElementById(elem);
  function scrollLogic() {
    if (isPaused === false) {
      x.scrollBy(0, 1);
      time = setTimeout(scrollLogic, 90);
    }
  }
  x.addEventListener("mouseenter", () => {
    isPaused = true;
    clearTimeout(time)
  });
  x.addEventListener("mouseleave", () => {
    isPaused = false;
    clearTimeout(time)
    scrollLogic();
  });
  scrollLogic();
}
divScroll('news-and-event')

let isPausedWn = false;
let wn = document.getElementById('whats-new');
function whatsnewScroll() {
  if (isPausedWn === false) {
    wn.scrollBy(0, 1);
    wnTime = setTimeout(whatsnewScroll, 90);
  }
}
wn.addEventListener("mouseenter", () => {
  isPausedWn = true;
  clearTimeout(wnTime)
});
wn.addEventListener("mouseleave", () => {
  isPausedWn = false;
  clearTimeout(wnTime)
  whatsnewScroll();
});
whatsnewScroll();