import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promDescrpt: '.promoDescription',
};

const mockProps = {
  title: 'mock title',
  descrpt: 'mock description',
};

beforeAll(() => {
  const utilsModule = jest.requireActual('../../../utils/formatTime.js');
  utilsModule.formatTime = jest.fn(seconds => seconds);
});

describe('Compo HappyHourAd', () => {
  it('should render compo', () => {
    const component = shallow(<HappyHourAd/>);
    expect(component).toBeTruthy();
  });
  it ('should check if title and decrpt render', () => {
    const component = shallow(<HappyHourAd/>);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promDescrpt)).toEqual(true);

  });
  it ('should check if title has props content', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);

    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promDescrpt).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`,  () => {
    jest.useFakeTimers();
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);

    const newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + delaySeconds);
    global.Date = mockDate(newTime.getTime());

    jest.advanceTimersByTime(delaySeconds * 1000);
    const renderedTime = component.find(select.promDescrpt).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers();
  });
};
describe('Component HappyHourAd description should be formattedTime', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});
describe('Component HappyHourAd description should be formattedTime after a delay', () => {
  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
});

describe('Component HappyHourAdd description should be from props', () => {
  checkDescriptionAtTime('12:00:00', mockProps.descrpt);
  checkDescriptionAtTime('12:59:59', mockProps.descrpt);
});
describe('Component HappyHourAd description should be from props after a delay', () => {
  checkDescriptionAfterTime('11:57:58', 122, mockProps.descrpt);
});
