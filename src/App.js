import React, { createContext } from 'react';
import './App.css';
import Layout from './layout/Layout';

 export const context = createContext()
 export const likedProducts = JSON.parse(localStorage.getItem('liked')) ?  JSON.parse(localStorage.getItem('liked')) : []
 export const shoppingCart = JSON.parse(localStorage.getItem('shop')) ? JSON.parse(localStorage.getItem('shop')) : []  

 
function App() {
const [producst, setProducts] = React.useState([])
const [showLiked, setShowLiked] = React.useState(true)
const [likeCount, setLikeCount] = React.useState(0)


  return (
    <div className="App">
      <context.Provider value={[producst, setProducts, showLiked, setShowLiked, likeCount, setLikeCount]}>
        <Layout/>
      </context.Provider>
    </div>
  );
}

export default App;
