const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

let output = document.getElementById('output');
let input = document.getElementById('input');
function sound() {
   var soundwav = new Audio();
  soundwav.src = "../audio/button-09.wav";
  var soundmp3 = new Audio();
  soundmp3.src = "../audio/button-09.mp3";
  soundmp3.play();
  soundwav.play();
}
function calculate(data) {
  
  switch(data){

    case 'AC':
      input.innerHTML="";
      output.innerHTML="0";
      sound();
      break;
      case 'C':
        input.innerHTML=input.innerHTML.substr(0,input.innerHTML.length -1);
        output.innerHTML=  math.evaluate(input.innerHTML) === undefined ? 0:math.evaluate(input.innerHTML);
        sound();
        break;
      case '=':
        output.innerHTML = math.evaluate(input.innerHTML);
        sound();
        break;
    default:
        input.innerHTML +=data;
        sound();
        break;
  }
}
