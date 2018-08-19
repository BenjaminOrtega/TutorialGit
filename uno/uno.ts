function checkPalindrome(inputString: string): boolean {
    let palindromo=[];
    let palindromoRev=[];
let original=inputString.toLowerCase();

for (let i = 0; i < original.length; i++) {
  if (original.charAt(i) !=" ") {
    palindromo.push(original.charAt(i));
  }

}
for (let i = 0; i <= original.length; i++) {
if (original.charAt(i) !=" ") {
    palindromoRev.push(original.charAt(i));
}

}
palindromo.reverse();
if (palindromo.every(function(v,i) {
  console.log(v+" "+palindromoRev[i]);
  return v === palindromoRev[i] } )) {
    return true
} else {
  return false
}

}


//segundo codigo y mejor respuesta

function checkPalindrome1(inputString: string): boolean {
  let vary:any;
  vary=inputString === inputString.split('').reverse().join('');
  document.write('<h2>'+vary+'</h2>');
      return vary;
  }
