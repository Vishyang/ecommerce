import * as React from 'react'
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Img6 from '../../shirt.PNG'
import { useLocation } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import { useSelector, useDispatch } from 'react-redux'
import './Catalogue.css'
import { fetchProducts, addToCart } from '../../redux/products/products_actions'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function Catalogue() {
  const { products, cart } = useSelector((state) => state.products)
  const [totalPrice, setTotalPrice] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    let price = 0

    cart.forEach((item) => {
      price += item.qty * item.price
    })

    setTotalPrice(price)
  }, [cart, totalPrice, setTotalPrice])

  return (
    <div className='Holder'>
      <Box sx={{ width: 1 }}>
        <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={2}>
          <Box gridColumn='span 2'>
            <Item>
              <h1 className='shop'>USEFUL LINKS</h1>
              <ul className='efgh'>
                <li>
                  <a href='Mens'>contacts us</a>
                </li>
                <li>
                  {' '}
                  <a href='/contact'>FAQ</a>{' '}
                </li>
                <li>
                  <a href='/about'>T&C</a>
                </li>
                <li>
                  <a href='/about'>Track orders</a>
                </li>
                <li>
                  <a href='/about'>Shipping</a>
                </li>
                <li>
                  <a href='/about'>Cancellations</a>
                </li>
                <li>
                  <a href='/about'>Returns</a>
                </li>
              </ul>
              {/* Don't Delete */}
              {/* {cart.length > 0 ? (
            cart.map((item) => {
              return (
                <div key={item.id} className="cart-sidebar__products">
                  <div className="cart-sidebar__product-image-container">
                    <img
                      className="cart-sidebar__product-image"
                      src={item.image}
                      alt="product"
                    />
                  </div>
                  <div className="cart-sidebar__product-info">
                    <p className="cart-sidebar__product-name">{item.name}</p>
                    <div className="cart-sidebar__prices">
                      <p className="cart-sidebar__product-qty">{item.qty} X</p>
                      <p className="cart-sidebar__product-price">
                        {item.price}
                      </p>
                      <p className="cart-sidebar__delete">
                        <a href="javascript:void(0)"
                          onClick={() => dispatch(item.id)}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="cart-sidebar__empty-image-container">
              <img
                className="cart-sidebar__empty-image"
                src={'cartEmptyImg'}
                alt="cart is empty"
              />
            </div>
          )} */}
            </Item>
          </Box>

          <Box gridColumn='span 10'>
            <Item>
              <Box sx={{ width: 1 }}>
                <Box
                  display='grid'
                  gridTemplateColumns='repeat(12, 1fr)'
                  gap={2}
                >
                  {products.map(
                    ({ brand, image, name, price, oldPrice, title, id }) => (
                      <Box gridColumn='span 3'>
                        <Item>
                          <Paper
                            sx={{
                              p: 2,
                              margin: 'auto',
                              maxWidth: 500,
                              flexGrow: 1,
                            }}
                          >
                            <Grid container spacing={2}>
                              <Grid item>
                                <img
                                  src={image}
                                  width='200'
                                  className='myntra-logo'
                                  alt='img'
                                />
                                <Typography
                                  gutterBottom
                                  variant='subtitle1'
                                  component='div'
                                >
                                  {name}
                                </Typography>
                                <Typography variant='body2' gutterBottom>
                                  {brand}
                                </Typography>
                                <Typography
                                  variant='body2'
                                  color='text.secondary'
                                >
                                  {title}
                                </Typography>
                                <Typography
                                  sx={{ cursor: 'pointer' }}
                                  variant='body2'
                                >
                                  <button
                                    className='asdsa'
                                    onClick={() => dispatch(addToCart(id))}
                                  >
                                    AddToCart
                                  </button>
                                </Typography>
                                <Typography variant='subtitle1' component='div'>
                                  ₹ {price}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Item>
                      </Box>
                    )
                  )}
                </Box>
              </Box>
            </Item>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
