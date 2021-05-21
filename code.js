var catButton = document.querySelector("#cat-button");
var catImage = document.querySelector("#cat-img");
var catVideo = document.querySelector("#cat-video");

discoverCat();

function discoverCat() {
    fetch('http://aws.random.cat/meow')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            var splitData = data.file.split('.');
            var lastIndex = splitData[splitData.length - 1];
            if (splitData[lastIndex] === 'mp4') {
                catVideo.style.display = "inline-block"
                catVideo.src = data.file;
            } else {
                catImage.style.display = "inline-block"
                catImage.src= data.file;
            }
        })
}

catButton.addEventListener('click', discoverCat)