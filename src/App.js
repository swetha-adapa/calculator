import React,{useState} from "react"
import './App.css'
function App() {
  const [input,setinput]=useState(0)
  const handler=(e)=>{
setinput(e.target.value)
  }
  const result=()=>{
    setinput(eval(input))
  }
  return (
<>

<div className="container">
<div className="main">
  <center>
    <div>
      <h1>Calculator</h1>
    </div>
<input type="text" value={input} name="input" onChange={handler} />
<button onClick={()=>{setinput('')}}>C</button>
<div>
<button onClick={()=>{setinput(input+"1")}}>1</button>
<button onClick={()=>{setinput(input+"2")}}>2</button>
<button onClick={()=>{setinput(input+"3")}}>3</button>
<button onClick={()=>{setinput(input+"/")}}>/</button>
</div>
<div>
<button onClick={()=>{setinput(input+"4")}}>4</button>
<button onClick={()=>{setinput(input+"5")}}>5</button>
<button onClick={()=>{setinput(input+"6")}}>6</button>
<button onClick={()=>{setinput(input+"-")}}>-</button>
</div>
<div>
<button onClick={()=>{setinput(input+"7")}}>7</button>
<button onClick={()=>{setinput(input+"8")}}>8</button>
<button onClick={()=>{setinput(input+"9")}}>9</button>
<button onClick={()=>{setinput(input+"*")}}>*</button>
</div>
<div>
<button onClick={()=>{setinput(input+".")}}>.</button>
<button onClick={()=>{setinput(input+"0")}}>0</button>
<button onClick={()=>{setinput(input+"+")}}>+</button>
<button onClick={result}>=</button>
</div>
</center>
</div>
</div>
</>
  );
}

export default App;