import { useState } from 'react'
import './App.css'

function App() {
var [a, setA] = useState(0);
var [b, setB] = useState(0);
var [result, setResult] = useState(0);
var [operator, setOperator] = useState('');

function handleChangeA(e){
  setA(e.target.value)
}

function handleChangeB(e){
  setB(e.target.value)
}
function handleRadioChange(e){
  setOperator(e.target.value)
}
function handleClick(){
  if (operator=='+')
    setResult(parseInt(a) + parseInt(b))
  else if (operator=='-')
    setResult(parseInt(a) - parseInt(b))
  else if (operator=='*')
    setResult(parseInt(a) * parseInt(b))
  else if (operator=='/')
    setResult(parseInt(a) / parseInt(b))
}
  return (
    <>
  <input onChange={handleChangeA} placeholder='Nhập a' type="text" />
  <br />
  <input onChange={handleChangeB} placeholder='Nhập b' type="text" />
  <br />
  <input type="radio" onChange={handleRadioChange} value='+' name='group'/><span>+</span>
  <input type="radio" onChange={handleRadioChange} value='-' name='group'/><span>-</span>
  <input type="radio" onChange={handleRadioChange} value='*' name='group'/><span>*</span>
  <input type="radio" onChange={handleRadioChange} value='/' name='group'/><span>/</span>
  <br />

  <button onClick={handleClick}>Tính</button>
  <br />
  <span name='kq'>Kết quả là: {result}</span>
    </>
  )
}

export default App
