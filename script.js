

let lastText = ""

function generateClick() {
  let type = getSelectedRadio()
    document.getElementById("copied").style.visibility = "hidden"
  if (  type == null) return
  switch( type ) {
    case 0:
      generateWord();
      break;
    case 1:
      generateParagraph();
      break;
    case 2:
      generateDescription();
      break;
  }
  
  lastText = document.getElementById("generated-text").innerText
 
}



function getSelectedRadio() {
  var radios = document.getElementsByName("type");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log(radios[i].value);
      return i
    }
  }
}




function generateWord() {
  document.getElementById("generated-text").innerText = "Lorem";
}

function generateParagraph() {
  document.getElementById("generated-text").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod ex in ipsum feugiat, vel laoreet lectus pharetra. Sed auctor sapien vel vestibulum sodales. Maecenas vitae tincidunt velit. Proin id nisl id orci aliquet hendrerit. Maecenas varius odio quis risus rutrum, sed viverra ipsum sodales. Integer dictum, mauris a suscipit malesuada, lectus lorem ullamcorper libero, non faucibus orci quam at ante. Proin sit amet dapibus nulla. In lobortis dolor nec sem facilisis, id feugiat tellus luctus. Donec et tellus vitae massa feugiat imperdiet. Sed maximus luctus odio, vitae bibendum turpis malesuada vitae. Sed eget vulputate ante. Cras congue justo id nibh venenatis, nec dignissim odio pharetra.";
}

function generateDescription() {
  document.getElementById("generated-text").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget enim vitae turpis bibendum ultricies sed quis odio. Maecenas venenatis malesuada efficitur. Nullam ac nisl sed lectus auctor fringilla. Nullam ut bibendum urna. Morbi a hendrerit nulla. Nullam ullamcorper nulla quis libero malesuada, quis vehicula eros vehicula. Fusce sit amet risus id urna luctus elementum quis at sapien. Donec ultricies turpis eu dolor molestie ultrices. Proin facilisis magna justo, id scelerisque sapien faucibus vel. Quisque in felis eget velit egestas bibendum a eget turpis. Mauris gravida lacus eget nisi finibus convallis. Sed vitae ligula ante. Donec blandit, enim sit amet maximus interdum, enim odio pellentesque elit, at dictum elit arcu sit amet urna. Aenean fringilla lectus odio, quis tristique nunc feugiat non.";
}


function copyClick() {
  navigator.clipboard.writeText(lastText);
  document.getElementById("copied").style.visibility = "visible"
  
}