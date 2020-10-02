var i = 0;
var txt = '『밈뷸러스 밈뷸토니아(Mimbulus mimbletonia)』';
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("code").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}