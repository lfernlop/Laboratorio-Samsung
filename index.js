function comprobarClave() {
	var clave = document.getElementById(“clave”);
	var clave2 = document.getElementById(“clave2”); 

	if (clave == clave2) {
		alert("La claves son iguales <br />");
	}
	else {
		alert("Las claves son distintas <br />");
	}
function Confirmar(){
    var retVal = confirm("¿Seguro desea continuar?");
    if( retVal == true ){
        document.write ("REGISTRO ALMACENADO");
        return true;
    }else{
        document.write ("NO SE GUARDÓ EL REGISTRO");
        return false;
    }
}