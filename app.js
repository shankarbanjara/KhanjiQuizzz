const kanji = document.querySelector('.kanji');

const input = document.getElementById('input');
const check = document.getElementById('check');

const kanjiObj = {
  jin: '人',
  shin: '新',
  eki: '駅',
  den: '電'
}
//
const kanjiValue = Object.values(kanjiObj);
const kanjiKey = Object.keys(kanjiObj);

//COUNT CHANGES
let counter = 0;

let nowKanji = kanjiValue[counter];
let nowRomaji = kanjiKey[counter];


//ALWAYS LISTENING FOR A CLICK ON THE WITH CHECK ID
check.addEventListener('click', function(){
 if(input.value === nowRomaji) {
   display();
   correct();
 } else {
   incorrect(); 
}
});
function display () {
  if(counter < kanjiValue.lenght);
  counter = counter + 1;
  nowKanji = kanjiValue[counter];
  nowRomaji = kanjiKey[counter];
  kanji.innerHTML=nowKanji;
  input.value='';

}


function incorrect(){
  kanji.style.color='red';
  kanji.innerHTML = 'Incorrect, Try again';
  input.value = '';  
  setTimeout(function(){
    kanji.innerHTML = nowKanji;
  } , 2000);   
}

function correct(){
  if(counter === kanjiValue.length) {
    kanji.innerHTML = "Good Job and good luck with N1"
  } else {
  kanji.style.color='green';
  kanji.innerHTML = 'correct';
  input.value = '';  
  setTimeout(function(){
    kanji.innerHTML='black';
    kanji.innerHTML =  nowKanji;
  } , 2000);        
}
}
