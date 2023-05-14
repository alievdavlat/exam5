import React, { createContext } from 'react';
import './App.css';
import Layout from './layout/Layout';

 export const context = createContext()

function App() {
const [producst, setProducts] = React.useState([])


  return (
    <div className="App">
      <context.Provider value={[producst, setProducts]}>
        <Layout/>
      </context.Provider>
    </div>
  );
}

export default App;
