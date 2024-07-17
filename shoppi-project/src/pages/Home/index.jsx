import { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import Card from "../../components/Card"
import ProductDetail from '../../components/productDetail'

function Home() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => {
        const transformedData = data.map(item => ({
          ...item,
          image: item.images[0]?.replace(/[\[\]"]/g, '') || ''
        }));
        setItems(transformedData);
      });
  }, []);

  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(item => {
            return <Card key={item.id} data={item} />
          })
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home
