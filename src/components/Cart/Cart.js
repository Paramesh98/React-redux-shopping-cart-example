import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

const Cart = ({ items, currency, total, removeFromCart }) => {
  return (
    <div>
      <h2>Shoppoing Cart</h2>
      <div className="cart">
        <div className="panel panel-default">
          <div className="panel-body">
            {items.length > 0 && (
              <div className="cart_body">
                {items.map(item => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onClick={() => removeFromCart(item.id)}
                  />
                ))}
              </div>
            )}

            {items.length === 0 && (
              <div className="alert alert-info">Cart is empty</div>
            )}
            <div className="cart__total">
              Total: {total} {currency}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Cart.PropTypes = {
  item: PropTypes.array,
  total: PropTypes.number,
  currency: PropTypes.string,
  removeFromCart: PropTypes.func.isRequired
};

export default Cart;
