import { useContext } from 'react'
import Layout from '../../components/layout'
import Card from "../../components/Card"
import ProductDetail from '../../components/productDetail'
import { ShoppingCardContext } from "../../context"

function Home() {
  const context = useContext(ShoppingCardContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {

        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )

      } else {
        return (
          <div>Product Not Found</div>
        )
      }
    } else {
      return (
        context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-5">
        <h1 className="font-medium text-2xl">HOME</h1>
      </div>
      <input type="text" placeholder='Search a product'
        className='rounded-lg border border-grey w-80 p-4 mb-4 focus: outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg mb-5 mt-10'>
        {
          renderView()
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home

