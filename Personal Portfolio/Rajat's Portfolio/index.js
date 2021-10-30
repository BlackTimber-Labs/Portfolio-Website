
//BURGER-MENU
let burgerIcon = document.getElementById('brgr-icon');
let sideMenu = document.getElementById('mobile-menu');
let btnclose = document.getElementById('btnclose');
burgerIcon.addEventListener('click',()=>{
    sideMenu.style.display="inline-block";
})
btnclose.addEventListener('click', ()=>{
    sideMenu.style.display="none";
})
//

//CONTACT-FORM
function send()
{
    window.alert("Send Sucessfully!!");
}
//

//TEXT-ANIMATION
const textDisplay = document.getElementById('nm-txt');
const phrases = ['IT UNDERGRADUATE', 'PROGRMMER','WEB DEVELOPER'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;
const normalSpeed = Math.random() * (250 -200) + 200;
const deletionSpeed = Math.random()*(600-550)+550;
function loop () {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const speed = isDeleting?deletionSpeed:normalSpeed;
  setTimeout(loop, speed);
}
loop();
//

//Color Change in Text-Change
const downcircle = document.getElementById('down-circle');
const normalspeed = Math.random() * (1000 -950) + 950;
colour = ["white","black"];
const l = colour.length;
let k=0;
function colorChange()
{
    if(k<l)
    {
        downcircle.style.color=colour[k];
        k++;
    }
    if(k==l)
    {
        k=0;
    }
    setTimeout(colorChange,normalspeed);
}
colorChange();
//