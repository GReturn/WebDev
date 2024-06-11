var modal = document.getElementById('imgModal');
var modalImg = document.getElementById("img1");
var captionText = document.getElementById("caption");
var img = document.querySelectorAll('.image_item');

var slideButton = document.querySelectorAll('.slide_button');

for (var i=0; i<img.length; i++) {
    img[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        slideButton.forEach(button => {
            button.style.zIndex = -1;
        });
    }
}

modal.onclick = function() {
    img1.className += " out";
    setTimeout(function() {
        modal.style.display = "none";
        img1.className = "img-modal-content";
        slideButton.forEach(button => {
            button.style.zIndex = 1;
        });
        }, 400);
    
}    

console.log("image_zoom.js has successfully connected to index.html");