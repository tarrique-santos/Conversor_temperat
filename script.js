document.getElementById("entrada").addEventListener('click', resultado);
document.getElementById("reiniciar").addEventListener('click', clean_tela);

let t_entrada;

document.getElementById("t_celsius").onchange=()=>t_entrada="t_celsius";
document.getElementById("t_fahrenheit").onchange=()=> t_entrada="t_fahrenheit";
document.getElementById("t_kelvin").onchange=()=>t_entrada="t_kelvin";
document.getElementById("t_rankine").onchange=()=>t_entrada="t_rankine";

function clean_tela(){
    document.getElementById("t_celsius").value="";
    document.getElementById("t_fahrenheit").value="";
    document.getElementById("t_kelvin").value="";
    document.getElementById("t_rankine").value="";
}
function resultado(){

  let t_celsius=document.getElementById("t_celsius").value;
  t_celsius=parseFloat(t_celsius);

  let t_fahrenheit=document.getElementById("t_fahrenheit").value;
  t_fahrenheit=parseFloat(t_fahrenheit);

  let t_kelvin=document.getElementById("t_kelvin").value;
  t_kelvin=parseFloat(t_kelvin);

  let t_rankine=document.getElementById("t_rankine").value;
  t_rankine=parseFloat(t_rankine);

  let resultC;
  let resultF;
  let resultK;
  let resultR;

  if(t_entrada=="t_celsius"){
    resultF=t_celsius*9/5+32;
    resultK=t_celsius+273.15;
    resultR=resultF+459.67;
    
    document.getElementById("t_fahrenheit").value=resultF;
    document.getElementById("t_kelvin").value=resultK;
    document.getElementById("t_rankine").value=resultR;

  }else if(t_entrada=="t_fahrenheit"){
    resultC=(t_fahrenheit-32)*5/9;
    resultK=resultC+273.15;
    resultR=t_fahrenheit+459.67;
    
    document.getElementById("t_celsius").value=resultC;
    document.getElementById("t_kelvin").value=resultK;
    document.getElementById("t_rankine").value=resultR;

  }else if(t_entrada=="t_kelvin"){
    resultK=t_kelvin;
    resultC=t_kelvin-273.15;
    resultF=resultC*9/5+32;
    resultR=resultF+459.67;
    
    document.getElementById("t_celsius").value=resultC;
    document.getElementById("t_fahrenheit").value=resultF;
    document.getElementById("t_rankine").value=resultR;

  }else if(t_entrada=="t_rankine"){
    resultF=t_rankine-459.67
    resultC=(resultF-32)*5/9;
    resultK=resultC+273.15;
   
    document.getElementById("t_celsius").value=resultC;
    document.getElementById("t_fahrenheit").value=resultF;
    document.getElementById("t_kelvin").value=resultK;
  }
  document.getElementById("t_celsius").innerHTML=resultC;
  document.getElementById("t_fahrenheit").innerHTML=resultF;
  document.getElementById("t_kelvin").innerHTML=resultK;
  document.getElementById("t_rankine").innerHTML=resultR;

  if(resultK==0||resultR==0){
      clean_tela();
  }
}