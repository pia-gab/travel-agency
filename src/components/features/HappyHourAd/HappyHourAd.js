import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';
import { formatTime } from '../../../utils/formatTime';


class HappyHourAd extends React.Component {
  constructor(){
    super();
    setInterval(() =>
      this.forceUpdate(),  1000);
  }

  static propTypes = {
    title: PropTypes.string,
    descrpt: PropTypes.string,
  }

  static defaultProps = {
    title: 'Happy Hour',
    promoDescription: 'is now!',
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }


  render() {
    const countDown = this.getCountdownTime();
    const { title, descrpt } = this.props;
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.promoDescription}>{countDown > 82800 ? descrpt: formatTime(countDown)}</p>
      </div>
    );
  }
}

export default HappyHourAd;
