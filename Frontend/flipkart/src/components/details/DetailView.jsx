import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Grid, styled } from "@mui/material";
import Actionitem from "./Actionitem";
import ProductDetail from "./ProductDetail";
import { getSingleProductDetails } from "../../redux/productReducer/action";

const Component = styled(Box)`
  background: #fff2;
  margin-top: 55px;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#ffffff",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
`;


function DetailView() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector(
    (store) => store.productReducer.singleProduct
  );


  
  useEffect(() => {
    // if (product && id !== product.id) 
    dispatch(getSingleProductDetails(id));
  }, [dispatch, id ]);



  return (
    <Component>
      {
         product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <Actionitem  product={product}/>
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      }
    </Component>
  );
}

export default DetailView;
