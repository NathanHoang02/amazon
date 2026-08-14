import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts} from './checkout/loadProducts.js';
//import '../data/cart-class.js';
//import '../data/car.js';
// import '../data/backend-practice.js';

loadProducts(() => 
{
  renderOrderSummary();
  renderPaymentSummary();
});
