import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAdd extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    descrpt: PropTypes.string,
  }

  render() {
    const { title, descrpt } = this.props;
    return (
      <div className={styles.component}>
        <h3 className={'title'}>{title}</h3>
        <p className={'promoDescription'}>{descrpt}</p>
      </div>
    );
  }
}

export default HappyHourAdd;
