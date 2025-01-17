var aa = 2025;
var mm = 1;
var dd = 31;
var hh = 15;
var mi = 30;

function definircontagemregressiva(ano, mes, dia, horas, minutos) {
  yr = ano;
  mo = mes;
  da = dia;
}
definircontagemregressiva(aa, mm, dd);

var ocasiao = "volta do meu momozinho 😔😔";
var message_on_ocasiao = "É HOJEEEEEE!!!";

var contagemRegressiva_largura = "510px";
var contagemRegressiva_altura = "200px";
var contagemRegressiva_color = "#ccffe1";
var abrirtags = '<font face="Verdana" size="5" color="#000000">';
var fechartags = "</font>";

var mesArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var contagemcruzada = "";

function start_countdown() {
  contagemcruzada = document.getElementById("countdownie");
  countdown();
}

window.onload = start_countdown;

function countdown() {
  var today = new Date();
  var futureDate = new Date(yr, mo - 1, da, hh, mi);

  var diff = futureDate - today;

  if (diff <= 0) {
    if (diff > -86400000) {
      contagemcruzada.innerHTML = abrirtags + message_on_ocasiao + fechartags;
    } else {
      contagemcruzada.innerHTML = abrirtags + "JÁ CHEGOOOOOOOOOU" + fechartags;
    }
    return;
  }

  var dday = Math.floor(diff / (1000 * 60 * 60 * 24));
  var dhour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var dmin = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var dsec = Math.floor((diff % (1000 * 60)) / 1000);

  contagemcruzada.innerHTML = `${abrirtags}${dday} dias, ${dhour} horas, ${dmin} minutos e ${dsec} segundos para a ${ocasiao}${fechartags}`;
  contagemcruzada.classList.add("countdown-style");

  setTimeout(countdown, 1000);
}
