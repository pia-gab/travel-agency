export const formatTime = (param) => {
  if (param == null || isNaN(param) || param < 0 ) {
    return null;
  } else {
    let sec = Math.floor(param % 60) + '';
    sec = sec.padStart(2, '0');

    let mins = Math.floor((param/60) % 60) + '';
    mins = mins.padStart(2, '0');

    let hrs = Math.floor(param/3600) + '';
    mins = mins.padStart(2, '0');

    return hrs + ':' + mins + ':' + sec;
  }
};

