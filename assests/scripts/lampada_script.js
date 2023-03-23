var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
   return lamp.src.indexOf('3-quebrada') > -1
}

function ligar(){
   if (!estaQuebrada()){
      lamp.src = 'assests/img/1-ligada.svg'
   }   
}

function desligar(){
   if (!estaQuebrada()){
      lamp.src = 'assests/img/2-desligada.svg'
   }
}

lamp.addEventListener ('click', Quebrar)
function Quebrar(){
   lamp.src = 'assests/img/3-quebrada.svg'
}