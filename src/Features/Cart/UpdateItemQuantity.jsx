/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from '../../Ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className='text-xs font-semibold'>{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
