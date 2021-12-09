import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img8 from '../../Gift.PNG';
import './Cart.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';






const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));
function CSSGrid1() {

    return (
        <div className="Cart-wrapper">
             <Box sx={{ width: 1 }}>
                 <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                    <Box gridColumn="span 8">
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

                            <h1 className="shop">OFFERS & COUPONS</h1>
                            <div className="Relief">
                            <p className="oo">Apply Coupons</p>
                            <button className="bn">APPLY
                                                       </button>
</div>
                 <div className="pic">     
<img src={img8} width="300" alt="img8" />
</div>










{/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[1, 2, 3].map((value) => (
        <ListItem
          key={value}
          disableGutters
          secondaryAction={
            <IconButton>
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`Price' ${value}`} />
        </ListItem>
      ))}
    </List> */}


<ul className="efgh">

                            <li>Price</li>
                            <li> Discount </li>
                            <li>Coupon</li>
                            <li>Total Amount</li>
                            
                        </ul>

                        <div data-testid="button" class="button-base-button  ">Place Order</div>



                     </Item>
                     </Box>
                     
                    

                 </Box>
                 </Box>
         </div>
    );
}
export default CSSGrid1;
                                
                               