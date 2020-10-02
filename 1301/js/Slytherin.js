var i = 0;
var txt = '『순수혈통(pure blue)』';
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("code").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}