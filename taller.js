let cara = 6 ;
let area =(cara >0)? ( cara * cara):"la medida de la cara tiene que ser mayor a 0"
console.log(area);


let cara1 =parseFloat (prompt("digite una medida de un lado del caudrado"));
let cara2 =parseFloat (prompt("digite la medida del otro lado del cuadrado "));
cara1 = parseInt( cara1 );
cara2 = parseInt( cara2);
let area1 = (cara1 >0 && cara2>0)? (cara1 * cara2) :"la medida de la cara tiene que ser mayor a 0"
console.log(area1)
alert(" el area del cuadrado es "+ area1)