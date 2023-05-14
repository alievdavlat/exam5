import React, { useContext } from 'react'
import './ProductsCart.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { context } from '../../App';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLiked } from '../../redux/slices/likeSlice';

function ProductsCart({name, proccesor, memory,screen,price,img}) {
  const [showSelect , setShowSelect] = useContext(context)
  const {isLiked} = useSelector(state => state.likeSlice)
  const dispatch = useDispatch()

  return (
    <div className='productCart' style={{width:`${showSelect ? '320px' : '320px'}`, height:`${showSelect ? '530px' : '450px'}`}}>
      <div className="product-cart__img">
        <img src={img} alt={name} />
      </div>

      <div className="productCart-info">
        <h5>{name}</h5>

        <div className='info'>
          <span>{proccesor}</span>
          <div>
          <span>({memory}) </span>
          <span> {screen}</span>
          </div>
        </div>

        <span className='price'>
          <b>{price}</b>
          {/* <span>{}</span> */}
        </span>

          <div className='karzinka'>
            <button>Karzinka</button>  {isLiked ? <span onClick={() => dispatch(setIsLiked(false))} style={{fontSize:'30px', cursor:'pointer'}}>❤️</span>  :  <span onClick={() => dispatch(setIsLiked(true))}><FavoriteBorderIcon sx={{fontSize:'30px',margin:'15px 0px 0px 0px',cursor:'pointer'}}/></span> }
          </div>
      </div>

      
    </div>
  )
}

export default ProductsCart
