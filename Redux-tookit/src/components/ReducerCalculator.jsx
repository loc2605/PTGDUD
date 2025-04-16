import React, { useReducer } from 'react'

const initialState = { result: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { result: state.result + action.payload }
    case 'SUBTRACT':
      return { result: state.result - action.payload }
    default:
      return state
  }
}

function ReducerCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>Reducer Calculator</h2>
      <div>
        <button onClick={() => dispatch({ type: 'ADD', payload: 1 })}>Cộng</button>
        <button onClick={() => dispatch({ type: 'SUBTRACT', payload: 1 })}>Trừ</button>
      </div>
      <h3>Kết quả là: {state.result}</h3>
    </div>
  )
}

export default ReducerCalculator
