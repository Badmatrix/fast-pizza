/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from '../../Ui/Button';
import { deleteItem } from './cartSlice';

export default function DeleteBtn({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      delete
    </Button>
  );
}
