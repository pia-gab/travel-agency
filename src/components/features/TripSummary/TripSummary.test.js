import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Compo TripSumm', () => {
  it ('should generate link to its adress', () => {
    const id = 'abc';
    const component = shallow(<TripSummary id={id} />);
    const urlLink = component.find('.link').prop('to');
    expect(urlLink).toEqual(`/trip/${id}`);
    ///console.log(component.debug());
  });
  it ('should check src and alt in images', () => {
    const expectedImg = 'image.jpg';
    const expectedAlt = 'description';
    const component = shallow(<TripSummary image={expectedImg} name={expectedAlt}/>);

    expect(component.find('img').prop('src')).toEqual(expectedImg);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
    //console.log(component.debug());
  });
  it ('should render name cost and days', () => {
    const expectedName = 'name';
    const expectedCost = '10000';
    const expectedDays = 12;

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays}/>);

    expect(component).toBeTruthy();
    //console.log(component.debug());
  });
  it('should throw err wout req props', ()=>{
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags in order', () => {
    const expectedArray = ['uno', 'due', 'tre'];
    const component = shallow(<TripSummary tags={expectedArray} />);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedArray[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedArray[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedArray[2]);
    //console.log(component.debug());
  });

  it('should not render div if empty array', () => {
    const expectedArr = [];
    const component = shallow(<TripSummary tags={expectedArr} />);

    expect(component).find('.tags').toEqual({});
    //console.log(component.debug());
  });
});
