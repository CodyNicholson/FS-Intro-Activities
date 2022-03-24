let header = document.querySelector("#page-header");
header.style.textAlign = "left";

let dogImages = document.querySelectorAll('.dog-image');

for(let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px';
    if (i == 1) {
        dogImages[i].src = 'https://static.wikia.nocookie.net/seraphina/images/b/b2/Dragonseraphina.jpg/revision/latest?cb=20160103194957';
        dogImages[i].style.width = "150%";
    }
}