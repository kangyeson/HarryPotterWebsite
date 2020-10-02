var i = 0;
var txt = '"원에는 시작점이 없다."';
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("code").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}