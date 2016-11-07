// Первая
function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) 
  {
    result *= x;
  }

  return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n <= 0) 
{
  console.log('Степень ' + n +
    'не поддерживается, введите целую степень, большую 0'
  );
} 

else {
  console.log( pow(x, n) );
}

//Вторая
var userName = []

for ( i = 0; i < 5 ; i++) 
{
  var k = i + 1;
  var name = prompt( 'введите 5  имен для доступа, имя №' + k );
  if (name.length == 0 || typeof(name)=='undefined' || name=='null' ) {
    alert(  'неправильное имя');
    break;
  }
  userName.push( name );  
}

var logName = prompt( 'введите  свое имя' ) || 'noname';

if (logName.length == 0 || typeof(logName)=='undefined' || logName=='null' ) {
    alert( 'неправильное имя');
  }

for ( i = 0; i < 5 ; i++) {
    if ( userName[i] == logName ) {
    var logUserName = 1;
    break;    
    } else{
    var logUserName = 0;
    }
  }

if ( logUserName )  {
  alert( logName +', вы успешно вошли');
  } else{
  alert(logName +' нет в списке');
}
