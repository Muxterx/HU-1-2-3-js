let username = prompt("Ingresa el nombre:");

let userage = prompt("Ingresa tu edad:");

let agenumber = Number(userage);
if (isNaN(agenumber)) {
    console.error("Eror: Ingrese una edad valida en numeros");
    alert("Erorr: Ingresa una edad valida en  numeros");
}else {
    if (agenumber <18) {
      alert(
        "hola " + username + 
        ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!"
      );
    } else {
      alert(
        "hola" + username +
        ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!"
     );
    }
}