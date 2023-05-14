import React, { useContext } from 'react'
import './Main.css'
import {  Footer, Hero, Product, ProductsCart } from '../../components'
import Reklama from '../../components/reklama/Reklama'
import NewProduct from '../../components/newProduct/NewProduct'
import {  useSelector } from 'react-redux'
import request from '../../service/service'
import { context } from '../../App'
import bg1 from '../../assets/img/bg/christopher-gower-m_HRfLhgABo-unsplash.jpg'
import bg2 from '../../assets/img/bg/unsplash-NuFUbftUu_s-unsplash.jpg'


function Main() {
  const [producst, setProducts] = useContext(context)
  const { inputValue, showcarts } = useSelector( state => state.searchBarSlice)

  const getData = async () => {
    const allProduct = await request.get('/all')    
    setProducts(allProduct.data)
  }
  React.useEffect(() => {
    getData()
  },[] )
  


  return (
    <>
     
      <main>


     {
      showcarts ?
       <div className='searchedProducts'>
        {
         producst?.filter((item, id) => item.name.toLowerCase().includes(inputValue.toLowerCase()) ).map((item, idx) => <ProductsCart key={item.id} {...item}/>) 
        }
         </div>
      :
     <>
     <Hero />
        <Product title={'popular'} data={producst} show={4}/>
        <Product title={'new'} data={producst} show={4}/>
        <Reklama bg={bg2} text={'We deliver computers for your Office 📈'} />
        <Product title={'mackbook'} data={producst} show={4}/>
        <Product title={'acer'} data={producst} show={4}/>
        <Reklama bg={bg1} text={'we have the best laptops for your work 💻'} />
        <Product show={4} title={'acer'} data={producst} />
        <Product show={4} title={'lenova'} data={producst} />
        <Product show={4} title={'asus'} data={producst} />
        <NewProduct/>
     </>
    }
      </main>
      
      <footer>
        <Footer/>
      </footer>

    </>
  )
}

export default Main
