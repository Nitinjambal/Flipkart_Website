import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer/action";
import { payUsingPaytm } from "../../service/api";
import {post} from "../../utils/paytm";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
});

const StyledBtn = styled(Button)(({ theme }) => ({
  width: "48%",
  height: 50,
  borderRadius: 1,
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));


function Actionitem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;



  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };


  const buyNow=async(product)=>{
  payUsingPaytm(product)
  }
  
  return (
    <LeftContainer>
      
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <StyledBtn
        variant="contained"
        style={{ marginLeft: "10px", background: "#ff9f00" }}
        onClick={() => addItemToCart()}
      >
        
        <ShoppingCartIcon />
        Add to Cart
      </StyledBtn>
      <StyledBtn variant="contained" onClick={()=>buyNow(product)} style={{ background: "#FB541B" }}>
        <FlashOnIcon />
        Buy Now
      </StyledBtn>
    </LeftContainer>
  );
}


export default Actionitem;
