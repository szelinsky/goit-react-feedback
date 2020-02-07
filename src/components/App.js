import React, { Component } from 'react';
import Section from './section/Section';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback-options/FeedbackOptions';
import Notification from './notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
	};

  handleChange = event => {
    console.dir(event.target);
    const name = event.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state; 
		
		return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.handleChange} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (<Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) :
          (<Notification message="No feedback given" />)}
        </Section>
      </>
    );
  }
}

export default App;
