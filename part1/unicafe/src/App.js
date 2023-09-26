import { useState } from 'react'
// a proper place to define a component
const Button=(props)=>{
  const {handleClick,text}=props
  return(<button onClick={handleClick}>{text}</button>)

}
const StatisticLine=(props)=>{
  const {text,value,rtext}=props
  return(
    <p>{text} {value} {rtext}</p>
  )

}
const Statistics = (props) => {
  const {good,neutral,bad}=props
  if (good+neutral+bad===0){
    return(
      <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
      
    </div>

    )

  }

  return(
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good-bad} />
      <StatisticLine text="average" value={(good-bad)/(good+neutral+bad)} />
      <StatisticLine text="positive" value={good*100/(good+neutral+bad)} rtext="%" />

    </div>
  )
  // ...
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <div>
          <Button handleClick={()=>{setGood(good+1)}} text="good" />
          <Button handleClick={()=>{setNeutral(neutral+1)}} text="neutral" />
          <Button handleClick={()=>{setBad(bad+1)}} text="bad" />

        </div>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App