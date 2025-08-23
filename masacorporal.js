let peso = parseFloat(prompt ( "dijite el peso  " ));
let estatura =parseFloat(prompt("dijite su estatura "));
IMC = peso / (estatura * estatura ) ;
if ( IMC < 18.5){
    alert (" bajo peso" + IMC );
} 
 else if(IMC > 18.5 && IMC < 25 ){
    alert("peso normal" + IMC);
 } 
 else if(IMC >= 25 && IMC < 30 ) {
    alert ("sobrepeso" + IMC);
 }
 else if (IMC >=30 ){
    alert(" obeso" + IMC);
 } 