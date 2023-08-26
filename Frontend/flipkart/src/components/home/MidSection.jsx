import React from "react";
import { imageURL } from "../../constansts/data";
import { Box, Grid, styled } from "@mui/material";

const Wrapper = styled(Grid)`
  margin-top: 10px;
  justify-content: space-between;
`;

const Image = styled("img")(({ theme }) => ({
  marginTop: 10,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
}));

function MidSection() {
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Wrapper
        container
        rowSpacing={{ lg: 1, sm: 1, md: 1, xs: 1 }}
        columnSpacing={{ lg: 1, sm: 1, md: 1, xs: 1 }}
      >
        {imageURL?.map((image) => (
          <Grid key={image} item lg={4} md={4} sm={12} xs={12}>
            <img src={image} alt="iamge" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Wrapper>

      <Image src={url} alt="covid" />
    </>
  );
}

export default MidSection;
