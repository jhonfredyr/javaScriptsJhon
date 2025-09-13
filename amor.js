function anagrama ()
{
letras=["a","m","o","r"]
respuesta =[]
 for(let i =3;i>0;i--){
for(let j=0;j<=3;j++){
respuesta[j]=letras[i] 
i=i-1
}
console.log(respuesta);
}
}
anagrama() 