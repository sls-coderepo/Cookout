let bandNumber = 0;

function bandSignUp(bandName) {
  bandNumber++;
  return bandNumber + " " + bandName;
}
console.log(bandSignUp("Beatles"));
console.log(bandSignUp("Underdogs"));
