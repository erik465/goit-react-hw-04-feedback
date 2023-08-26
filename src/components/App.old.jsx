/*import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import {Statistics} from './Statistics/Statistics'
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import React, { Component } from "react";
import ReactDOM from "react-dom";


export class App extends Component {
  state = {
    good : 0,
    bad : 0,
    neutral: 0,
  };


  onLeaveFeedback = (type) =>{
    this.setState(prevState =>{
           return {
             ...prevState,
             [type] : prevState[type] +1
          }
      })
  } 

  

  render() {
    let total = this.state.good + this.state.bad + this.state.neutral;
    let posPercent = this.state.good / total * 100;


    return (
      <div id="app">
        <Section title="Please leave a feedback">
            <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title='Statistics'>
          {total === 0 ?<Notification message='There is no feedback'/> : <Statistics good={this.state.good} bad={this.state.bad} neutral={this.state.neutral} total={total} positivePercentage={Math.round(posPercent)}/>}
        </Section>
      </div>
  );
  }
  
};

ReactDOM.render(<App />, document.getElementById("root"));*/


