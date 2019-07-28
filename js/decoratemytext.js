var started=false;
var timerId=null;
function isVowel(str) {
  if((typeof str !== "string"))
    return false;
  if(str.length > 1)
    return false;
  var vowels= ["a", "e", "i", "o", "u"];
  return (-1 != vowels.indexOf(str));
}
function beginsWithVowel(str) {
  if((typeof str !== "string"))
    return false;
  var vowels= ["a", "e", "i", "o", "u"];
  return (-1 != vowels.indexOf(str.charAt(0)));
}
function beginsWithConsonant (str) {
  return (! beginsWithVowel(str) );
}
function Malkonichify(str) {
  if(! str)
    return "";
  var words= str.split(" ");
  var newWords= [];
  for(var i=0; i < words.length; i++) {
    if (words[i] == " ,")
      continue;
    if (words[i].length >= 5)
      newWords.push('Malkovich');
    else
      newWords.push(words[i]);
  }
  return newWords.join(" ").trim();
}
function Atinlayfy (str) {
  var words= str.split(" ");
  var newWords= [];
  for(var i=0; i < words.length; i++) {
    if (words[i] == " ,")
      continue;
    var deWord= words[i];
    if(beginsWithConsonant(deWord)) {
      deWord= deWord.substring(1, (deWord.length-1)) + deWord.charAt(0)+ "-ay"
    }
    newWords.push(deWord);
  }
  return newWords.join(" ").trim();
}
window.onload= function () {
  var button= document.getElementById('myButton');
  button.onclick= buttonClickFunction;
  function buttonClickFunction() {
    //increaseFont();
    if(started) {
      started=false;
      window.clearInterval(timerId);
    } else {
      timerId= window.setInterval(increaseFont, 500);

      started=true;
    }
  }
  var checkbx= document.getElementById('chbx');
  checkbx.onchange = function () {
    var txtArea= document.getElementById('myTextArea');
    if(this.checked) {
      txtArea.style.fontWeight='bold';
      txtArea.style.color='green';
      txtArea.style.textDecoration='underline';
      document.body.style.backgroundImage="url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
    }else {
      txtArea.style.fontWeight='normal';
      txtArea.style.color='black';
      txtArea.style.textDecoration='none';
      document.body.style.backgroundImage="url()";
    }
  };
  function increaseFont() {
    var el = document.getElementById('myTextArea');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    el.style.fontSize = (fontSize + 2) + 'px';
  }
  var Malkovitch= document.getElementById('Malkovitch');
  var Atinlay= document.getElementById('IgpayAtinlay');

  Malkovitch.onclick= function () {
    var d=document.getElementById('myTextArea');
    d.value= Malkonichify(d.value);
  };
  Atinlay.onclick= function () {
    var d=document.getElementById('myTextArea');
    d.value= Atinlayfy(d.value);
  };
}


