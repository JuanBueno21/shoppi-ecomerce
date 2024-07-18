import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCardContext } from "../../context"
import OrderCard from "../../components/orderCard"
import "./style.css"

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCardContext);
  // console.log("CART: ", context.cartProducts);

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-semibold text-2xl">My Order</h2>
        <div>
          <XMarkIcon
            className="size-6 text-black cursor-pointer"
            onClick={() => context.closeCheckoutSideMenu()}>  </XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
      {context.cartProducts.map(product => (
        <OrderCard 
        key={product.id}
        title={product.title} 
        imageUrl={product.image} 
        price={product.price} 
        />
      ))}
      </div>
    </aside>
  )
}

export default CheckoutSideMenu;

