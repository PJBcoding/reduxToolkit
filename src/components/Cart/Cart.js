import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {

  const cartItem = useSelector(state => state.cartval.items);
  const total_price = useSelector(state => state.cartval.totalCartPrice);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItem.map((item) => {
          return (
            <CartItem key={item.id} item={{ title: item.title, quantity: item.quantity, totalPrice: item.totalPrice, price: item.price, description: item.description, id: item.id }}
            />
          )
        })}

      </ul>
      <div> <h1>Total cart Amount : {'    '} ₹{total_price} </h1>  </div>
    </Card>
  );
};

export default Cart;
