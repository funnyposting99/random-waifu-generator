let current_franchise;
let franchise_directory;
let totalImages;
let randomIndex;

function submitName() {
    userName = document.getElementById('nameInput').value;
    if (userName) {
        localStorage.setItem('userName', userName);
        document.getElementById('nameInputContainer').style.display = 'none';
        document.getElementById('franchiseSelect').style.display = 'flex';
    }
}

function selectFranchise(franchise) {
    current_franchise = franchise;
    document.getElementById('franchiseSelect').style.display = 'none';
    document.getElementById('image-container').style.display = 'flex';

    if (current_franchise === 0) {
        franchise_directory = "pg"
        totalImages = 60;
    }else if (current_franchise === 1){
        franchise_directory = "feg"
        totalImages = 252;
    }else if (current_franchise === 2){
        franchise_directory = "haniho"
        totalImages = 140;
    }

    defaultState();
}

function defaultState() {
    document.querySelector('.controls').style.display = 'flex';
    if (lastImage[current_franchise]) {
        document.getElementById('randomImage').src = lastImage[current_franchise];
    } else {
        displayRandomImage();
    }
    document.getElementById('counter').innerText = `Roll: ${rollCount[current_franchise]}`;

    if (accepted[current_franchise]) {
        console.log("puta madre");
        acceptImage();
        
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function displayRandomImage() {
    randomIndex = getRandomInt(1, totalImages);

    /*image logic goes here*/
    randomIndex = purityCheck(randomIndex);

    const imagePath = `${franchise_directory}/img (${randomIndex}).webp`;
    document.getElementById('randomImage').src = imagePath;
    lastImage[current_franchise] = imagePath;
    saveState();
}

function changeImage() {
    rollCount[current_franchise]++;
    displayRandomImage();
    document.getElementById('counter').innerText = `Roll: ${rollCount[current_franchise]}`;
    saveState();
}

function acceptImage() {
    if (current_franchise != 2 || randomIndex != 30){
        document.querySelector('.controls').style.display = 'none';
        document.getElementById('congratulationsMessage').style.display = 'flex';
    
        let message = generateMessage(randomIndex);
    
        message = `${userName}${message}<br>Body Count: ${rollCount[current_franchise]}`
    
        document.getElementById('endScreen').innerHTML = message;
        accepted[current_franchise] = true;
        saveState();
    }
}
  

window.onload = function() {
    if (userName) {
        document.getElementById('nameInputContainer').style.display = 'none';
        document.getElementById('franchiseSelect').style.display = 'flex';
    }

}