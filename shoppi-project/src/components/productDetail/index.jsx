import { useContext } from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCardContext } from "../../context"
import "./style.css"

const ProductDetail = () => {
  const context = useContext(ShoppingCardContext);

  return (
    <aside
    className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-semibold text-2xl">Detail</h2>
        <div>
          <XMarkIcon
          className="size-6 text-black cursor-pointer"
          onClick={() => context.closeProductDetail()}>  </XMarkIcon>
        </div>
      </div>
      <figure className="p-6">
          <img className="w-full h-full rounded-lg" 
          src={context.productShow.image}
          alt={context.productShow.title} />
        </figure>
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2">${context.productShow.price}</span>
          <span className="font-medium text-md mb-1">{context.productShow.title}</span>
          <span className="font-light text-sm">{context.productShow.description}</span>
        </p>
    </aside>
  )
}

export default ProductDetail;

