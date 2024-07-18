import { useContext } from "react"
import { ShoppingCardContext } from "../../context"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom"
import Layout from '../../components/layout'
import OrderCard from "../../components/orderCard"

function MyOrder() {
  const context = useContext(ShoppingCardContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1 )
  if (index === "last") index = context.order?.length - 1 
  // console.log(index)

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to={"/my-orders"} className="absolute left-0">
          <ChevronLeftIcon className="size-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {
          context.order?.[index]?.product.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder