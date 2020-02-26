import React from 'react';
import PropTypes from 'prop-types';
import OrderOption from '../OrderSummary/OrderSummary';
import OrderSummary from '../OrderOption/OrderOption';
import {Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
import Button from '../../common/Button/Button';


const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

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
    <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>
    {console.log(Button)};
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
