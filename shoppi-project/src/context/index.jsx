
import { createContext, useState } from "react";

export const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({children}) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  return (
    <ShoppingCardContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
    }}>
      {children}
    </ShoppingCardContext.Provider>
  )
}