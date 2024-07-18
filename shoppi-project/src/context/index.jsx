import { createContext, useState } from "react";

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
    }}>
      {children}
    </ShoppingCardContext.Provider>
  )
}