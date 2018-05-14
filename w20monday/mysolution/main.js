let notif = document.querySelector(".notif")

document.addEventListener("DOMContentLoaded", function(event) {
    notif.style.bottom = "-170px";
    notif.classList.add("slide-up");
  });

document.querySelector(".close-btn").addEventListener("click", function(){
    notif.style.bottom = "0";
    notif.classList.remove("slide-up");
    notif.classList.add("slide-down");
});