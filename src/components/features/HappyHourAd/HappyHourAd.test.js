import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promDescrpt: '.promoDescription',
};

const mockProps = {
  title: 'mocky mock title',
  descrpt: 'mocky mock description',
};

describe('Compo HappyHourAd', () => {
  it('should render compo', () => {
    const component = shallow(<HappyHourAd/>);
    expect(component).toBeTruthy();
  });
  it ('should check if title and decrpt render', () => {
    const component = shallow(<HappyHourAd/>);
    expect(component.exists(select.title).toEqual(true));
    expect(component.exists(select.promDescrpt).toEqual(true));

  });
  it ('should check if title has props content', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);

    expect(component.find(select.title).text()).toEqual(mockProps.title);
    expect(component.find(select.promDescrpt).text()).toEqual(mockProps.descrpt);
  });
});

describe('Component HappyHourAd with mocked Date', () => {
  const customDate = '2019-05-14T11:57:58.135Z';
  // eslint-disable-next-line no-unused-vars
  const trueDate = Date;

  // eslint-disable-next-line no-unused-vars
  const mockDate = class extends Date {
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
});

