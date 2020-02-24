import {connect} from 'react-redux';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';
import OrderForm from '../OrderForm/OrderForm';


const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: arg => dispatch(setOrderOption(arg)),
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
