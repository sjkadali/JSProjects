import React, {useState, useEffect} from 'react';
import Example5 from './Example5';
import Example6 from './Example6';


function App() {
  const [count, setCount] = useState(0);
  const fruits =["orange","mango","pineapple","grapes","apple","banana"];
  const [value, setValue]= useState("");
  const name = "Claire";
 useEffect(() => {
	console.log("Component rendered successfully");
  }, []);

  const lstFruits = fruits.map(fruit => 
     <li>{fruit}</li>
  );

 function handleChange(e){
  setValue(e.target.value);
 }

 const increment = () => {
  setCount(count + 1)
}
return (
  <div>
  <Example5 name={'claire'} />
  <Example6 />
  </div>
)

/* return (
   <div>
    <input type="text" value={value} onChange={handleChange}></input>
    Entered Value: {value}</div>
  );
   */
   /* return (
	<div>
    <ul>{lstFruits}</ul>
  	<button onClick={() => setCount(count + 1)}>Click me</button>
  	<p>You clicked {count} times</p>
	</div>
  ); */
}
export default App;
