import React, { useContext } from 'react'
import './ProductsCart.css'
import { context, shoppingCart } from '../../App';
import { likedProducts } from '../../App';

function ProductsCart({id,name, proccesor, memory,screen,price,img,isLikded}) {
  const [producst, setProducts, showLiked, setShowLiked, setLikeCount] = useContext(context)



  const handleLiked = () => {
    if (!isLikded) {
      likedProducts.push({id,name, proccesor, memory,screen,price,img,isLikded:true})
      setProducts(p => p.map(item => item.id === id ? {...item,isLikded:true } : item))
    } else{
      setProducts(p => p.map(item => item.id === id ? {...item,isLikded:false } : item))

    }
  }
  const handleShop = () => {
    shoppingCart.push({id,name, proccesor, memory,screen,price,img})
  }


  React.useEffect(() => {
    localStorage.setItem('shop', JSON.stringify(shoppingCart))
  }, [handleShop])

  React.useEffect(() => {
    localStorage.setItem('liked', JSON.stringify(likedProducts))
  },[handleLiked])


  return (
    <div className='productCart' id={id}>
      <div className="product-cart__img">
        <img src={img} alt={name} />
      </div>

      <div className="productCart-info">
        <h5>{name}</h5>

        <div className='info'>
          <span>{proccesor}</span>
          <div>
          <span>({memory})</span>
          <span>{screen}</span>
          </div>
        </div>

        <span className='price'>
          <b>{price}</b>
          
        </span>

          <div className='karzinka'>
            <button onClick={() => handleShop()}>Karzinka</button> { showLiked ?  <span className={`${isLikded ? 'liked' : ''}`}><i className="fa-solid fa-heart" style={{ fontSize:"25px", cursor:"pointer"}}  onClick={() =>  handleLiked()}></i> </span> :  <i className="fa-solid fa-trash" style={{ fontSize:"25px", cursor:"pointer"}} onClick={() => setLikeCount(id)}></i>}
          </div>
      </div>

      
    </div>
  )
}

export default ProductsCart
