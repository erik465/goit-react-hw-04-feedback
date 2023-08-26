import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import {Statistics} from './Statistics/Statistics'
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import React, {useState} from 'react'

const App = () => {
  const [goodFeedback, setGoodFeedback] = useState(0)
  const [badFeedback, setBadFeedback] = useState(0)
  const [neutralFeedback, setNeutralFeedback] = useState(0)

  const onLeaveFeedback = (type) => {
    switch (type) {
        case 'good':
            setGoodFeedback(prevState => prevState + 1)
            break;
        case 'bad':
            setBadFeedback(prevState => prevState +1)
            break;
        case 'neutral':
            setNeutralFeedback(prevState => prevState +1)
            break;
        default:
            console.log('Unknown')
            break;
    }
  }

  let total = goodFeedback + badFeedback + neutralFeedback;
  let posPercent = goodFeedback / total * 100;

  return (
    <div id="app">
        <Section title="Please leave a feedback">
            <FeedbackOptions options={['good', 'bad', 'neutral']} onLeaveFeedback={onLeaveFeedback}/>
        </Section>
        <Section title='Statistics'>
          {total === 0 ?<Notification message='There is no feedback'/> : <Statistics good={goodFeedback} bad={badFeedback} neutral={neutralFeedback} total={total} positivePercentage={Math.round(posPercent)}/>}
        </Section>
      </div>
  )
}

export default App
