/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Ui/Button';
import { formatCurrency } from '../../Utilities/helpers';
import { addItem, getCurrentQuantity } from '../Cart/cartSlice';
import DeleteBtn from '../Cart/DeleteBtn';
import UpdateItemQuantity from '../Cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantity(id));
  // console.log(currentQuantity)
  function handleAddCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  const isInCart=currentQuantity > 0

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex flex-1 flex-grow flex-col pt-0.5 capitalize">
        <p className="text-sm font-medium italic text-stone-500">{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div className="mt-auto items-center justify-between sm:flex">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className='flex gap-2'>
              <UpdateItemQuantity currentQuantity={currentQuantity} pizzaId={id}/>
              <DeleteBtn pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddCart}>
              add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
