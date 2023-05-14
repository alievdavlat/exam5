import React, { useContext, useEffect, useRef } from 'react'
import './LikedProducts.css'
import { ProductsCart } from '../../components'
import { context, likedProducts } from '../../App'

function LikedProducts() {
  const [producst, setProducts, showLiked, setShowLiked, likeCount, setLikeCount] = useContext(context)
  const ref  = useRef()

useEffect(() => {
    setLikeCount(ref.current.children?.length);
},[])
 return (
    <div className='container'>
      <div className="likedProducts" ref={ref}>
        {
          likedProducts.map((item, idx) => <ProductsCart key={idx}  {...item}/>)
        }
      </div>
        
    </div>
  )
}

export default LikedProducts
