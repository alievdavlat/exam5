import React, { useContext } from 'react'
import './ProductsCart.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { context } from '../../App';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { colors } from '@mui/material';
import { useDispatch } from 'react-redux';
import { likedProduct } from '../../redux/slices/cartSlices/allCartSlice';

const LikedlocolStorage = JSON.parse(localStorage.getItem('liked')) ?  JSON.parse(localStorage.getItem('liked')) : []

function ProductsCart({id,name, proccesor, memory,screen,price,img,isLikded}) {
  const [producst, setProducts] = useContext(context)



  const handleLiked = () => {
    if (!isLikded) {
      LikedlocolStorage.push({id,name, proccesor, memory,screen,price,img,isLikded:true})
      setProducts(p => p.map(item => item.id === id ? {...item,isLikded:true } : item))
    } else{
      setProducts(p => p.map(item => item.id === id ? {...item,isLikded:false } : item))

    }
  }

  React.useEffect(() => {
    localStorage.setItem('liked', JSON.stringify(LikedlocolStorage))
  },[handleLiked])
  return (
    <div className='productCart'>
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
            <button>Karzinka</button> <span className={`${isLikded ? 'liked' : ''}`}> <i className="fa-solid fa-heart" style={{ fontSize:"25px", cursor:"pointer"}}  onClick={() =>  handleLiked()}></i></span>
          </div>
      </div>

      
    </div>
  )
}

export default ProductsCart
