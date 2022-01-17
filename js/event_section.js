function openCard(elem) {
    let x = document.getElementsByClassName("s2-card-div");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(elem).style.display = "block";
}