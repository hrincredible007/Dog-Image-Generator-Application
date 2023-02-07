console.log("Dog Image");


let newImageButton = document.getElementById('newImage');
let DogImageDiv = document.getElementById('DogImage');

let newDogImg = () => {
    
    let url = "https://dog.ceo/api/breeds/image/random";
    fetch(url).then(response => response.json()).then(json => {
        console.log(json);
        DogImageDiv.innerHTML = `<img src = '${json.message}' height = 400; width = 400 />`;
    });
}

// newImageButton.onclick = () => newDogImg();