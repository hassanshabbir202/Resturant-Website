import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import "../topItems/TopItems.scss";

export default function TopItem() {
  let data = [
    {
      img: "https://tse1.mm.bing.net/th?id=OIP.Sa9ZfKEPzreh38i8xrwQJgHaEo&pid=Api&P=0",
      price: "$90",
      title: "Special Burger",
      des: "Burger With Hot sauce",
    },
  ];

  return (
    <>
     <div >
     <Card variant="outlined" sx={{ width: 320 }}>
        {data.map((cardItems) => {
          return (
            <>
              <div sx={{ display:"flex"}}>
                <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                  {cardItems.title}
                </Typography>
                <Typography level="body2">{cardItems.des}</Typography>
                <IconButton
                  aria-label="bookmark Bahamas Islands"
                  variant="plain"
                  color="neutral"
                  size="sm"
                  sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
                >
                  <BookmarkAdd />
                </IconButton>
                <AspectRatio minHeight="120px" maxHeight="200px">
                  <img src={cardItems.img} loading="lazy" alt="" />
                </AspectRatio>
                <Box sx={{ display: "flex" }}>
                  <div>
                    <Typography level="body3">Total price:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                      {cardItems.price}
                    </Typography>
                  </div>
                <button id="allCartBtnUse">Add to Cart</button>
                </Box>
              </div>
            </>
          );
        })}
      </Card>
 
     </div>   
    </>
  );
}
