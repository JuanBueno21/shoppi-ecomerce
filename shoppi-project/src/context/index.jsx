import { createContext, useState, useEffect } from "react";

export const ShoppingCardContext = createContext()
export const ShoppingCardProvider = ({ children }) => {

  //Shopping card: counter cart
  const [count, setCount] = useState(0)

  // Product detail: open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Product detail : show product
  const [productShow, setPoductShow] = useState({})

  // Shopping cart : add products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Checkout side menu: open/close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Shopping cart: order
  const [order, setOrder] = useState([])

  // Get products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(response => response.json())
      .then(data => {
        const transformedData = data.map(item => ({
          ...item,
          image: item.images[1]?.replace(/[\[\]"]/g, '') || ''
        }));
        setItems(transformedData);
      });
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory)
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_TITLE_AND_CATEGORY", items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy("BY_TITLE", items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

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
      setSearchByTitle,

      filteredItems,

      searchByCategory,
      setSearchByCategory,
    }}>
      {children}
    </ShoppingCardContext.Provider>
  )
}