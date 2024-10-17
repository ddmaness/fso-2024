import { useState } from 'react'

const calculateTotal = (arr) => arr.reduce((prev, next) => prev + next, 0)

const Header = ({text}) => <h1>{text}</h1>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({category, value}) => <p>{category} {value}</p>

const SubHeader = ({text}) => <h2>{text}</h2>

const AverageScore = ({scores}) => {
  const totalFeedback = calculateTotal(Object.values(scores))
  const average = (scores.good - scores.bad) / totalFeedback
  return (
    <p>average {isNaN(average) ? 0 : average}</p>
  )
}

const PercentPositive = ({scores}) => {
  const totalFeedback = calculateTotal(Object.values(scores))
  const percent = scores.good / totalFeedback * 100
  return (
    <p>positive {isNaN(percent) ? 0 : percent}%</p>
  )
}

const Statistics = ({scores}) => {
  return (
    calculateTotal(Object.values(scores)) > 0 ?
    <>
      <SubHeader text='statistics' />
      <StatisticLine category='good' value={scores.good} />
      <StatisticLine category='neutral' value={scores.neutral} />
      <StatisticLine category='bad' value={scores.bad} />
      <PercentPositive scores={scores} />
      <AverageScore scores={scores} />
    </> : <p>No Data</p>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Statistics scores={{good, neutral, bad}} />
    </div>
  )
}

export default App