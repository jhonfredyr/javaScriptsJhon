// dada la dad de la perona clasificala en infantil (0-12) adolecente(13-17) adulto (18-59) adulto mayor (+60)
let edad = parseInt( prompt ("digite la edad"));
if((edad>0) && (edad <=12)){
    alert ("infantil");
}


else if((edad>=13) && (edad<=17)){
    alert ("adolecente");
}

else if  ((edad>=18) && (edad<=59)){
    alert("adulto");
}
else if (edad>=60){
    alert("adulto mayor");
}
else { 
    "una edad real animal"
}
// operador ternario
(edad>=0 && edad <= 12)? alert("infantil"):(edad>=13 && edad <=17)?alert("adolecente"):(edad>=18 && edad <=59)? alert("adulto"):(edad >=60)?alert("adulto mayor"):alert("digite la edad bien omee")