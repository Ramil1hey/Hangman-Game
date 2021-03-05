const div_right_leg = document.querySelector('#div_right_leg');
const div_left_leg = document.querySelector('#div_left_leg');
const div_right_hand = document.querySelector('#div_right_hand');
const div_left_hand = document.querySelector('#div_left_hand');
const div_body = document.querySelector('#div_body');
const div_circle = document.querySelector('#div_circle');
const div_down_small = document.querySelector('#div_down_small');
const div_right = document.querySelector('#div_right');
const div_stick = document.querySelector('#div_stick');
const div_down = document.querySelector('#div_down');
const wrong = document.querySelector('#wrong');
const wrongLetters = document.querySelector('#wrongLetters');
let lettersContainer = document.querySelector('#lettersContainer');
const notification = document.querySelector('#notification');


const randomWordsArr = ['instaurator', 'supraorbital', 'lebanon', 'sigla', 'paronomasia', 'spirket', 'lactary', 'exultingly', 'marianao']; 
let randomNumber = Math.floor((Math.random() * randomWordsArr.length-1)+1);
const randomWord = randomWordsArr[randomNumber];
let lengthWord = randomWord.length;
let arrOfLimbs = [div_circle, div_body, div_right_hand, div_left_hand, div_left_leg, div_right_leg];
let k = -1;
let arrGeussedWord = [];

for (let i = 0; i < lengthWord; i++) {
    lettersContainer.innerHTML += `<span></span>`;
}

document.addEventListener('keydown', function(e) {
    if (document.querySelector('#endGame').style.display == 'block') {
        e.preventDefault();
    }
    else {
        let letter = String.fromCharCode(e.keyCode).toLocaleLowerCase();
    if (randomWord.indexOf(letter) != -1) {
        if (randomWord.lastIndexOf(letter) != -1) {
            arrGeussedWord.push(letter);
            lettersContainer.querySelectorAll('span')[randomWord.lastIndexOf(letter)].innerHTML = randomWord[randomWord.lastIndexOf(letter)];
        } 
        arrGeussedWord.push(letter);
        lettersContainer.querySelectorAll('span')[randomWord.indexOf(letter)].innerHTML = randomWord[randomWord.indexOf(letter)];
    }
    else {
        if (k == arrOfLimbs.length - 1) {
            document.querySelector('#endGame').style.display = 'block';
            document.addEventListener('keypress', (e) => e.stopPropagation());
            document.querySelector('#btn').onclick = () => location.reload();
        }
        arrOfLimbs[k++].style.display = 'block';
    }
    }
})

document.addEventListener('keyup', (e) => {
    let letter = String.fromCharCode(e.keyCode).toLocaleLowerCase();
    let k = 0;
    for (let i = 0; i < arrGeussedWord.length; i++) {
        if (arrGeussedWord[i] == letter) {
            k++;
            if (k > 2) {
                if (document.querySelector('#endGame').style.display !== 'block') {
                    notification.style.top = '0px';
                    setTimeout((function() {
                        notification.style.top = '-57px';
                    }), 3000)
                }
            }
        }
    }
})