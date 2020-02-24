import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
  <div className={styles.icons}>
    {required ? '' : (
      <div
        className	={styles.icon}
        onClick= {() => setOptionValue()}
      >
        <Icon name={'times-circle'}></Icon>none
      </div>
    )}
    {values.map(value => (
      <div
        className={styles.icon + (currentValue == value.id ? '' + styles.iconActive : '')}
        key={value.key} onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon}></Icon> {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;
