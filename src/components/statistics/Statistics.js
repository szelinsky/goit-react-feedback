import React from 'react';
import './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </>
);

export default Statistics;
