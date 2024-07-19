import { createContext, useState, useEffect } from "react";

export const ShoppingCardContext = createContext()
export const ShoppingCardProvider = ({ children }) => {

  //shopping card: counter cart
  const [count, setCount] = useState(0)

  // product detail: open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // product detail : show product
  const [productShow, setPoductShow] = useState({})

  // shopping cart : add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // checkout side menu: open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // shopping cart: order
  const [order, setOrder] = useState([])

  // get products
  const [items, setItems] = useState(null)

  // get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)
console.log("searchByTitle: ", searchByTitle);

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
    <ShoppingCardContext.Provider value={{
      count,
      setCount,

      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,

      productShow,
      setPoductShow,

      cartProducts,
      setCartProducts,

      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,

      order,
      setOrder,

      items,
      setItems,

      searchByTitle,
      setSearchByTitle
    }}>
      {children}
    </ShoppingCardContext.Provider>
  )
}