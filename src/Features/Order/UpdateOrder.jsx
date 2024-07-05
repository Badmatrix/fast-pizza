import { useFetcher } from 'react-router-dom';
import Button from '../../Ui/Button';
import { updateOrder } from '../../Services/apiRestaurant';

export default function UpdateOrder() {
    const fetcher = useFetcher();
    
  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <Button type="primary">make priority</Button>
    </fetcher.Form>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ params }) {
    const data = { priority: true }
    await updateOrder(params.orderId,data)

    return null
} 