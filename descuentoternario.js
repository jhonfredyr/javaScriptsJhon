let compra= parseFloat (prompt("digite el valor de la compra"));
 des1 =(compra * 10 )/ 100;
 des2= ( compra *20 )/100;
vcompra=compra - des1;
compra2=compra - des2;
(compra >100 )? alert("si hay descuento"+ vcompra):
(compra>200 )? alert("si hay descuento"+ compra2)
: alert ("no hay descuento");