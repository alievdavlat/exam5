import React, { useContext } from 'react'
import './ProductsCart.css'
import { context, shoppingCart } from '../../App';
import { likedProducts } from '../../App';
import { useDispatch } from 'react-redux';
import { setItem } from '../../redux/slices/singlePageSlice';
import { Link } from 'react-router-dom';

function ProductsCart({id,name, proccesor, memory,screen,price,img,isLikded}) {
  const [producst, setProducts, restProduct, setRestProduct] = useContext(context)
  const dispatch = useDispatch()


  const handleLiked = () => {
    if (!isLikded) {
      likedProducts.push({id,name, proccesor, memory,screen,price,img,isLikded:true})
      setProducts(p => p.map(item => item.id === id ? {...item,isLikded:true } : item))
      setRestProduct(p => p.map(item => item.id === id ? {...item,isLikded:true } : item))
    } else{
      setProducts(p => p.map(item => item.id === id ? {...item,isLikded:false } : item))
      setRestProduct(p => p.map(item => item.id === id ? {...item,isLikded:false } : item))

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
   
    <div className='productCart' id={id} onClick={() => dispatch(setItem({id,name, proccesor, memory,screen,price,img})) }>
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
        <br />
        <Link to={'/singlepage'} onClick={() => dispatch(setItem({id,name, proccesor, memory,screen,price,img})) }><span className='showInfo'>show More info...</span></Link> 
          <div className='karzinka'>
              <button onClick={() => handleShop()}>Karzinka</button> <span className={`${isLikded ? 'liked' : ''}`}><i className="fa-solid fa-heart" style={{ fontSize:"25px", cursor:"pointer"}}  onClick={() =>  handleLiked()}></i> </span> 
          </div>
      </div>

      
    </div>
  
  )
}

export default ProductsCart
