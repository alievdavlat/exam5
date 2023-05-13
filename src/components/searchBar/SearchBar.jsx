import React from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue, setShowCarts, setShowInput } from '../../redux/slices/searchBarSlice';


function SearchBar() {
  const {showInput, showcarts} = useSelector(state => state.searchBarSlice)

  const dispatch = useDispatch()
  const [inpVal, setInpVal] = React.useState('')
  const inputRef = React.useRef()

  const handleChange = (value) => {
    setInpVal(value)
    dispatch(setInputValue(value))
  }

  const handleClear = () => {
    setInpVal('')
    inputRef.current.focus()
  }

  const hiddeAll = () => {
    dispatch(setShowCarts(false))
    dispatch(setShowInput(false))
  }

  return (
    <>
    <div className='searchBar'>
        <button  onClick={ () => hiddeAll()}>back</button>
        <div className='searchBar-wrapper'>
          <span><SearchIcon/></span>
            <input type="text" ref={inputRef}  value={inpVal} onChange={e => handleChange(e.target.value)}  placeholder='Search with name...' />
          <span onClick={() =>  handleClear()}><CloseIcon/></span>
        </div>
    </div>
        <div className='search-store'>
          <p>{inpVal}</p>
        </div>
    </>
  )
}

export default SearchBar
