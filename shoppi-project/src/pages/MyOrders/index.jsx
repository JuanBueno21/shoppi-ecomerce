import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from '../../components/layout'
import { ShoppingCardContext } from "../../context"
import OrdersCard from "../../components/ordersCard"

function MyOrders() {
  const context = useContext(ShoppingCardContext)
  // console.log(context.order)


  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-5">
        <h1 className="font-medium text-2xl">My Orders</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders
