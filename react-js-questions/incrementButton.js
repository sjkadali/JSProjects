<!DOCTYPE html>
<html>
<body>
<h1>JavaScript HTML Events</h1>
<h2>The onclick Attribute</h2>
 
 <button onclick="increment()">increment</button>
<h2 onclick="changeText(this)">Click on this text!</h2>
<h3 id="num"> 0</h3>

<script>
function changeText(id) {
  id.innerHTML = "Ooops!";
}

function increment() {
var e =document.getElementById("num");
var value = e.innerHTML;
++value;
e.innerHTML = value;
console.log(value);
}
</script>


</body>
</html>
