import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({currentValue, setOptionValue}) => (
  <div>
    <input
      type="text"
      value={currentValue}
      className={styles.input}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
    </input>
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  type: PropTypes.string,
};

export default OrderOptionText;
