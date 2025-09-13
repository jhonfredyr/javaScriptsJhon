function buscar (vocalb ){
let vocales =["a","e","i","o","u"]
for(let i=0;i<vocales.length;i++){
if (vocalb==vocales[i]){
alert('una vocal'+ vocalb);   
}
else {
alert('tu hermana')

}

}
}
let b=prompt('coloque una vocal');
buscar()