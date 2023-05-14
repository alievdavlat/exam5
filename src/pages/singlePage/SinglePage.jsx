import React from 'react'
import { useSelector } from 'react-redux'
import './SinglePage.css'

function SinglePage() {
  const {item} = useSelector(state => state.singlePageSlice)
  console.log(item);
  return (
    <div className='container'>
      <div className="singlePage">
        <div className="singlePage-item">
          <div className="singlePage-item__img">
            <img src={item.img} alt="img" />
          </div>
          <div className="singlePage-item__text">
            <h4>{item.name}</h4>
            <div>
            <p>{item.screen}</p>
            <p>{item.memory} </p>
            </div>
            <p>{item.proccesor}</p>
            <br /><br />
            <b>{item.price}</b>
              <br />
            <button>
              Add
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default SinglePage
