/* eslint-disable react/prop-types */
import UpdateItemQuantity from '../Cart/UpdateItemQuantity';
import { useSelector } from 'react-redux';
import { getCurrentQuantity } from '../Cart/cartSlice';


import { formatCurrency } from '../../Utilities/helpers';
import DeleteBtn from './DeleteBtn';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity=useSelector(getCurrentQuantity(pizzaId))

  

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteBtn pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
