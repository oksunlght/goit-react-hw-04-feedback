import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <ul>
      <Item>
        <p>Good: {good}</p>
      </Item>
      <Item>
        <p>Neutral: {neutral}</p>
      </Item>
      <Item>
        <p>Bad: {bad}</p>
      </Item>
      <Item>
        <p>Total: {total}</p>
      </Item>
      <Item>
        <p>Positive feedback: {positivePercentage} %</p>
      </Item>
    </ul>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
