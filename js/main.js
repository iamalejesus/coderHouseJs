
for (let i = 1; i <= 100; i++) {
    let nombre = prompt("Ingresar nombre:","Escriba Salir para salir del programa");
    alert(" Asiento  N° "+i+" Nombre: "+nombre);
    if (nombre=="Salir"){
        break;   
    }
}
