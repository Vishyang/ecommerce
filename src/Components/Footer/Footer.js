import React from 'react'
import './Footer.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import logo from '../../original.png';
import Img from '../../30days.png';
import Img2 from '../../android.png';
import Img3 from '../../apple.png';
import { ColorGrid } from "react-color-grid";
// import { Logout } from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    backgroundColor: "#FAFBFC"
}));




function Footer() {
    return (
        <div className="Footer">



            <div className="Footer-wrapper">
                <Box sx={{ width: 1 }}>
                    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                        <Box gridColumn="span 2">
                            <Item className="color-grey">
                                <h1 className="shop">ONLINE SHOPPING</h1>

                                <ul className="efgh">

                                    <li><a href="Mens">Mens</a></li>
                                    <li> <a href="/contact">Womens</a> </li>
                                    <li><a href="/about">Childrens</a></li>
                                    <li><a href="/about">Home&Living</a></li>
                                    <li><a href="/about">Studio</a></li>
                                    <li><a href="/about">Makeups</a></li>
                                    <li><a href="/about">GiftCards</a></li>
                                </ul>
                                <FavoriteBorderIcon></FavoriteBorderIcon>
                            </Item>
                        </Box>



                        <Box gridColumn="span 2">
                            <Item>
                                <h1 className="shop">USEFUL LINKS</h1>
                                <ul className="efgh">

                                    <li><a href="Mens">contacts us</a></li>
                                    <li> <a href="/contact">FAQ</a> </li>
                                    <li><a href="/about">T&C</a></li>
                                    <li><a href="/about">Track orders</a></li>
                                    <li><a href="/about">Shipping</a></li>
                                    <li><a href="/about">Cancellations</a></li>
                                    <li><a href="/about">Returns</a></li>
                                </ul>

                            </Item>
                        </Box>
                        <Box gridColumn="span 4">
                            <Item>
                                <h1 className="shop">EXPIERENCE MYNTRA ON  </h1>
                                <div className="ImgContainer">
                                    <img src={Img2} width="140" className="Container-logo" alt="Img2" />
                                    <img src={Img3} width="140" className="Container-logo" alt="Img3" />

                                </div>

                            </Item>
                        </Box>
                        <Box gridColumn="span 3">
                            <Item className="Promise">

                                <div className="Original">
                                    <img src={logo} width="50" className="Header-logo" alt="logo" />
                                    <p><span className="bold">100% ORIGINAL</span> guarantee for all products at myntra.com</p>

                                </div>

                                <div className="Original">
                                    <img src={Img} width="50" className="Header-logo" alt="Img" />
                                    <p><span className="bold">Return within 30days </span>of receiving your order</p>

                                </div>


                            </Item>
                        </Box>
                        <Box gridColumn="span 12">
                            <Item><h1 className="shop">POPULAR SEARCHES</h1>
                                <p>
                                    Makeup  Dresses For Girls  T-Shirts  Sandals  Headphones  Babydolls  Blazers For Men  Handbags  Ladies Watches  Bags  Sport Shoes  Reebok Shoes  Puma Shoes  Boxers  Wallets  Tops  Earrings  Fastrack Watches  Kurtis  Nike  Smart Watches  Titan Watches  Designer Blouse  Gowns  Rings  Cricket Shoes  Forever 21  Eye Makeup  Photo Frames  Punjabi Suits  Bikini  Myntra Fashion Show  Lipstick  Saree  Watches  Dresses  Lehenga  Nike Shoes  Goggles  Bras  Suit  Chinos  Shoes  Adidas Shoes  Woodland Shoes  Jewellery  Designers Sarees
                                </p>
                                <br></br>

                                <p>In case of any concern,<span className="abcd">Contact Us</span> </p>


                            </Item>
                        </Box>
                    </Box>
                </Box>

            </div>



        </div >





    );
}
export default Footer;