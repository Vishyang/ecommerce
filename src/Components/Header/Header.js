import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Header.css'
import Img4 from '../../myntra.PNG'
// import { Search, } from '@mui/icons-material';
import FreeSolo from './Search.js'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import LoginIcon from '@mui/icons-material/Login'
// import CustomizedBreadcrumbs from './Bread.js';
import {
  toggleSideCart,
  toggleSidebar,
} from '../../redux/sidebar/sidebar_actions'

function Header() {
  const { cart } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    let count = 0
    cart.forEach((item) => {
      count += item.qty
    })

    setCartCount(count)
  }, [cart, cartCount])

  return (
    <div className='Wrapper'>
      <div className='header-wrapper'>
        <p>
          {' '}
          We have your back. <span className='abcd'>Delivering Safe</span>.{' '}
          <a className='pqrs'>Know More</a>{' '}
        </p>
      </div>

      <div className='header-wrapperII'>
        <img src={Img4} width='200' className='myntra-logo' alt='Img4' />
        <div className='Header_Categories'>
          <ul className='categories'>
            <li>
              <a href=''>Mens</a>
            </li>
            <li>
              {' '}
              <a href=''>Womens</a>{' '}
            </li>
            <li>
              <a href=''>Childrens</a>
            </li>
            <li>
              <a href=''>Home&Living</a>
            </li>
            <li>
              <a href=''>Studio</a>
            </li>
            <li>
              <a href=''>Makeups</a>
            </li>
            <li>
              <a href=''>GiftCards</a>
            </li>
          </ul>
        </div>
        <div className='containers'>
          <div className='Icons'>
            <FreeSolo />
          </div>
          <div className='hhh'>
            <LoginIcon></LoginIcon>
            <AddShoppingCartIcon></AddShoppingCartIcon>
            {cartCount}
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </div>
        </div>

        {/* <CustomizedBreadcrumbs></CustomizedBreadcrumbs> */}
      </div>

      {/* <div className="containers"> */}
    </div>
  )
}
export default Header
