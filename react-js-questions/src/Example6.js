import React, {useState} from "react";


function Example6() {
  const [counter, setCounter] = useState(0);
  function incrementCounter(counter) {
	setCounter(counter + 1);
  
 
  }
   return (
	<div>
  	<button onClick={incrementCounter}>Increment</button>
  	<p>Counter: 0</p>
	</div>
  );
}

  export default Example6;