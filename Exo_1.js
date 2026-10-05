let nombre1 = 10;
let op = "+";
let nombre2 = 5;

switch (op) {
  case "+":
    console.log("nombre1 + nombre2");
    break;

  case "-":
    console.log(nombre1 - nombre2);
    break;

  case "*":
    console.log("nombre1 * nombre2");
    break;

  case "/":
    if (nombre2 === 0) {
      console.log("Erreur: divvision par zéro");
    } else {
      console.log("nombre1 / nombre2");
    }
    break;

  default:
    console.log("Erreur: opérateur inconnue");
    break;
}
