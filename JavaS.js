var images = [];

images[0] = firstPhotoSlide.src;
images[1] = secondPhotoSlide.src;
images[2] = thirdPhotoSlide.src;
const imgElement = document.querySelector('#mainPhoto');
var index = 0;

function change(){
    imgElement.src = images[index];
    if(index == 2){
        index = 0;
    } else {
        index++;
    }

}

function changeTime(){
    setInterval(change, 2500);
};

window.onload = changeTime;