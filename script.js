function myFunction() {
  var x = Number(document.getElementById('int1').value);
  var y = Number(document.getElementById('int2').value);
  document.getElementById('demo1').innerHTML = x + " = first integral";
  document.getElementById('demo2').innerHTML = y + " = second integral";
  if(x > y) {
    window.alert(x + ' is bigger');
  }else if (x == y) {
    window.alert(x + '&'+ y + ' are equal');
  } else {
    window.alert(y + ' is bigger')
  }
}