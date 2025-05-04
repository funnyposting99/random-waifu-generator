let rollCount = JSON.parse(localStorage.getItem('rollCount')) || [0, 0, 0];
let userName = localStorage.getItem('userName') || '';
let lastImage = JSON.parse(localStorage.getItem('lastImage')) || ['', '', ''];
let accepted = JSON.parse(localStorage.getItem('accepted')) || [false, false, false];
let forced = localStorage.getItem('forced') === 'true';

function saveState() {
    localStorage.setItem('rollCount', JSON.stringify(rollCount));
    localStorage.setItem('userName', userName);
    localStorage.setItem('lastImage', JSON.stringify(lastImage));
    localStorage.setItem('accepted', JSON.stringify(accepted));
}
