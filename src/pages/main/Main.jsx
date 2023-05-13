import React from 'react'
import './Main.css'
import {  Footer, Hero, Product, ProductsCart } from '../../components'
import Reklama from '../../components/reklama/Reklama'
import NewProduct from '../../components/newProduct/NewProduct'
import axios from 'axios'
import { useSelector } from 'react-redux'


function Main() {
  const { inputValue, showcarts } = useSelector( state => state.searchBarSlice)
  const [allProducts , setAllProducts] = React.useState([])
  const [newCategory, setNewCategory] = React.useState([])
  const [popular, setPopular] = React.useState([])
  const [mackbooks, setMackBooks] = React.useState([])
  const [acer, setAcer] = React.useState([])
  const [asus, setAsus] = React.useState([])
  const [lenova, setLenova] = React.useState([])



  const getData = async () => {
    const allProduct = await axios.get(`http://localhost:3001/all`) 
    const newdata = await axios.get(`http://localhost:3001/new`)
    const popular = await axios.get(`http://localhost:3001/popular`)
    const mackbooks = await axios.get(`http://localhost:3001/mackbooks`)
    const acer = await axios.get(`http://localhost:3001/acer`)
    const asus = await axios.get(`http://localhost:3001/asus`)
    const lenova = await axios.get(`http://localhost:3001/lenova`)

    setAllProducts(allProduct.data)
    setNewCategory(newdata.data)
    setAcer(acer.data)
    setAsus(asus.data)
    setMackBooks(mackbooks.data)
    setPopular(popular.data)
    setLenova(lenova.data)
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
         allProducts.filter((item, id) => item.name.toLowerCase().includes(inputValue.toLowerCase()) ).map((item, idx) => <ProductsCart key={item.id} {...item}/>) 
        }
         </div>
      :
     <>
     <Hero />
        <Product title={'popular'} data={newCategory} show={4}/>
        <Product title={'new'} data={popular} show={4}/>
        <Reklama />
        <Product title={'mackbooks'} data={mackbooks} show={4}/>
        <Product title={'acer'} data={acer} show={4}/>
        <Reklama />
        <Product show={4} title={'acer'} data={acer} />
        <Product show={4} title={'lenova'} data={lenova} />
        <Product show={4} title={'asus'} data={asus} />
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
