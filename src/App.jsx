import { useState } from 'react'
import './assets/style.css'

function App() {
  const [count,setCount] = useState(0)

  return (
    <>
      <div className="container text-center">
        <h1 className={`display-1 ${count == 0 && 'yellow'} ${count > 0 ? 'text-success' : 'text-danger'}`}>{count}</h1>
        <button onClick={()=>setCount(count-1)} className="btn btn-danger mx-2">Decrease</button>
        <button onClick={()=>setCount(0)} className="btn btn-warning mx-2">Reset</button>
        <button onClick={()=>setCount(count+1)} className="btn btn-success mx-2">Increase</button>
      </div>
    </>
  );
}

export default App;
  

