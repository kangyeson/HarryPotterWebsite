function myFunction() {
    var dots = document.getElementById("dots");
    var StartText = document.getElementById("Start");
    var startbuttonText = document.getElementById("startbutton");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      startbuttonText.innerHTML = "Start"; 
      StartText.style.display = "none";
    } else {
      dots.style.display = "none";
      startbuttonText.innerHTML = "Done"; 
      StartText.style.display = "inline";
    }
  }

function Question(){
        if(form.magicQ[1].checked==true) document.getElementById("check").innerHTML="정답입니다. 반대로 문을 잠그는 주문인 콜로포터스도 기억하세요.";
        else document.getElementById("check").innerHTML="오답입니다. 기초부터 다시 공부하세요.";
}

function Question2(){
    if(form2.magicQ2[1].checked==true) document.getElementById("check2").innerHTML="정답입니다. 더 나아가 보가트와 디멘터의 차이를 잘 이해했는지 점검해보세요.";
    else document.getElementById("check2").innerHTML="오답입니다. 이 주문은 디멘터를 퇴치하는 주문입니다.";
}

function Question3(){
    if(form3.magicQ3[0].checked==true) document.getElementById("check3").innerHTML="정답입니다. 섹튬셈프라는 상대에게 칼에 베인듯한 상처를 주는 위험한 주문이므로, 저주주문으로 분류됩니다.";
    else document.getElementById("check3").innerHTML="오답입니다. 섹튬셈프라는 저주주문입니다. 주문에 대한 더 깊은 이해가 필요해 보이는군요.";
}

function Question4(){
    if(form4.magicQ4[1].checked==true) document.getElementById("check4").innerHTML="정답입니다. 5가지에 포함된 것이 무엇인지도 알아둡시다.";
    else document.getElementById("check4").innerHTML="오답입니다. 2학년 변신술 교과서를 다시 한 번 정독하세요.";
}

function Question5(){
    if(form5.magicQ5[3].checked==true) document.getElementById("check5").innerHTML="정답입니다. 변신술 연습을 할 때 가장 많이 사용해본 주문이죠?";
    else document.getElementById("check5").innerHTML="오답입니다. 한번도 변신술을 연습해 본 적이 없나요? 기초부터 공부하세요. ";
}

function Question6(){
    if(form6.magicQ6[2].checked==true) document.getElementById("check6").innerHTML="정답입니다. 애니마구스를 익히는 방법도 공부해보세요.";
    else document.getElementById("check6").innerHTML="오답입니다.";
}

function Question7(){
    if(form7.magicQ7[2].checked==true) document.getElementById("check7").innerHTML="정답입니다. 머글들의 신화는 대부분 신화일 뿐입니다.";
    else document.getElementById("check7").innerHTML="오답입니다.";
}

function Question8(){
    if(form8.magicQ8[0].checked==true) document.getElementById("check8").innerHTML="정답입니다. ";
    else document.getElementById("check8").innerHTML="오답입니다.";
}

function Question9(){
    if(form9.magicQ9[2].checked==true) document.getElementById("check9").innerHTML="정답입니다. 스투페파이는 기절주문이며 보편적인 공격마법이지만 저주마법으로 분류될 정도로 큰 위력을 가지고 있지 않습니다.";
    else document.getElementById("check9").innerHTML="오답입니다.";
}

function Question10(){
    if(form10.magicQ10[3].checked==true) document.getElementById("check10").innerHTML="정답입니다. 위석은 염소의 위에서 꺼낸 돌이며 정제하지 않고 그대로 목구멍에 쑤셔 넣으면 모든 독에 강력한 해독제 작용을 합니다.";
    else document.getElementById("check10").innerHTML="오답입니다. 혼혈왕자의 책을 정독하십시오.";
}

function Question11(){
    if(form11.magicQ11[3].checked==true) document.getElementById("check11").innerHTML="정답입니다. 마력 강화제에는 생강뿌리대신 고추냉이가 사용됩니다.";
    else document.getElementById("check11").innerHTML="오답입니다. 한번더 마력 강화제를 제조해보십시오.";
}

function Question12(){
    if(form12.magicQ12[0].checked==true) document.getElementById("check12").innerHTML="정답입니다. 아모텐시아의 존재의의에 대해서도 생각해세요.";
    else document.getElementById("check12").innerHTML="오답입니다. 아모텐시아는 매년 기출되는 필수문제이므로 한번더 공부하십시오.";
}

function Question13(){
    if(form13.magicQ13[0].checked==true) document.getElementById("check13").innerHTML="정답입니다. 현재 재조명받고 있는 웬델린의 여러 기행들을 기억해두세요.";
    else document.getElementById("check13").innerHTML="오답입니다. 『웬델린의 기행』은 그리 두껍지 않으니 가볍게 정독해보세요.";
}

function Question14(){
    if(form14.magicQ14[1].checked==true) document.getElementById("check14").innerHTML="정답입니다.";
    else document.getElementById("check14").innerHTML="오답입니다.";
}

function Question15(){
    if(form15.magicQ15[3].checked==true) document.getElementById("check15").innerHTML="정답입니다.";
    else document.getElementById("check15").innerHTML="오답입니다.";
}

function Question16(){
    if(form16.magicQ16[2].checked==true) document.getElementById("check16").innerHTML="정답입니다. 맨드레이크에 대해서는 실습시험때도 자주 출제되므로 충분히 숙지하세요.";
    else document.getElementById("check16").innerHTML="오답입니다.";
}

function Question17(){
    if(form17.magicQ17[1].checked==true) document.getElementById("check17").innerHTML="정답입니다.";
    else document.getElementById("check17").innerHTML="오답입니다.";
}

function Question18(){
    if(form18.magicQ18[1].checked==true) document.getElementById("check18").innerHTML="정답입니다. 움직이며 소음을 낼 수 있는 '반 지각' 마법 식물은 스크리치스냅입니다.";
    else document.getElementById("check18").innerHTML="오답입니다. '악마의 덫'은 소음을 내지 않고, 지각능력도 없습니다.";
}