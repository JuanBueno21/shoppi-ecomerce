import { useContext } from "react"
import { ShoppingCardContext } from "../../context"
import Layout from '../../components/layout'
import OrderCard from "../../components/orderCard"

function MyOrder() {
  const context = useContext(ShoppingCardContext)
  console.log(context.order?.slice(-1)[0])

  return (
    <Layout>
      My Order
      <div className="flex flex-col w-80">
        {
          context.order?.slice(-1)[0]?.product.map(product => (
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