import React, { createContext } from 'react';
import './App.css';
import Layout from './layout/Layout';

 export const context = createContext()

function App() {
const [showSelect, setShowSelect] = React.useState(true)


  return (
    <div className="App">
      <context.Provider value={[showSelect, setShowSelect]}>
        <Layout/>
      </context.Provider>
    </div>
  );
}

export default App;
