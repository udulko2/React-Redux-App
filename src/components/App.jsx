import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from '../reducers/reposReducer'
import './app.less'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.repos.count)

  function handleCountClick() {
    dispatch(setCount(5))
  }

  return (
    <div className="app">
      <button onClick={handleCountClick}>COUNT</button>
      <div>{count}</div>
    </div>
  )
}

export default App;