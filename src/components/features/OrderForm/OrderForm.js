import React from 'react';
import PropTypes from 'prop-types';
import OrderOption from '../OrderSummary/OrderSummary';
import OrderSummary from '../OrderOption/OrderOption';
import {Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';

const OrderForm = ({tripCost, options, setOrderOption} )=> (
  <Row>
    {pricing.map(option => (
      <Col key={option.id} md={4}>
        <OrderOption {...option} currentValue ={options[option.id]} setOrderOption={setOrderOption}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
