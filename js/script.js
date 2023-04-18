let lastText = "";
var lorem;
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM LOADED")
  lorem = new loremipsum.LoremIpsum( {
     suffix: "\n",
  })
  console.log("LOREM LOADED")
});


function generateClick() {
  let type = getSelectedRadio();
  document.getElementById("copied").style.visibility = "hidden";
  if (type == null) return;
  let ret = ""
  switch (type) {
    case 0:
      ret =  generateWord();
      break;
    case 1:
      ret = generateParagraph();
      break;
    case 2:
      ret = generateDescription();
      break;
  }
   document.getElementById("generated-text").innerText = ret.replace("\n","<br>")
  lastText = ret
}

function getSelectedRadio() {
 
  var radios = document.getElementsByName("type");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log(radios[i].value);
      return i;
    }
  }
}

function generateWord() {
  return lorem.generateWords(1)
}

function generateParagraph() {
 return lorem.generateSentences(5);
}

function generateDescription() {
  return lorem.generateSentences(10);
}
function copyClick() {
  navigator.clipboard.writeText(lastText);
  document.getElementById("copied").style.visibility = "visible";
}
