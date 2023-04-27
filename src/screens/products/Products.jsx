import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Typewriter } from "react-simple-typewriter";
import specialBurger from "../../assets/specialburger.png"
import "../products/Products.scss"
import { Button } from '@mui/material';
import Counter from '../counter/Counter';
import Navbar from '../navbar/Navbar';

const Products = () => {
  const theme = useTheme();

   let productsData = [
    {
       img:"https://tse1.mm.bing.net/th?id=OIP.Sa9ZfKEPzreh38i8xrwQJgHaEo&pid=Api&P=0",
       titleOne:"Lorem ipsum dolor sit amet.",
       titleTwo:"Lorem ipsum dolor",
       des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, consequatur?",
       price:"$50"
    },
    {
      img:"https://tse4.mm.bing.net/th?id=OIP.6gAPrW1Eg54ITX_Ebczq5gHaEK&pid=Api&P=0",
      titleOne:"Lorem ipsum dolor sit amet.",
      titleTwo:"Lorem ipsum dolor",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, consequatur?",
      price:"$50"
    },
    {
      img:"https://tse1.mm.bing.net/th?id=OIP.jGzLtE8w8xeTGlvTvMKU0wHaEo&pid=Api&P=0",
      titleOne:"Lorem ipsum dolor sit amet.",
      titleTwo:"Lorem ipsum dolor",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, consequatur?",
      price:"$50"
    },
    {
      img:"https://wallpapercave.com/wp/wp1929455.jpg",
      titleOne:"Lorem ipsum dolor sit amet.",
      titleTwo:"Lorem ipsum dolor",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, consequatur?",
      price:"$50"
    },
    {
      img:"https://tse4.mm.bing.net/th?id=OIP.B0cv0aBIvuASfvoWGzm_OAHaE8&pid=Api&P=0",
      titleOne:"Lorem ipsum dolor sit amet.",
      titleTwo:"Lorem ipsum dolor",
      des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, consequatur?",
      price:"$50"
    },
    {
      img:"https://tse1.mm.bing.net/th?id=OIP.6h88TiWAP9nAZ-c_bx4dwgHaFk&pid=Api&P=0",
       titleOne:"Lorem ipsum dolor sit amet.",
       titleTwo:"Lorem ipsum dolor",
       des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, consequatur?",
       price:"$50"
    }
   ];


  return (
    <div>
     <div className="products-background-image">
     <Navbar/> 
    <div className="leftRightBoth">
    <div className="left">
    <h1 className="texttype">
                Special Burger  
                <span className="changedText" style={{fontSize:'30px'}}>
                  <Typewriter
                    words={["  Of the Resturant", "  You Must Try", "  Special Food"]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis rem id ipsum nostrum totam maiores atque ex dolores aliquid? Voluptas ea eveniet impedit accusantium, vero blanditiis tempore repellendus asperiores ducimus magnam nam itaque? Earum explicabo dolores sint, temporibus, dignissimos, quibusdam eveniet dolor ex repellendus ab tenetur eum vero perferendis nulla beatae quaerat? Quia provident vitae laudantium, veritatis, doloremque itaque cum sint architecto ullam commodi incidunt est voluptas velit! Quos distinctio </p>
        <button id='mProduct'>More Products</button>
      </div>
      <div className="right">
      <img id='sp_burger' src={specialBurger} alt="" />
      </div>
    </div>
     </div>
     <h1 className='menuItems'>MENU ITEMS</h1>
      <div className="productsCards">
      {
        productsData.map((products)=>{
          return (
            <Card sx={{ display: 'flex' , position:"relative" , width:"600px" , marginTop:"8vh" , cursor:"pointer" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5" style={{fontSize:"17px"}}>
                 {products.titleOne}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div" sx={{marginTop:"2vh"}}>
                  {products.titleTwo}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                 Price :  {products.price}
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                {/* <IconButton aria-label="previous">
                  {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                </IconButton> */}
                {/* <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton> */}
                {/* <IconButton aria-label="next">
                  {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                </IconButton> */}
               <button id='secondAddtoCart'>Add to Cart</button>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 381 , height:200 }}
              image={products.img}
              alt="Live from space album cover"
            />
          </Card>
          )
        })
       }
      </div>

 <Counter/>

    </div>
  )
}

export default Products