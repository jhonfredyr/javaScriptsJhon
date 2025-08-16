let compra= parseFloat (prompt("digite el valor de la compra"));
 des1 =(compra * 10 )/ 100
 des2= ( compra *20 )/100
vcompra=compra - des1
compra2=compra - des2
if (compra >=100 ){
 alert("su valor a pagar es "+ vcompra)
}
else if(compra>=200){
    alert("su valor a pagar es " +compra2)
}

else alert("no hay descuento")