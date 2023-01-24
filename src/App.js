import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)

  const Calculate = (e)=>{
    e.preventDefault()
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight/10
    let gramsLeft = grams - (burning*time)
    let BAlevel = undefined
    if(gender==="male"){
      BAlevel = gramsLeft/(weight*0.7)
    }else{
      BAlevel = gramsLeft/(weight*0.6)
    }
    setResult(BAlevel)
    if(BAlevel<0){
      setResult (0)
    }
  }
  return (
    <>
    <h3>Calculating blood alcohol level</h3>
    <form onSubmit={Calculate}>
      <div>
        <label >Weight</label>
        <div>
          <input onChange={e=>setWeight(e.target.value)} type="number" />
        </div>
      </div>
      <div>
        <label >Bottles</label>
        <div>
          <input onChange={e=>setBottles(e.target.value)} type="number" />
        </div>
      </div>
      <div>
        <label >Time</label>
        <div>
          <input onChange={e=>setTime(e.target.value)} type="number" />
        </div>
        <div>
          <label >Gender:</label>
        </div>
        <input type="radio" name="gender" value="male" onChange={e=>setGender(e.target.value)} defaultChecked /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e=>setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>
        <ouput>{result.toFixed(2)}</ouput>
      </div>
      <button>Calculate</button>
    </form>
    
    </>
  );
}

export default App;
