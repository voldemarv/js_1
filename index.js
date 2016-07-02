function checkAge (a,b,c) {
    if (a!= 0 && b!= 0 && c!=0 )  {
       var duskrum = Math.sqr(b) - 4 * a * c;
       if (duskrum > 0 ) {
           var x1 = (-b + Math.sqrt(duskrum))/(2*a);
           var x2 = (-b - Math.sqrt(duskrum))/(2*a);
           alert ('x1=', x1, 'x2=', x2);
           }
        else if (duskrum == 0) {
            var x = -b / (2 * a);
            alert('x1=x2=', x)
        }
     }
     else if (a!=0 && b==0 && c==0) {
        alert('x=0');
     }
     else if (a!= 0 && b! = 0 && c==0) {
         var x1 = 0;
         var x2 = -b/a;
         alert('x1=0, x2=', x2)
     }
var a = Number(prompt('Enter a koef'));
var b = Number(prompt('Enter b koef'));
var c = Number(prompt('Enter c koef'));
var ageString = checkAge (age);
alert(ageString);
