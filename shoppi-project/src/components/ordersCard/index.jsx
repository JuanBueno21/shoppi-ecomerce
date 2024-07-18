import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props


  return (
    <div className="flex justify-between items-center border border-black rounded-lg p-4 w-80 mb-4">
      <div className='flex w-full justify-between'>
        <p className='flex flex-col'>
          <span className='font-light'>18.07.24</span>
          <span className='font-light'>Articles: {totalProducts}</span>
        </p>
        <p className='flex gap-2 items-center'>
          <span className='font-medium text-3xl'>${totalPrice}</span>
          <ChevronRightIcon
            className="size-6 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  )
}

export default OrdersCard;