import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { viewActions } from '../../store/veiwLogic';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const total_cart_quantity = useSelector(state => state.cartval.totalQuantity);

  const showCartHandler = () => {
    dispatch(viewActions.toggleView());
  }
  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total_cart_quantity}</span>
    </button>
  );
};

export default CartButton;
